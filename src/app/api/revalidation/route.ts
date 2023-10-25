import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest) {
    const data = await req.json()
    const { event, model, entry } = data
    switch (event) {
        case 'entry.update':
            const { publishedAt } = entry
            if (!publishedAt) {
                console.log(`Entry is not published, skipping revalidation`)
                break;
            }
            revalidateTag(`${model}`); // Revalidate all pages that use this model
            break;
        case 'entry.unpublish':
            console.log(`Entry ${entry.id} of model ${model} was unpublished`)
            break;
    }

    return NextResponse.json({ success: true })
}