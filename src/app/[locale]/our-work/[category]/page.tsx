import Filters from "@/lib/components/filters";
import { fetchData } from "./data";
import LoadMoreWrapper from "./load-more";

export async function generateStaticParams() {   
    return [
        { category: "issues-and-narratives" },
        { category: "platforms-and-apps" }
    ]
}

export default async function OurWorkPage({
    params: { category },
    searchParams
}: { params: { category: string }, searchParams: any }) {

    const { q, tag } = searchParams;

    const { posts, tags } = await fetchData(category, tag, q);

    return (
        <main>
            <section className="pt-[150px]">
                <div className="page-container">
                    <Filters tags={tags}></Filters>
                </div>
            </section>
            <section className="mt-10 lg:mt-20">
                <div className="page-container">
                    <LoadMoreWrapper
                        category={category}
                        tag={tag}
                        query={q}
                        posts={posts.data} 
                        total={posts.total} 
                        className="grid lg:grid-cols-3 gap-10"></LoadMoreWrapper>
                </div>
            </section>
            <section className="pb-footer my-10"></section>
        </main>
    )
}