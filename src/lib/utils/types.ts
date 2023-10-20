import { type } from "os";

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
};