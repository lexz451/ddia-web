import Filters from "@/lib/components/filters";
import { TAGS, fetchData } from "./data";
import LoadMoreWrapper from "./load-more";
import ContactUsBanner from "@/lib/components/ContactUsBanner";


export default async function LatestUpdates({
  searchParams
}: { searchParams: { [key: string]: string | undefined } }) {

  const { q, tag } = searchParams;

  const { posts } = await fetchData({ tag, query: q });

  return (
    <main className="page-container mt-[150px]">
      <Filters tags={TAGS}></Filters>

      <section className="pt-10">
        <LoadMoreWrapper
          tag={tag}
          query={q}
          posts={posts?.data || []}
          total={posts?.total || 0}
          className="flex flex-col gap-10"
        ></LoadMoreWrapper>
      </section>

      <section className="pb-footer mb-20">
        <ContactUsBanner></ContactUsBanner>
      </section>
    </main>
  );
}
