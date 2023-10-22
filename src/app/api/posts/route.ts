import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: NextRequest
  ) {
    const searchParams = request.nextUrl.searchParams
    const res = await fetch(`${process.env.API_URL}/api/posts?${searchParams}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${process.env.API_TOKEN}`,
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch API: ${res.status} ${res.statusText}`);
    }
    return NextResponse.json(await res.json());
}