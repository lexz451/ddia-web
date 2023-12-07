import { NextRequest } from "next/server";

export default async function POST(request: NextRequest) {
    const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (!secret) {
        return new Response('No Cloudflare secret key found', { status: 401 });
    }
    const form = new URLSearchParams();
    const { headers } = request;
    const body = await request.json();
    const remoteIp = headers.get('x-forwarded-for') as string;
    const response = body['cf-turnstile-response'];

    form.append('secret', secret);
    form.append('remoteip', remoteIp);
    form.append('response', response);

    const result = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'POST', body: form });

    const data = await result.json();
    return new Response(JSON.stringify(data), { status: result.status });
}