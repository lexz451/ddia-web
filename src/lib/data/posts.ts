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

