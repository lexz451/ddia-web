"use client";
import useI18n from "../hooks/useI18n";
import { sendContactInfo } from "../utils/actions";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import CloseIcon from '@/lib/assets/close.svg';
import { useEffect, useRef } from "react";

export default function ContactModal({ locale, onClose, showModal }: { locale: string, onClose: () => void, showModal: boolean }) {
    const { t } = useI18n(locale);
    const formRef = useRef<HTMLFormElement>(null);
    
    const [state, sendInfo] = useFormState(sendContactInfo, {
        error: false,
        submitted: false,
    });

    useEffect(() => {
        if (state.submitted) {
            formRef.current?.reset();
        }
    }, [state.submitted])


    return (
        <div className={`${showModal ? 'opacity-100 visible' : 'opacity-0 collapse'} transition-all duration-300 fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center bg-white bg-opacity-10 backdrop-blur-sm`}>
            <div className="Rectangle157 relative page-container bg-design-green lg:rounded-3xl px-5 lg:px-10 py-14">
                <div className="absolute top-0 right-0">
                    <button onClick={() => onClose()} className="text-2xl font-bold mr-5 mt-5">
                        <CloseIcon className="w-6 h-6 fill-white"></CloseIcon>
                    </button>
                </div>
                <form
                    ref={formRef}
                    action={sendInfo}
                    className="flex flex-col items-center max-w-md mx-auto"
                >
                    <div className="Headline text-design-light-green text-4xl lg:text-5xl font-extrabold font-avenir leading-10">
                        {t("contact-us")}
                    </div>

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
                    <textarea
                        rows={5}
                        required
                        name="text"
                        placeholder={t("message")}
                        className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 pt-3 w-full placeholder:text-design-light-green text-white text-sm"
                    ></textarea>
                    <div className="block relative w-full mt-4">
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder={t("email")}
                            className="rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                        ></input>

                        <SubmitButton></SubmitButton>
                        {state?.error && (
                            <p className="text-red-500 text-sm mt-2">
                                {t("submit_contact_error")}
                            </p>
                        )}
                        {state?.submitted && (
                            <p className="text-design-light-green text-sm mt-5">
                                {t("submit_contact_success")}
                            </p>
                        )}
                    </div>

                    {/* <p className="my-4 text-neutral-100 lg:text-lg">
                        {t("home.get-involved.message4")}
                    </p> */}
                </form>
                
            </div>
        </div>
    );
}
