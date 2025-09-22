import Filters from "@/lib/components/filters";
import { fetchData } from "./data";
import LoadMoreWrapper from "./load-more";
import ContactUsBanner from "@/lib/components/ContactUsBanner";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Latest Updates | DDIA - Digital Democracy Institute of the Americas",
    description:
        "The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.",
    robots: {
        follow: true,
        index: true,
    },
    publisher: "DDIA",
    alternates: {
        canonical: `${process.env.SITE_HOST}/en/latest`,
        languages: {
            "en-US": `${process.env.SITE_HOST}/en/latest`,
            "es-ES": `${process.env.SITE_HOST}/es/latest`,
            "pt-BR": `${process.env.SITE_HOST}/pt/latest`,
        },
    },
};

export default async function LatestUpdates({
    params: { locale },
  searchParams
}: { params: { locale: string }, searchParams: { [key: string]: string | undefined } }) {

  const { q, tag } = searchParams;

  const { posts, tags } = await fetchData({ tag, query: q, locale });

  return (
    <main className="page-container mt-[150px]">
      <Suspense fallback={null}>
        <Filters tags={tags} locale={locale}></Filters>
      </Suspense>

      <section className="pt-10">
        <LoadMoreWrapper
          tag={tag}
          query={q}
          posts={posts?.data || []}
          total={posts?.total || 0}
          className="flex flex-col gap-10"
          locale={locale}
        ></LoadMoreWrapper>
      </section>

      <section className="pb-footer mb-20">
        <ContactUsBanner locale={locale}></ContactUsBanner>
      </section>
    </main>
  );
}
