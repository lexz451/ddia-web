import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";

export function buildPostsQuery(category: string, tag?: string, query?: string, locale?: string) {
    return {
        filters: {
            categories: {
                slug: {
                    $eq: category
                }
            },
            tags: {
                slug: {
                    $eq: tag
                }
            },
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
            ...(locale && locale == "en" ? {
                language: {
                    code: {
                        $eq: locale,
                    }
                }
            } : {}),
        },
        populate: [
            "feature_media",
            "post_type",
            "authors",
            "authors.avatar",
            "categories",
            "tags"],
        pagination: {
            limit: 6,
        },
        sort: ['created_date:desc']
    
    }
}

export async function fetchData(
    category: string,
    tag?: string,
    query?: string,
    locale?: string) {

    const { data: [categoryData] } = await getApi<any[]>('/categories', {
        filters: {
            slug: {
                $eq: category
            }
        },
        populate: {
            tags: {
                fields: ['slug', 'title']
            }
        }
    }, {
        next: { tags: ["category"] }
    })

    
    const posts = await getApi<TPost[]>(`/posts`, buildPostsQuery(category, tag, query, locale), {
        next: { tags: ["post"] },
    });

    return {
        posts: {
            data: posts.data,
            total: posts.meta.pagination.total || 0,
        },
        tags: categoryData?.tags || [],
    };
}