"use client";
import useI18n from "../hooks/useI18n";
import SubmitButton from "./SubmitButton";
import CloseIcon from "@/lib/assets/close.svg";
import { useEffect, useRef, useState } from "react";
import ClientPortal from "./ClientPortal";

declare global {
    interface Window {
        turnstile?: {
            render: (container: HTMLElement, options: Record<string, unknown>) => string;
            reset: (widgetId?: string) => void;
        };
    }
}

export default function ContactModal({
    locale,
    onClose,
    showModal,
    showTextInput,
    title,
}: {
    locale: string;
    onClose: () => void;
    showModal: boolean;
    showTextInput: boolean;
    title: string;
}) {
    const { t } = useI18n(locale);

    const formRef = useRef<HTMLFormElement>(null);
    const turnstileRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

    useEffect(() => {
        if (!showModal) {
            if (widgetIdRef.current && window.turnstile) {
                window.turnstile.reset(widgetIdRef.current);
            }
            widgetIdRef.current = null;
            setTurnstileToken(null);
            setError(false);
            setSubmitted(false);
            return;
        }

        let cancelled = false;

        const renderTurnstile = () => {
            if (cancelled || !turnstileRef.current) return;
            if (!window.turnstile) {
                setTimeout(renderTurnstile, 200);
                return;
            }
            if (widgetIdRef.current) return;

            const sitekey =
                process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
            if (!sitekey) return;

            widgetIdRef.current = window.turnstile.render(
                turnstileRef.current,
                {
                    sitekey,
                    callback: (token: string) => {
                        setTurnstileToken(token);
                    },
                    "expired-callback": () => {
                        setTurnstileToken(null);
                    },
                    "error-callback": () => {
                        setTurnstileToken(null);
                    },
                }
            );
        };

        renderTurnstile();

        return () => {
            cancelled = true;
        };
    }, [showModal]);

    const onSubmit = async (e: any) => {
        setPending(true);
        e.preventDefault();
        if (!turnstileToken) {
            setError(true);
            setPending(false);
            return;
        }
        const formData = new FormData(e.target);
        formData.set("cf-turnstile-response", turnstileToken);
        const data = Object.fromEntries(formData);
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
        <ClientPortal>
            <div
                className={`${
                    showModal ? "opacity-100 visible" : "opacity-0 collapse"
                } transition-all duration-300 fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center bg-white bg-opacity-10 backdrop-blur-sm`}
            >
                <div className="Rectangle157 relative page-container bg-design-green lg:rounded-3xl px-5 lg:px-10 py-14">
                    <div className="absolute top-0 right-0">
                        <button
                            onClick={() => onClose()}
                            className="text-2xl font-bold mr-5 mt-5"
                        >
                            <CloseIcon className="w-6 h-6 fill-white"></CloseIcon>
                        </button>
                    </div>
                    <form
                        ref={formRef}
                        onSubmit={onSubmit}
                        className="flex flex-col items-center max-w-md mx-auto"
                    >
                        <div className="Headline text-center text-design-light-green text-4xl lg:text-5xl font-extrabold font-avenir leading-10">
                            {t(title)}
                        </div>

                        <div
                            ref={turnstileRef}
                            className="cf-turnstile checkbox mt-4"
                        />

                        <input
                            required
                            name="name"
                            placeholder={t("name")}
                            className="mt-16 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
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
                        {showTextInput && (
                            <textarea
                                rows={5}
                                required
                                name="text"
                                placeholder={t("message")}
                                className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 pt-3 w-full placeholder:text-design-light-green text-white text-sm"
                            ></textarea>
                        )}
                        <div className="block relative w-full mt-4">
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder={t("email")}
                                className="rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                            ></input>

                            <SubmitButton pending={pending}></SubmitButton>
                            {error && (
                                <p className="text-red-500 text-sm mt-2">
                                    {t("submit_contact_error")}
                                </p>
                            )}
                            {submitted && (
                                <p className="text-design-light-green text-sm mt-5">
                                    {t("submit_contact_success")}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </ClientPortal>
    );
}
