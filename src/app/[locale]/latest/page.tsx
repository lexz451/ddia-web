import Filters from "@/lib/components/filters";
import { TAGS, fetchData } from "./data";
import LoadMoreWrapper from "./load-more";
import ContactUsBanner from "@/lib/components/ContactUsBanner";
import { Suspense } from "react";


export default async function LatestUpdates({
    params: { locale },
  searchParams
}: { params: { locale: string }, searchParams: { [key: string]: string | undefined } }) {

  const { q, tag } = searchParams;

  const { posts } = await fetchData({ tag, query: q });

  return (
    <main className="page-container mt-[150px]">
      <Suspense fallback={null}>
        <Filters tags={TAGS} locale={locale}></Filters>
      </Suspense>

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
        <ContactUsBanner locale={locale}></ContactUsBanner>
      </section>
    </main>
  );
}
