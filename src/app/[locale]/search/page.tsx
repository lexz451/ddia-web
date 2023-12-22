import LoadMoreWrapper from "./load-more";
import { fetchData } from "./data";
import SearchWrapper from "./search";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search | DDIA - Digital Democracy Institute of the Americas",
    description:
        "The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.",
    robots: {
        follow: true,
        index: true,
    },
    publisher: "DDIA",
    alternates: {
        canonical: `${process.env.SITE_HOST}/en/search`,
        languages: {
            "en-US": `${process.env.SITE_HOST}/en/search`,
            "es-ES": `${process.env.SITE_HOST}/es/search`,
            "pt-BR": `${process.env.SITE_HOST}/pt/search`,
        },
    },
};

export default async function SearchPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) {
    const { q } = searchParams;

    const { posts } = await fetchData({ query: q });

    return (
        <main className="page-container mt-[150px]">
            <Suspense fallback={true}>
                <SearchWrapper q={q}></SearchWrapper>
            </Suspense>
            {posts?.total > 0 && (
                <section className="mt-5 ml-5">
                    <small className="text-sm text-gray-500 font-bold">
                        Showing {posts?.total} results for &quot;{q}&quot;
                    </small>
                </section>
            )}
            <section className="mt-5">
                {posts?.total == 0 && !q && (
                    <div className="text-center my-20">
                        <h1 className="text-2xl font-bold">
                            Please enter a search term
                        </h1>
                    </div>
                )}
                {posts?.total === 0 && q && (
                    <div className="text-center my-20">
                        <h1 className="text-2xl font-bold">
                            No results found for &quot;{q}&quot;
                        </h1>
                        <p className="mt-4 text-gray-500">
                            Please try another search term
                        </p>
                    </div>
                )}
                <LoadMoreWrapper
                    query={q}
                    posts={posts?.data || []}
                    total={posts?.total || 0}
                    className="flex flex-col gap-10"
                ></LoadMoreWrapper>
            </section>
            <section className="pb-footer mb-20"></section>
        </main>
    );
}
