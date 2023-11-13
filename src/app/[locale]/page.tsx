import GetInvolved from "@/lib/components/get-involved";
import LatestUpdates from "@/lib/components/latest-updates";
import OurWork from "@/lib/components/our-work";
import AboutUs from "@/lib/components/about-us";
import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";
import Hero from "@/lib/components/hero";
import initTranslations from "@/i18n";

async function fetchData() {
    const { data: posts } = await getApi<TPost[]>(
        "/posts",
        {
            filters: {
                front_page: {
                    $eq: true,
                }
            },
            pagination: {
                limit: 3,
            },
            populate: ["feature_media", "post_type", "authors"],
            sort: ["created_date:desc"],
        },
        {
            next: { tags: ["post"] },
        }
    );
    return {
        posts,
    };
}

export default async function Home({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const { t } = await initTranslations(locale);
    const { posts: latestPosts } = await fetchData();

    return (
        <main>
            <Hero t={t}></Hero>
            <section className="page-container my-20">
                <AboutUs t={t}></AboutUs>
            </section>
            <section>
                <OurWork locale={locale}></OurWork>
            </section>
            <GetInvolved locale={locale}></GetInvolved>
            <section className="page-container my-20 pb-footer">
                <LatestUpdates t={t} posts={latestPosts}></LatestUpdates>
            </section>
        </main>
    );
}
