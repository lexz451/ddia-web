import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";

export async function fetchData() {
    const { data: issuesAndNarratives } = await getApi<TPost[]>(`/posts`, {
        filters: {
            categories: {
                slug: {
                    $eq: 'issues-and-narratives'
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"
        ],
        pagination: {
            limit: 3,
        },
        sort: ['publish_date:desc']
    }, {
        next: { tags: ["post"] }
    });

    const { data: platformsAndApps } = await getApi<TPost[]>(`/posts`, {
        filters: {
            categories: {
                slug: {
                    $eq: 'platforms-and-apps'
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"
        ],
        pagination: {
            limit: 3,
        },
        sort: ['publish_date:desc']
    }, {
        next: { tags: ["post"] },
    });

    const reportsAndPublications = await getApi<TPost[]>(`/posts`, {
        filters: {
            post_type: {
                id: {
                    $eq: 2
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"
        ],
        pagination: {
            limit: 6,
        },
        sort: ['publish_date:desc']
    }, {
        next: { tags: ["post"] },
    });

    const { data: workshopsAndEvents } = await getApi<TPost[]>(`/posts`, {
        filters: {
            categories: {
                slug: {
                    $eq: 'workshops-and-events'
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"
        ],
        pagination: {
            limit: 3,
        },
        sort: ['publish_date:desc']
    }, {
        next: { tags: ["post"] },
    })

    const { data: whatWeAreReading } = await getApi<TPost[]>(`/posts`, {
        filters: {
            categories: {
                slug: {
                    $eq: 'resources-and-tools'
                }
            },
            tags: {
                slug: {
                    $eq: 'what-we-are-reading'
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"
        ],
        pagination: {
            limit: 3,
        },
        sort: ['publish_date:desc']
    }, {
        next: { tags: ["post"] },
    })

    const { data: additionalResources } = await getApi<TPost[]>(`/posts`, {
        filters: {
            categories: {
                slug: {
                    $eq: 'resources-and-tools'
                }
            },
            tags: {
                slug: {
                    $eq: 'additional-resources'
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"
        ],
        pagination: {
            limit: 3,
        },
        sort: ['publish_date:desc']
    }, {
        next: { tags: ["post"] },
    })

    const { data: policy } = await getApi<TPost[]>(`/posts`, {
        filters: {
            post_type: {
                id: {
                    $eq: 6
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"
        ],
        pagination: {
            limit: 3,
        },
        sort: ['publish_date:desc']
    }, {
        next: { tags: ["post"] },
    })


    return {
        issuesAndNarratives,
        platformsAndApps,
        reportsAndPublications: {
            data: reportsAndPublications.data,
            total: reportsAndPublications.meta.pagination.total,
        },
        workshopsAndEvents,
        whatWeAreReading,
        additionalResources,
        policy
    };
}
