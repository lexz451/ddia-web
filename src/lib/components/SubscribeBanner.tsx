"use client";
import Image from "next/image";
import ContactModal from "./ContactModal";
import { useEffect, useState } from "react";
import NewsletterBanner from "@/lib/assets/banners/newsletter.png";

export default function SubscribeBanner({ locale }: { locale: string }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [showModal]);

    return (
        <>
            <ContactModal
                title="subscribe-newsletter"
                showTextInput={false}
                showModal={showModal}
                onClose={() => setShowModal(false)}
                locale={locale}
            ></ContactModal>
            <button
                onClick={() => setShowModal(true)}
                className="Rectangle204 overflow-hidden bg-gradient-to-b from-emerald-300 to-emerald-300 rounded-2xl flex flex-col items-center justify-center"
            >
                <Image
                    src={NewsletterBanner}
                    alt="Newsletter"
                    className="hover:scale-105 transition-transform duration-300"
                ></Image>
            </button>
        </>
    );
}
