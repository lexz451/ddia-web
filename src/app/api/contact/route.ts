import { NextRequest } from "next/server";

const validate = async (request: NextRequest) => {
    const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (!secret) {
        return new Response(JSON.stringify({
            error: true,
            message: "No Cloudflare secret key found",
        }), { status: 401 });
    }
    const form = new URLSearchParams();
    const { headers } = request;
    const body = await request.json();
    const remoteIp = headers.get("x-forwarded-for") as string;
    const response = body["cf-turnstile-response"];

    form.append("secret", secret);
    form.append("remoteip", remoteIp);
    form.append("response", response);

    const result = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        { method: "POST", body: form }
    );

    const data = await result.json();
    return data?.success;
};

export async function POST(req: NextRequest) {
    const isValid = await validate(req);
    if (!isValid) {
        return new Response(
            JSON.stringify({
                error: true,
                message: "Invalid captcha",
            }),
            { status: 401 }
        );
    }
    const data = await req.json();
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.FORMS_TOKEN}`,
            },
        }
    );
    return new Response(JSON.stringify(response), { status: response.status });
}
