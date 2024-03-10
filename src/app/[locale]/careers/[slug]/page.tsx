import { getApi } from "@/lib/utils/api";
import { parsePostContent } from "@/lib/utils/helpers";
import { Metadata, ResolvingMetadata } from "next";


export async function generateStaticParams() {
    const { data: posts } = await getApi<any[]>(`/careers`, {
        filters: {
            content: {
                $ne: null,
            },
        },
    });
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({params: { slug, locale }}: { params: { slug: string, locale: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const { post } = await fetchData(slug);
    if (!post) return {
        title: "About Us | DDIA - Digital Democracy Institute of the Americas",
        description: "The page you're looking for was not found"
    };
    const previousImages = (await parent).openGraph?.images || []
    return {
        title: post.title,
        description: (await parent).description,
        robots: {
            follow: true,
            index: true,
        },
        publisher: "DDIA",
        alternates: {
            canonical: `${process.env.SITE_HOST}/en/${post.slug}`,
            languages: {
                "en-US": `${process.env.SITE_HOST}/en/${post.slug}`,
                "es-ES": `${process.env.SITE_HOST}/es/${post.slug}`,
                "pt-BR": `${process.env.SITE_HOST}/pt/${post.slug}`,
            },
        },
        openGraph: {
            images: [
                ...previousImages
            ]
        },
        twitter: {
            images: [
                ...previousImages
            ]
        }
    }
}

async function fetchData(slug: string) {
    const { data: [post] } = await getApi<any[]>(`/careers`, {
        filters: {
            slug: {
                $eq: slug
            },
        },
        // populate: ["feature_media", "post_type", "authors", "categories"]
    }, {
        next: { tags: ["career"] }
    });
    return { post };
}

export default async function CareerDetailPage({
    params: { slug, locale },
}: {
    params: { slug: string; locale: string };
}) {
    const { post } = await fetchData(slug);

    const content = parsePostContent(post.content);

    return (
        <main>
            <section className="heading bg-gradient-to-b from-design-light-green to-design-light pt-[150px]">
                <div className="container mx-auto px-5 flex flex-col items-center justify-center pt-10 pb-20">
                    <h1 className="text-center font-avenir font-extrabold text-4xl lg:text-5xl text-design-green">{post.title}</h1>
                    <button className="r-btn border-design-green text-design-green mt-10">Contact Us</button>
                </div>
            </section>
            <section className="content page-container grid lg:grid-cols-[300px_1fr] gap-10 mt-10 mb-10">
                <div className="order-2 lg:order-1">
                    <div className="rounded-xl bg-design-extralight-yellow py-10 px-8 flex flex-col">
                        <h3 className="font-bold">Profile:</h3>
                        <p>{post.profile || "-"}</p>
                        <h3 className="font-bold mt-4">Location:</h3>
                        <p>{post.location || "-"}</p>
                        {
                            post.url && (
                                <a href={post.url} className="r-btn border-none text-white bg-design-green mt-10">
                                    Apply for this job
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="post-content"
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                    ></div>
                </div>
            </section>
            <section className="pb-footer"></section>
        </main>
    )
}