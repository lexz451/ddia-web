"use client";

import Image from "next/image";
import MailImg from "../assets/get-involved.png";
import { sendContactInfo } from "../utils/actions";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import useI18n from "../hooks/useI18n";
import ContactButton from "./ContactButton";

export default function GetInvolved({
    locale
}: {
    locale: string;
}) {

    const { t } = useI18n(locale)

    const [state, sendInfo] = useFormState(sendContactInfo, {
        error: false,
        submitted: false,
    });

    return (
        <section
            id="get-involved"
            className="lg:page-container bg-design-green lg:bg-transparent my-20"
        >
            <div className="Rectangle157 page-container lg:bg-design-green lg:rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-10 py-14">
                <Image
                    alt="mail"
                    src={MailImg}
                    sizes="100vw"
                    className="order-2 lg:order-1"
                ></Image>
                <form
                    action={sendInfo}
                    className="flex flex-col justify-center order-1 lg:order-2"
                >
                    <div className="Headline text-design-light-green text-4xl lg:text-5xl font-extrabold font-avenir leading-10">
                        {t('get-involved')}
                    </div>
                    <p className="IntroductoryText mt-5 lg:mt-10 text-neutral-100 lg:text-lg font-inter leading-normal">
                        {t("home.get-involved.message")}
                    </p>
                    <p className="mt-4 text-neutral-100 lg:text-lg leading-normal">
                        <ContactButton locale={locale}></ContactButton> {t("home.get-involved.message3")}
                    </p>
                    <input
                        required
                        name="name"
                        placeholder={t('name')}
                        className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                    ></input>
                    <input
                        required
                        name="organization"
                        placeholder={t('organization')}
                        className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                    ></input>
                    <input
                        required
                        name="title"
                        placeholder={t('title')}
                        className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                    ></input>
                    <div className="block relative w-full mt-4">
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder={t('email')}
                            className="rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                        ></input>
                        {/* <button type="submit" className="absolute hover:bg-design-light-green transition-colors duration-300 bg-white rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center">
                            <ArrowIcon></ArrowIcon>
                        </button> */}
                        <SubmitButton></SubmitButton>
                        {state?.error && (
                            <p className="text-red-500 text-sm mt-2">
                                {t("submit_subscribe_error")}
                            </p>
                        )}
                        {state?.submitted && (
                            <p className="text-design-light-green text-sm mt-5">
                                {t("submit_subscribe_success")}
                            </p>
                        )}
                    </div>
                    
                    <p className="my-4 text-neutral-100 lg:text-lg">
                    {t("home.get-involved.message4")}
                    </p>

                </form>
            </div>
        </section>
    );
}
