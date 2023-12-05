'use client';
import Image from "next/image";
import ContactUsImg from "@/lib/assets/banners/contact-us.png";
import ContactUsDesktopImg from "@/lib/assets/banners/contact-us-desktop.png";
import ContactModal from "./ContactModal";
import { useEffect, useState } from "react";

export default function ContactUsBanner({
    locale
}: {
    locale: string;
}) {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showModal])

    return (
        <>
        <ContactModal title="contact-us" showTextInput={true} showModal={showModal} onClose={() => setShowModal(false)} locale={locale}></ContactModal>
        <button onClick={() => setShowModal(true)} className="flex w-full my-10 h-80 overflow-hidden rounded-3xl bg-gradient-to-b from-design-light-green to-gray-100">
            <Image src={ContactUsDesktopImg} className="hidden lg:block w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Contact Us"></Image>
            <Image src={ContactUsImg} className="block lg:hidden w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Contact Us"></Image>
        </button>
        </>
        
    );
}