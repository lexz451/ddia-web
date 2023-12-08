import { getApi } from "@/lib/utils/api";
import { TPost } from "@/lib/utils/types";

export async function fetchData(locale: string) {
    
    const translation = await getApi<any>(`/static-text/${locale}`);
    const translations = (translation as any)['our-work-page'];

    const {data: publicOpinionResearch} = await getApi<TPost[]>(`/posts`, {
        filters: {
            categories: {
                slug: {
                    $eq: 'public-opinion-research'
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
        sort: ['created_date:asc']
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
        sort: ['created_date:desc']
    }, {
        next: { tags: ["post"] },
    });

    const { data: workshopsAndEvents } = await getApi<TPost[]>(`/posts`, {
        filters: {
            post_type: {
                id: {
                    $eq: 4
                }
            },
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
        sort: ['created_date:desc']
    }, {
        next: { tags: ["post"] },
    })

    const { data: whatWeAreReading } = await getApi<TPost[]>(`/posts`, {
        filters: {
            post_type: {
                id: {
                    $eq: 4
                }
            },
            categories: {
                slug: {
                    $eq: 'external-resources'
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
        sort: ['created_date:desc']
    }, {
        next: { tags: ["post"] },
    })

    const { data: resources } = await getApi<TPost[]>(`/posts`, {
        filters: {
            post_type: {
                id: {
                    $eq: 4
                }
            },
            categories: {
                slug: {
                    $eq: 'resources-and-tools'
                }
            },
            tags: {
                slug: {
                    $eq: 'resources'
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
        sort: ['created_date:desc']
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
        sort: ['created_date:desc']
    }, {
        next: { tags: ["post"] },
    })


    return {
        research: {
            publicOpinionResearch
        },
        reports: {
            data: reportsAndPublications.data,
            total: reportsAndPublications.meta.pagination.total,
        },
        capacity: {
            workshopsAndEvents,
            resourcesAndTools: {
                whatWeAreReading,
                resources
            }
        },
        // workshopsAndEvents,
        // whatWeAreReading,
        // additionalResources,
        policy,
        translations
    };
}
