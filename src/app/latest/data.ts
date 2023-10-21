import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";

export function buildPostsQuery(tag?: string, query?: string) {
    return {
        filters: {
            categories: {
                slug: {
                    $eq: 'latest-updates'
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
        },
        populate: ["feature_media", "post_type", "authors"],
        pagination: {
            limit: 6,
        },
        sort: ['publish_date:desc']
    }
}

export async function fetchData({
    tag,
    query
}: { tag?: string, query?: string }) {
    const category = await getApi<any>('/categories', {
        filters: {
          slug: {
            $eq: 'latest-updates'
          }
        },
        populate: {
          tags: {
            fields: ['slug', 'title']
          }
        }
    });

    const posts = await getApi<TPost[]>(`/posts`, buildPostsQuery(tag, query));

    return {
        posts: {
            data: posts.data,
            total: posts.meta.pagination.total || 0,
        },
        tags: category.data?.[0].tags || [],
    }

}