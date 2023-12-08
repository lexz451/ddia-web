"use client";
import MailImg from "@/lib/assets/get-involved.png";
import Image from "next/image";
import useI18n from "@/lib/hooks/useI18n";
import SubmitButton from "@/lib/components/SubmitButton";
import { useRef, useState } from "react";

export default function Form({
    locale,
    translations,
}: {
    locale: string;
    translations: any;
}) {
    const { t } = useI18n(locale);
    const formRef = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(false);

    const onSubmit = async (e: any) => {
        setPending(true);
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        if (json.error) {
            console.error(json.error);
            setError(true);
        } else {
            setSubmitted(true);
            formRef?.current?.reset();
        }
        setPending(false);
    };

    return (
        <div className="Rectangle157 bg-design-green md:rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 py-14">
            <Image
                alt="mail"
                src={MailImg}
                sizes="100vw"
                className="order-2 md:order-1"
            ></Image>
            <form
                ref={formRef}
                onSubmit={onSubmit}
                className="flex flex-col justify-center order-1 md:order-2"
            >
                <div className="Headline text-design-light-green text-4xl md:text-5xl font-extrabold font-avenir leading-10">
                    {/* {t("newsletter-form.title")} */}
                    {translations?.title}
                </div>
                <p className="IntroductoryText mt-10 text-neutral-100 md:text-lg font-light font-inter leading-relaxed">
                    {/* {t("newsletter-form.message")} */}
                    {translations?.message}
                </p>

                <div
                    className="cf-turnstile checkbox mt-4"
                    data-sitekey={
                        process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                    }
                />

                <input
                    required
                    name="name"
                    placeholder={t("name")}
                    className="mt-10 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                ></input>
                <input
                    required
                    name="organization"
                    placeholder={t("organization")}
                    className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                ></input>
                <input
                    required
                    name="title"
                    placeholder={t("title")}
                    className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                ></input>

                <div className="block relative w-full mt-4">
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder={t("email")}
                        className="rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                    ></input>
                    <SubmitButton pending={pending}></SubmitButton>
                    {error && (
                        <p className="text-red-500 text-sm mt-2">
                            {t("submit_subscribe_error")}
                        </p>
                    )}
                    {submitted && (
                        <p className="text-design-light-green text-sm mt-5">
                            {t("submit_subscribe_success")}
                        </p>
                    )}
                    {/* <button className="absolute bg-white hover:bg-design-light-green duration-300 transition-colors rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center">
                        <ArrowIcon></ArrowIcon>
                    </button> */}
                </div>
            </form>
        </div>
    );
}
