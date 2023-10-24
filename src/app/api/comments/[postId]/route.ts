import { NextRequest, NextResponse } from "next/server";
import QueryString from "qs";

export async function GET(req: Request, {
    params
}: { params: { postId: string }  }) {
    const { postId } = params;

    const query = QueryString.stringify({
        
    }, {
        encodeValuesOnly: true,
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/api::post.post:${postId}?${query.toString()}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `bearer ${process.env.API_TOKEN}`,
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch API: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
}


export async function POST(req: NextRequest, { params }: { params: { postId: string }}) {
    const { postId } = params;
    const data = await req.json();
    console.log(data);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/api::post.post:${postId}`, {
        method: 'POST',
        body: JSON.stringify(data),
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