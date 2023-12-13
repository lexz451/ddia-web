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
    },{
        title: "Reports",
        slug: "reports",
    }
]

export function buildPostsQuery(tag?: string, query?: string) {

    const filters: any = {}

    if (tag) {
        filters['tags'] = {
            slug: {
                $eq: tag
            }
        }
    } else {
        filters['tags'] = {
            slug: {
                $in: TAGS.map(t => t.slug)
            }
        }
    }

    return {
        filters: {
            ...filters,
            $or: [
                {
                  title: {
                    $containsi: query
                  }
                },
                {
                  description: {
                    $containsi: query
                  }
                }
            ],
        },
        populate: ["feature_media", "post_type", "authors", "tags", "categories"],
        pagination: {
            limit: 8,
        },
        sort: ['created_date:desc']
    }
}

export async function fetchData({
    tag,
    query
}: { tag?: string, query?: string }) {

    const posts = await getApi<TPost[]>(`/posts`, buildPostsQuery(tag, query), {
        next: { tags: ["post"] },
    });

    return {
        posts: {
            data: posts.data,
            total: posts.meta.pagination.total || 0,
        }
    }

}