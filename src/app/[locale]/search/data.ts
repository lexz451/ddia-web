import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";

export function buildPostsQuery(query?: string) {
    return {
        filters: {
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
                {
                    content: {
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
            limit: 10,
        },
        sort: ["created_date:desc"],
    };
}

export async function fetchData({
    query,
}: {
    query?: string;
}) {

    if (!query) return Promise.resolve({ posts: { data: [], total: 0 } });

    const posts = await getApi<TPost[]>(`/posts`, buildPostsQuery(query), {
        cache: 'no-cache',
    });

    return {
        posts: {
            data: posts.data,
            total: posts.meta.pagination.total || 0,
        },
    };
}
