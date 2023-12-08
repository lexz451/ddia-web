'use client';

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import useI18n from "../hooks/useI18n";

export default function ContactButton({
    locale
}: {
    locale: string;
}) {
    const [showModal, setShowModal] = useState(false);
    const { t } = useI18n(locale);

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
            <span className="underline cursor-pointer" onClick={() => setShowModal(true)}>{t('contact-us')}</span>
        </>
    );
}