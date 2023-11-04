import Filters from "@/lib/components/filters";
import { fetchData } from "./data";
import LoadMoreWrapper from "./load-more";


export default async function LatestUpdates({
  searchParams
}: { searchParams: { [key: string]: string | undefined } }) {

  const { search, tag } = searchParams;

  const { posts, tags } = await fetchData({ tag, query: search });

  return (
    <main className="page-container mt-[12rem]">
      <Filters tags={tags}></Filters>

      <section className="pt-10">
        <LoadMoreWrapper
          tag={tag}
          query={search}
          posts={posts?.data || []}
          total={posts?.total || 0}
          className="flex flex-col gap-10"
        ></LoadMoreWrapper>
      </section>

      <section className="pb-footer mb-20">
        <div className="flex w-full my-10 h-80 rounded-3xl bg-gradient-to-b from-design-light-green to-gray-100">
          <h1 className="m-auto font-[Inter] font-semibold text-5xl text-gray-500">
            Banner
          </h1>
        </div>
      </section>
    </main>
  );
}
