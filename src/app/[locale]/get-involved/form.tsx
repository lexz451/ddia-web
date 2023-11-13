"use client";
import MailImg from "@/lib/assets/get-involved.png";
import { sendContactInfo } from "@/lib/utils/actions";
import Image from "next/image";
import { useFormState } from "react-dom";
import useI18n from "@/lib/hooks/useI18n";
import SubmitButton from "@/lib/components/SubmitButton";

export default function Form({ locale }: { locale: string }) {
    const { t } = useI18n(locale);

    const [state, sendInfo] = useFormState(sendContactInfo, {
        message: "",
        error: false,
        submitted: false,
    });

    return (
        <div className="Rectangle157 bg-design-green md:rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 py-14">
            <Image
                alt="mail"
                src={MailImg}
                sizes="100vw"
                className="order-2 md:order-1"
            ></Image>
            <form
                action={sendInfo}
                className="flex flex-col justify-center order-1 md:order-2"
            >
                <div className="Headline text-design-light-green text-4xl md:text-5xl font-extrabold font-avenir leading-10">
                    {t("newsletter-form.title")}
                </div>
                <p className="IntroductoryText mt-10 text-neutral-100 md:text-lg font-light font-inter leading-relaxed">
                    {t("newsletter-form.message")}
                </p>

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
                    <SubmitButton></SubmitButton>
                    {state?.error && (
                        <p className="text-red-500 text-sm mt-2">
                            {state?.message}
                        </p>
                    )}
                    {state?.submitted && (
                        <p className="text-design-light-green text-sm mt-5">
                            {state?.message}
                        </p>
                    )}
                    <p aria-live="polite" className="sr-only">
                        {state?.message}
                    </p>
                    {/* <button className="absolute bg-white hover:bg-design-light-green duration-300 transition-colors rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center">
                        <ArrowIcon></ArrowIcon>
                    </button> */}
                </div>
            </form>
        </div>
    );
}
