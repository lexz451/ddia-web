import SearchBar from "@/lib/components/search-bar";
import LoadMoreWrapper from "./load-more";
import { fetchData } from "./data";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) {
    const { q } = searchParams;

    const { posts } = await fetchData({ query: q });

    return (
        <main className="page-container mt-[150px]">
            <section className="">
                <SearchBar queryParam="q" autoFocus></SearchBar>
            </section>
            <section className="mt-10">
                {posts?.total == 0 && !q && (
                    <div className="text-center my-20">
                        <h1 className="text-2xl font-bold">
                            Please enter a search term
                        </h1>
                    </div>
                )}
                {posts?.total === 0 && q && (
                    <div className="text-center">
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