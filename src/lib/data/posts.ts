import { getApi } from "../utils/api";

type fetchLatestPostsParams = {
    limit?: number;
    start?: number;
    sort?: string[];
    type?: number;
    query?: string;
    populate?: string[];
};

export async function fetchPostBySlug(slug: string) {
    const post = await getApi(`/posts`, {
      filters: {
        slug: {
          $eq: slug
        }
      },
      populate: ["feature_media", "post_type", "authors"]
    });
    return post;
}

export async function fetchPostByCategory(category: string) {
    console.log(category);
    const post = await getApi(`/posts`, {
      filters: {
        categories: {
          slug: {
            $eq: category
          }
        }
      },
      populate: ["feature_media", "post_type", "authors"]
    });
    return post;
}

export async function fetchLatestPosts({
    limit = 10,
    start = 0,
    sort = ['publish_date:desc'],
    type = undefined,
    query = undefined,
    populate = ["feature_media", "post_type", "authors"]
}: fetchLatestPostsParams) {
    const posts = await getApi('/posts', {
      filters: {
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
        post_type: {
          id: {
            $eq: type
          }
        }
      },
      pagination: {
        limit,
        start
      },
      populate,
      sort
    });
    return posts;
}


export async function fetchPostTypes() {
  const postTypes = await getApi('/post-types');
  return postTypes;
}