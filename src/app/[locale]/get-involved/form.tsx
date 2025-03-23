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
            <div className="flex flex-col justify-center order-1 lg:order-2">
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: 0,
                        paddingBottom: "125%",
                        borderRadius: 20,
                        overflow: "hidden",
                    }}
                >
                    <iframe
                        title="Google Form"
                        src="https://forms.gle/uMQxTrwLCZurdF4j6"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
}
