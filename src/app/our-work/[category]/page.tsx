import Filters from "@/lib/components/filters";
import { fetchPostByCategory } from "@/lib/data/posts";
import { TPost } from "@/lib/utils/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import TestImg from '@/lib/assets/tecnologia-fondo-toque-humano-nueva-version-moderna-creacion-adan-11.png';
import ServerImage from "@/lib/components/server-image";
import { getApi } from "@/lib/utils/api";
import LoadMore from "@/lib/components/load-more";
import Posts from "./posts";

async function fetchData(
    category: string,
    tag?: string,
    query?: string) {

    const { data: [categoryData] } = await getApi<any>('/categories', {
        filters: {
            slug: {
                $eq: category
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
                $eq: category
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
        populate: [
            "feature_media",
            "post_type",
            "authors",
            "authors.avatar",
            "categories",
            "tags"],
    });
    return {
        posts,
        tags
    };
}


export default async function OurWorkPage({
    params: { category },
    searchParams
}: { params: { category: string }, searchParams: any }) {

    const tag = searchParams.tag;
    const query = searchParams.q;

    const { posts: { data: posts, meta: { pagination: { total } } }, tags } = await fetchData(category, tag, query);

    return (
        <main>
            <section className="pt-[150px]">
                <div className="page-container">
                    <Filters tags={tags}></Filters>
                </div>
            </section>
            <section className="mt-20">
                <div className="page-container">
                    <Posts posts={posts} total={total} className="grid grid-cols-3 gap-10"></Posts>
                </div>
            </section>
            <section className="pb-footer my-10"></section>
        </main>
    )
}