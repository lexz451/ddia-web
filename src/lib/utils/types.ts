export type TStrapiQueryParams = {
    filters: any;
    populate?: any;
    pagination?: { limit?: number, start?: number };
    sort?: any;
}

export type TServerImage = {
    id: number;
    name: string;
    url: string;
    width: number;
    height: number;
    size: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    alternativeText: string;
    priority: boolean;
    sizes: string;
    placeholder: string;
    className: string;
    fill: boolean;
}

export type TMember = {
    id: number;
    name: string;
    role: string;
    description: string;
    avatar: TServerImage;
    slug: string;
}

export type TPostType = {
    id: number;
    name: string;
    description?: string;
}

export type TAuthor = {
    id: number;
    name: string;
    slug: string;
    bio?: string;
    avatar?: TServerImage;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export type TPost = {
    id: number;
    title: string;
    description: string;
    publish_date: string;
    publishedAt: string;
    slug: string;
    feature_media: TServerImage;
    createdAt: string;
    updatedAt: string;
    post_type: TPostType;
    authors: TAuthor[];
    content: string;
    tags: any[];
    categories: any[];
    platform_url: string;
};