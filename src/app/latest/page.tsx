import SearchBar from "./search-bar";
import { Link } from "next-nprogress";
import Posts from "./posts";
import { fetchLatestPosts, fetchPostTypes } from "@/lib/data/posts";

async function fetchLatestUpdates(
  limit: number,
  start: number,
  type: number | undefined = undefined,
  query: string | undefined = undefined
) {
  const posts = await fetchLatestPosts({ limit, start, type, query });
  const postTypes = await fetchPostTypes();

  return {
    posts,
    postTypes,
  };
}

export default async function LatestUpdates({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const {
    limit: paramLimit,
    start: paramStart,
    type: paramType,
    q: paramQuery,
  } = searchParams;

  const limit = paramLimit ? parseInt(paramLimit as string) : 5;
  const start = paramStart ? parseInt(paramStart as string) : 0;
  const type = paramType ? parseInt(paramType as string) : undefined;
  const query = paramQuery as string;

  const {
    posts: {
      data: latestPosts,
      meta: {
        pagination: { total },
      },
    },
    postTypes: { data: postTypes },
  } = await fetchLatestUpdates(limit, start, type, query);

  return (
    <main className="container mx-auto mt-[12rem] max-w-6xl">
      <section className="sm:flex sm:flex-row-reverse sm:items-start gap-10 mb-8">
        <SearchBar />
        <div className="flex items-center flex-wrap flex-1 gap-2">
          <Link
            className={`min-w-[80px] text-center rounded-full border-[1.5px] px-5 py-2 font-avenir flex-shrink-0 border-design-green font-extrabold text-sm 
          ${!paramType ? "bg-design-green text-white" : "text-design-green"}`}
            href={`/latest`}
          >
            All
          </Link>
          {postTypes.map((type: any) => {
            return (
              <Link
                key={type.id}
                className={`min-w-[80px] text-center rounded-full border-[1.5px] px-5 py-2 font-avenir flex-shrink-0 border-design-green font-extrabold text-sm ${
                  paramType == type.id
                    ? "bg-design-green text-white"
                    : "text-design-green"
                }`}
                href={`/latest?type=${type.id}`}
              >
                {type.name}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-b border-b-gray-500">
        <Posts
          posts={latestPosts}
          limit={limit}
          type={type}
          query={query}
          total={total}
        ></Posts>
      </section>

      <div className="flex w-full my-10 h-80 rounded-3xl bg-gradient-to-b from-design-light-green to-gray-100">
        <h1 className="m-auto font-[Inter] font-semibold text-5xl text-gray-500">
          Banner
        </h1>
      </div>
    </main>
  );
}
