import { Link } from "@lexz451/next-nprogress";
import Posts from "./posts";
import { fetchLatestPosts, fetchPostTypes } from "@/lib/data/posts";
import Filters from "@/lib/components/filters";
import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";

async function fetchData(params: any) {

  const tag = params.tag;
  const query = params.q;

  const { data: [categoryData] } = await getApi<any>('/categories', {
    filters: {
      slug: {
        $eq: 'latest-updates'
      }
    },
    populate: {
      tags: {
        fields: ['slug', 'title']
      }
    }
  })

  const tags = categoryData.tags;

  let filters: any = {
    categories: {
      slug: {
        $eq: 'latest-updates'
      }
    }
  };
  if (tag) {
    filters.tags = {
      slug: {
        $eq: tag
      }
    }
  }
  if (query) {
    filters = {
      ...filters,
      $or: [
        {
          title: {
            $containsi: query
          }
        },
        {
          description: {
            $containsi: query
          }
        }
      ],
    }
  }
  const posts = await getApi<TPost[]>(`/posts`, {
    filters,
    populate: ["feature_media", "post_type", "authors"],
    pagination: {
      limit: 6,
    },
  });
  return {
    posts,
    tags
  };
}

export default async function LatestUpdates({
  searchParams
}: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const { posts: {
    data: posts,
    meta: { pagination: { total } }
  }, tags } = await fetchData(searchParams);

  return (
    <main className="page-container mt-[12rem]">
      <Filters tags={tags}></Filters>

      <section className="pt-10">
        <Posts
          posts={posts}
          total={total}
          className="flex flex-col gap-10"
        ></Posts>
      </section>

      <section className="pb-footer">
        <div className="flex w-full my-10 h-80 rounded-3xl bg-gradient-to-b from-design-light-green to-gray-100">
          <h1 className="m-auto font-[Inter] font-semibold text-5xl text-gray-500">
            Banner
          </h1>
        </div>
      </section>
    </main>
  );
}
