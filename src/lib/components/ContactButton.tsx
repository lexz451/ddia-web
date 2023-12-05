'use client';

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

export default function ContactButton({
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
            <ContactModal showTextInput={true} title="contact-us" showModal={showModal} onClose={() => setShowModal(false)} locale={locale}></ContactModal>
            <span className="underline cursor-pointer" onClick={() => setShowModal(true)}>Contact us</span>
        </>
    );
}