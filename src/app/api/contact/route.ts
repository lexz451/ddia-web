import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (!secret) {
        return Response.json(
            {
                error: true,
                message: "No Cloudflare secret key found",
            },
            { status: 401 }
        );
    }
    const form = new FormData();
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

    if (!data.success) {
        return Response.json(
            {
                error: true,
                message: "Invalid captcha",
            },
            { status: 401 }
        );
    }

    const contact = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.FORMS_TOKEN}`,
            },
        }
    );

    if (!contact.ok) {
        return Response.json(
            {
                error: true,
                message: "There was an error sending your message. Please try again later.",
            },
            { status: 500 }
        );
    }
    
    return Response.json(
        {
            error: false,
            message: "Your message was sent successfully.",
        },
        { status: 200 }
    );
}
