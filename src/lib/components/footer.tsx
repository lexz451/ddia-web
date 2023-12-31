"use client";

import Logo from "@/lib/assets/logo.svg";
import FacebookIcon from "@/lib/assets/facebook.svg";
import XIcon from "@/lib/assets/x-twitter.svg";
import LinkedInIcon from "@/lib/assets/linked-in.svg";
import I18nLink from "./I18nLink";
import useI18n from "../hooks/useI18n";
import SubmitButton from "./SubmitButton";
import { useRef, useState } from "react";

export default function Footer({ locale, translations }: { locale: string, translations: any }) {
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
        <footer className="lg:absolute bottom-0 lg:bottom-10 left-0 right-0 overflow-hidden">
            <div className="lg:page-container">
                <div className="pt-12 lg:pb-12 lg:px-16 bg-design-dark-green lg:rounded-3xl flex flex-col">
                    <div className="page-container grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 px-5 lg:px-0">
                        <div className="lg:mr-10">
                            <Logo className="w-24 h-16 -ml-1"></Logo>
                            <p className="IntroductoryText  mt-8 leading-normal text-sm text-white">
                                {/* {t("footer.about")} */}
                                {translations?.footer?.about}
                            </p>
                            <div className="SocialIcons flex gap-3 mt-10">
                                <I18nLink
                                    aria-label="LinkedIn"
                                    href="https://www.linkedin.com/company/digital-democracy-institute-of-the-americas/?viewAsMember=true"
                                    className="w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center"
                                >
                                    <LinkedInIcon className="w-6 h-6 fill-black"></LinkedInIcon>
                                </I18nLink>
                                <I18nLink
                                    aria-label="X"
                                    href="https://twitter.com/DDIAmericas"
                                    className="w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center"
                                >
                                    <XIcon className="w-5 h-5 fill-black"></XIcon>
                                </I18nLink>
                                <I18nLink
                                    aria-label="Facebook"
                                    href="https://www.facebook.com/profile.php?id=61552925446237"
                                    className="w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center"
                                >
                                    <FacebookIcon className="w-6 h-6 fill-black"></FacebookIcon>
                                </I18nLink>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] lg:gap-x-5 lg:gap-y-5 w-full">
                            <div className="FootersColumn flex-col justify-start items-start gap-3 inline-flex mt-5">
                                <I18nLink
                                    href={"/about-us"}
                                    className="Heading self-stretch text-design-light-green text-[0.8rem] font-semibold  uppercase leading-tight mb-2"
                                >
                                    {t("about-us")}
                                </I18nLink>
                                <I18nLink
                                    href={"/about-us#our-mission"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("mission-vision")}
                                </I18nLink>
                                <I18nLink
                                    href={"/about-us#our-approach"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("our-approach")}
                                </I18nLink>
                                <I18nLink
                                    href={"/about-us#core-strategies"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("core-strategies")}
                                </I18nLink>
                            </div>
                            <div className="FootersColumn flex-col justify-start items-start gap-3 inline-flex mt-5">
                                <I18nLink
                                    href={"/our-work"}
                                    className="Heading self-stretch text-design-light-green text-[0.8rem] font-semibold  uppercase leading-tight mb-2"
                                >
                                    {t("our-work")}
                                </I18nLink>
                                <I18nLink
                                    href={"/our-work#research-and-analysis"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("research-and-analysis")}
                                </I18nLink>
                                <ul className="list-disc pl-6 text-design-light-green w-full">
                                    <li>
                                        <I18nLink
                                            href={
                                                "/our-work#public-opinion-research"
                                            }
                                            className="Text block text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                        >
                                            {t("public-opinion-research")}
                                        </I18nLink>
                                    </li>
                                    <li className="mt-3">
                                        <I18nLink
                                            href={
                                                "/our-work#social-listening-and-osint-investigations"
                                            }
                                            className="Text block whitespace-wrap text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                        >
                                            {t(
                                                "social-listening-osint-investigations"
                                            )}
                                        </I18nLink>
                                    </li>
                                </ul>
                                <I18nLink
                                    href={"/our-work#reports-and-publications"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("reports-and-publications")}
                                </I18nLink>
                                <I18nLink
                                    href={"/our-work#capacity-building"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("capacity-building")}
                                </I18nLink>
                                <ul className="list-disc pl-6 text-design-light-green w-full">
                                    <li>
                                        <I18nLink
                                            href={
                                                "/our-work#workshops-and-events"
                                            }
                                            className="block Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                        >
                                            {t("workshops-and-events")}
                                        </I18nLink>
                                    </li>
                                </ul>
                                <I18nLink
                                    href={"/our-work#policy"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("policy")}
                                </I18nLink>
                            </div>
                            <div className="FootersColumn flex-col justify-start items-start gap-3 inline-flex mt-5">
                                <I18nLink
                                    href={"/latest"}
                                    className="Heading self-stretch text-design-light-green text-[0.8rem] font-semibold  uppercase leading-tight mb-2"
                                >
                                    {t("latest-updates")}
                                </I18nLink>
                                <I18nLink
                                    href="/latest?tag=announcements"
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("announcements")}
                                </I18nLink>
                                <I18nLink
                                    href="/latest?tag=blog"
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("blog")}
                                </I18nLink>
                                <I18nLink
                                    href="/latest?tag=in-the-news"
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("in-the-news")}
                                </I18nLink>
                                <I18nLink
                                    href="/latest?tag=resources"
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("resources")}
                                </I18nLink>
                                <I18nLink
                                    href="/latest?tag=events"
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("workshops-and-events")}
                                </I18nLink>
                            </div>
                            <div className="FootersColumn flex-col justify-start items-start gap-3 inline-flex mt-5">
                                <I18nLink
                                    href={"/"}
                                    className="Heading self-stretch text-design-light-green text-[0.8rem] font-semibold  uppercase leading-tight mb-2"
                                >
                                    DDIA
                                </I18nLink>
                                <I18nLink
                                    href={"/get-involved"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("contact-us")}
                                </I18nLink>
                                {/* <I18nLink
                                    href={"/faq"}
                                    className="Text text-gray-300 hover:text-design-light-green  text-sm font-normal  leading-normal"
                                >
                                    FAQs
                                </I18nLink> */}
                                <I18nLink
                                    href={"/team"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("meet-the-team")}
                                </I18nLink>
                                <I18nLink
                                    href={"/careers"}
                                    className="Text text-gray-300 hover:text-design-light-green text-sm font-normal font-avenir leading-normal"
                                >
                                    {t("careers")}
                                </I18nLink>
                            </div>
                        </div>
                    </div>
                    <div className="Subscribe border-y border-white border-opacity-20 mt-10 lg:mt-14 px-5 lg:px-0">
                        <form
                            onSubmit={onSubmit}
                            ref={formRef}
                            className="page-container lg:px-0 Content py-8 flex flex-col gap-8"
                        >
                            <div className="Cta flex-col justify-start items-start gap-2 inline-flex">
                                <div className="Heading self-stretch text-gray-400 text-sm font-semibold  uppercase leading-tight tracking-wide">
                                    {t("footer.newsletter.title")}
                                </div>
                                <div className="SupportingText text-gray-300 text-base font-normal  leading-normal">
                                    {t("footer.newsletter.subtitle")}
                                </div>
                            </div>
                            <div
                                className="cf-turnstile checkbox hidden"
                                data-sitekey={
                                    process.env
                                        .NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                                }
                            />
                            <div className="FootersSubscribeForm grid lg:grid-cols-4 w-full gap-4">
                                <input
                                    name="name"
                                    required
                                    placeholder={t("name")}
                                    className="rounded-3xl px-4 bg-transparent border border-design-light-green h-12 placeholder:text-design-light-green text-white text-sm"
                                ></input>
                                <input
                                    name="title"
                                    required
                                    placeholder={t("title")}
                                    className="rounded-3xl px-4 bg-transparent border border-design-light-green h-12 placeholder:text-design-light-green text-white text-sm"
                                ></input>
                                <input
                                    name="organization"
                                    required
                                    placeholder={t("organization")}
                                    className="rounded-3xl px-4 bg-transparent border border-design-light-green h-12 placeholder:text-design-light-green text-white text-sm"
                                ></input>
                                <div className="block relative">
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder={t("email")}
                                        className="rounded-3xl px-4 bg-transparent border border-design-light-green h-12 w-full placeholder:text-design-light-green text-white text-sm"
                                    ></input>
                                    {/* <button
                                        aria-label="Submit"
                                        className="group absolute bg-white hover:bg-design-light-green transition-colors duration-300 rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center"
                                    >
                                        <ArrowIcon></ArrowIcon>
                                    </button> */}

                                    <SubmitButton
                                        pending={pending}
                                    ></SubmitButton>
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
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="lg:mt-10 mt-5 flex lg:flex-row flex-col lg:items-center justify-between">
                        <div className="IntroductoryText text-black lg:text-neutral-100 mt-5 lg:mt-0 py-2 bg-white lg:bg-transparent text-center lg:text-left order-2 lg:order-1">
                            <span className=" text-sm font-normal leading-7">
                                {t("footer.copyright")}{" "}
                            </span>
                            <span className=" text-sm font-bold leading-7">
                                W.LAND
                            </span>
                        </div>
                        <div className="order-1 lg:order-2 Copyright text-center lg:text-right text-gray-400 text-sm font-normal font-avenir uppercase leading-normal">
                            <I18nLink
                                href={`/digital-democracy-institute-of-the-americas-privacy-policy`}
                                className="hover:text-design-light-green"
                            >
                                {t("privacy-policy")}
                            </I18nLink>{" "}
                            |{" "}
                            <I18nLink
                                href={
                                    "/digital-democracy-institute-of-the-americas-privacy-policy"
                                }
                                className="hover:text-design-light-green"
                            >
                                {t("terms-of-use")}
                            </I18nLink>{" "}
                            |{" "}
                            <I18nLink
                                href={
                                    "/digital-democracy-institute-of-the-americas-privacy-policy"
                                }
                                className="hover:text-design-light-green"
                            >
                                {t("cookie-policy")}
                            </I18nLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
