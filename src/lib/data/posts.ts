import { getApi } from "../utils/api";

type fetchLatestPostsParams = {
    limit: number;
    start: number;
    sort?: string[];
    type?: number;
    query?: string;
    populate?: string[];
};

export async function fetchLatestPosts({
    limit,
    start,
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
    }, {
      cache: 'reload'
    });
    return posts;
}


export async function fetchPostTypes() {
  const postTypes = await getApi('/post-types');
  return postTypes;
}