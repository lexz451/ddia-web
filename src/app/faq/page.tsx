import Accordion from "@/lib/components/accordion";
import LatestUpdates from "@/lib/components/latest-updates";
import { fetchLatestPosts } from "@/lib/data/posts";
import { getApi } from "@/lib/utils/api";
import { Link } from "@lexz451/next-nprogress";

export default async function FAQ() {
  const { data: latestPosts } = await fetchLatestPosts({
    limit: 3,
  });

  const { data: faqs } = await getApi("/faqs");

  return (
    <main className="bg-design-light">
      <section className="Rectangle198 bg-gradient-to-b from-design-light-green to-design-light pt-[180px] pb-[8rem]">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl text-center text-design-green font-semibold mx-auto my-4">
            Frequently asked questions
          </h1>
          <Link
            href="#"
            className="text-sm mx-auto r-btn text-design-green border-design-green"
          >
            Contact us
          </Link>
        </div>
      </section>

      <section className="bg-design-light pt-[4rem] translate-y-[-3rem]">
        <div className="max-w-[57rem] p-11 mx-auto">
          {faqs.map((value: any) => {
            return (
              <Accordion title={value.question} key={value.id}>
                {<div dangerouslySetInnerHTML={{ __html: value.answer }}></div>}
              </Accordion>
            );
          })}
        </div>
      </section>

      <section className="px-11 page-container">
        <div className="bg-design-green flex rounded-xl h-[20rem]">
          <h1 className="text-design-light block text-5xl font-medium m-auto">
            Banner
          </h1>
        </div>
      </section>

      <section className="my-20 p-11 page-container">
        <LatestUpdates posts={latestPosts} />
      </section>
    </main>
  );
}
