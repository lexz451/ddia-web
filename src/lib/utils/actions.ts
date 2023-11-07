"use server";

export async function sendContactInfo(prevState: any, form: FormData) {
    const data: any = Object.fromEntries(form.entries());
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        body: data,
        headers: {
            'Authorization': `Bearer ${process.env.FORMS_TOKEN}`,
        }
    });
    if (!response.ok) {
        return {
            error: true,
            message: "There was an error sending your message. Please try again later.",
        }
    }
    return {
        submitted: true,
        message: "Your message was sent successfully.",
    }
}