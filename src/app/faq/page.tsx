import Accordion from "@/lib/components/accordion";
import LatestUpdates from "@/lib/components/latest-updates";
import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";
import { Link } from "@lexz451/next-nprogress";

async function fetchData() {
  const { data: faqs } = await getApi<any[]>("/faqs", {
    next: { tags: ['faqs'] }
  });
  const { data: posts } = await getApi<TPost[]>("/posts", {
    pagination: {
      limit: 3,
    },
    populate: ["feature_media", "post_type", "authors"],
    sort: ["publish_date:desc"],
  });
  return { posts, faqs };
}

export default async function FAQ() {
  const { posts: latestPosts, faqs } = await fetchData();

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

      <section className="page-container">
        <div className="bg-design-green flex rounded-xl h-[20rem]">
          <h1 className="text-design-light block text-5xl font-medium m-auto">
            Banner
          </h1>
        </div>
      </section>

      <section className="my-20 pb-footer page-container">
        <LatestUpdates posts={latestPosts} />
      </section>
    </main>
  );
}
