import { TPost } from "@/lib/utils/types";
import { getApi } from "@/lib/utils/api";

export async function fetchData(slug: string, locale?: string) {

    const { data: [post] } = await getApi<TPost[]>(`/posts`, {
        filters: {
            slug: {
                $eq: slug
            },
            content: {
                $ne: null
            }
        },
        populate: ["feature_media", "post_type", "authors", "categories"]
    }, {
        next: { tags: ["post"] }
    });

    const postCategory = post?.categories?.[0]?.slug;

    const { data: related } = await getApi<TPost[]>(`/posts`, {
        filters: {
            id: {
                $ne: post?.id
            },
            ...(locale && locale == "en" ? {
                language: {
                    code: {
                        $eq: locale,
                    }
                }
            } : {}),
            categories: {
                slug: {
                    $eq: postCategory
                }
            },
        },
        pagination: {
            limit: 3
        },
        populate: ["feature_media", "post_type", "authors"],
        sort: ['created_date:desc']
    }, {
        next: { tags: ["post"] }
    });


    const { data: latestPosts } = await getApi<TPost[]>('/posts', {
        filters: {
            id: {
                $ne: post?.id
            },
            front_page: {
                $eq: true,
            },
            ...(locale && locale == "en" ? {
                language: {
                    code: {
                        $eq: locale,
                    }
                }
            } : {}),
        },
        pagination: {
            limit: 3
        },
        populate: ["feature_media", "post_type", "authors"],
        sort: ['created_date:desc']
    }, {
        next: { tags: ["post"] }
    });

    return {
        post,
        latestPosts,
        related,
    };
}
