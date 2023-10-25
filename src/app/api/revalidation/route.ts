import { NextRequest } from "next/server";

export async function POST(
    req: NextRequest) {
    const data = await req.json();
    const { event, model, entry } = data;
    switch (event) {
        case 'entry.update':
            console.log(`Entry ${entry.id} of model ${model} was updated`);
            break;
    }
}