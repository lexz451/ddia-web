import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";

export const TAGS = [
    {
        title: "Announcements",
        slug: "announcements",
    },
    {
        title: "Blog",
        slug: "blog",
    },
    {
        title: "In the News",
        slug: "in-the-news",
    },
    {
        title: "Resources",
        slug: "resources",
    },
    {
        title: "Workshops and Events",
        slug: "events",
    },
    {
        title: "Policy",
        slug: "policy",
    },
    {
        title: "Reports",
        slug: "reports",
    }
];

export function buildPostsQuery(tag?: string, query?: string) {
    const filters: any = {};

    if (tag == 'public-opinion-research') {
        filters["categories"] = {
            slug: {
                $eq: tag,
            },
        };
    }else if (tag) {
        filters["tags"] = {
            slug: {
                $eq: tag,
            },
        };
    } else {
        filters["tags"] = {
            slug: {
                $in: TAGS.map((t) => t.slug),
            },
        };
    }

    return {
        filters: {
            ...filters,
            $or: [
                {
                    title: {
                        $containsi: query,
                    },
                },
                {
                    description: {
                        $containsi: query,
                    },
                },
            ],
        },
        populate: [
            "feature_media",
            "post_type",
            "authors",
            "tags",
            "categories",
        ],
        pagination: {
            limit: 8,
        },
        sort: ["created_date:desc"],
    };
}

export async function fetchData({
    tag,
    query,
}: {
    tag?: string;
    query?: string;
}) {
    const tagRes = await getApi<any[]>(`/tags`, {
        populate: ["categories"],
        sort: ["title:asc"],
    });

    // filter out tags with expecific categories slugs
    const tags = tagRes.data.filter((t) => {
        const categories = t.categories.map((c: any) => c.slug);
        return !categories.includes("issues-and-narratives") && !categories.includes("platforms-and-apps");
    });

    const posts = await getApi<TPost[]>(`/posts`, buildPostsQuery(tag, query), {
        next: { tags: ["post"] },
    });

    return {
        tags: [
            ...tags,
            {
                title: "Research and Analysis",
                slug: "public-opinion-research",
                key: "research-and-analysis"
            }
        ],
        posts: {
            data: posts.data,
            total: posts.meta.pagination.total || 0,
        },
    };
}
