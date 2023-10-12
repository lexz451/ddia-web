import { fetchLatestPosts } from "@/lib/data/posts";
import { NextRequest } from "next/server"

export async function GET(
    request: NextRequest
  ) {
    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get('limit');
    const start = searchParams.get('start');
    const type = searchParams.get('type') || undefined;
    const query = searchParams.get('q') || undefined;

    const posts = await fetchLatestPosts({
        limit: Number(limit),
        start: Number(start),
        type: type ? Number(type) : undefined,
        query,
    });

    return Response.json(posts);
  }