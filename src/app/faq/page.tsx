import Accordion from "@/lib/components/accordion";
import LatestUpdates from "@/lib/components/latest-updates";
import { fetchLatestPosts } from "@/lib/data/posts";
import { getApi } from "@/lib/utils/api";
import { Link } from "@lexz451/next-nprogress";


export default async function FAQ() {

  const { data: latestPosts } = await fetchLatestPosts({
    limit: 3,
  });

  return (
    <main className="bg-design-light">
      <section className="Rectangle198 bg-gradient-to-b from-design-light-green to-design-light pt-[180px] pb-[8rem]">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl text-design-green font-semibold mx-auto my-4">
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
          <Accordion title="What’s the best thing about Switzerland?">
            {`I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`}
          </Accordion>
          <Accordion title="How do you make holy water?">
            {"You gotta call Jesus first"}
          </Accordion>
          <Accordion title="What do you call someone with no body and no nose?">
            {"Nobody Nose. bdmptsss"}
          </Accordion>
          <Accordion title="Why do you never see elephants hiding in trees?">
            {"They are hiding so well, that you are not able to see them."}
          </Accordion>
          <Accordion title="Why can’t you hear a pterodactyl go to the bathroom?">
            {'Because the "P" is silent!'}
          </Accordion>
          <Accordion title="Why did the invisible man turn down the job offer?">
            {"Because he just couldn't see himself doing it."}
          </Accordion>
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
