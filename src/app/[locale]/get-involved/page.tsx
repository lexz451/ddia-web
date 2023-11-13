import FacebookIcon from "@/lib/assets/facebook.svg";
import InstagramIcon from "@/lib/assets/instagram.svg";
import XIcon from "@/lib/assets/x-twitter.svg";
import LinkedInIcon from "@/lib/assets/linked-in.svg";
import MediumIcon from "@/lib/assets/medium.svg";
import YoutubeIcon from "@/lib/assets/yt.svg";

import Image from "next/image";
import MailImg from "@/lib/assets/get-involved.png";
import ArrowIcon from "@/lib/assets/arrow.svg";
import LogoCircle from "@/lib/assets/logo-circle.svg";
import I18nLink from "@/lib/components/I18nLink";
import initTranslations from "@/i18n";

export default async function ContactUs({
    params: { locale },
}: {
    params: { locale: string };
}) {

    const { t } = await initTranslations(locale);

    return (
        <main className="bg-gradient-to-b from-design-light-green via-design-light to-white pt-[150px]">
            <div className="page-container px-0">
                <section className="w-full items-center mt-10 mb-20 px-4">
                    <h1 className="font-avenir text-center w-fit mx-auto font-extrabold text-4xl lg:text-6xl text-design-green mb-4">
                        {t("contact-us")}
                    </h1>

                    <p className="text-design-green font-avenir mb-10 font-medium max-w-md mx-auto text-center">
                        {t('get-involved-page.message1')}{" "}
                        <I18nLink
                            className="underline font-semibold"
                            href={"info@ddia.org"}
                        >
                            info@ddia.org
                        </I18nLink>{" "}
                        {t('get-involved-page.message2')}
                    </p>

                    <div className="flex flex-col items-center mx-auto w-fit">
                        <p>{t('follow-us')}</p>
                        <div className="SocialIcons flex gap-3 mt-4">
                            <I18nLink
                                href="https://www.linkedin.com/company/digital-democracy-institute-of-the-americas/?viewAsMember=true"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <LinkedInIcon className="w-6 h-6 fill-design-light"></LinkedInIcon>
                            </I18nLink>
                            <I18nLink
                                href="https://twitter.com/DDIAmericas"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <XIcon className="w-5 h-5 fill-design-light"></XIcon>
                            </I18nLink>

                            <I18nLink
                                href="https://www.facebook.com/profile.php?id=61552925446237"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <FacebookIcon className="w-6 h-6 fill-design-light"></FacebookIcon>
                            </I18nLink>
                        </div>
                    </div>
                </section>

                <section className="md:page-container my-20">
                    <div className="Rectangle157 bg-design-green md:rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 py-14">
                        <Image
                            alt="mail"
                            src={MailImg}
                            quality={80}
                            className="order-2 md:order-1"
                        ></Image>
                        <div className="flex flex-col justify-center order-1 md:order-2">
                            <div className="Headline text-design-light-green text-4xl md:text-5xl font-extrabold font-avenir leading-10">
                                {t("newsletter-form.title")}
                            </div>
                            <p className="IntroductoryText mt-10 text-neutral-100 md:text-lg font-light font-inter leading-relaxed">
                                {t("newsletter-form.message")}
                            </p>

                            <input
                                placeholder={t("name")}
                                className="mt-10 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                            ></input>
                            <input
                                placeholder={t("organization")}
                                className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                            ></input>
                            <input
                                placeholder={t("title")}
                                className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                            ></input>

                            <div className="block relative w-full mt-4">
                                <input
                                    placeholder={t("email")}
                                    className="rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                                ></input>
                                <button className="absolute bg-white hover:bg-design-light-green duration-300 transition-colors rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center">
                                    <ArrowIcon></ArrowIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-32 px-4 pb-footer">
                    <LogoCircle className="w-20 h-20 mx-auto"></LogoCircle>

                    <h1 className="font-avenir text-center w-fit mt-10 mx-auto font-semibold text-2xl lg:text-5xl text-design-green mb-4">
                        {t("get-involved-page.careers.title")}
                    </h1>

                    <p className="max-w-prose text-center font-avenir mx-auto mt-5">
                        {t("get-involved-page.careers.message")}
                    </p>

                    {/* {jobPositions.map((job) => {
                        return (
                            <div
                                className="my-4 grid grid-cols-2 grid-rows-[auto_1fr] gap-2 bg-design-light-gray rounded-xl px-10 py-4"
                                key={job.id}
                            >
                                <h2 className="col-start-1 text-2xl font-medium my-auto">
                                    {job.position}
                                </h2>
                                <ul className="flex flex-wrap col-start-1 h-auto row-start-2 col-span-2 lg:col-end-1 gap-2">
                                    <li className="flex mr-4 gap-3 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <circle
                                                cx="6.5"
                                                cy="6.5"
                                                r="5.5"
                                                stroke="#0F8BA0"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        {job.department}
                                    </li>
                                    <li className="flex mr-4 gap-3 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <circle
                                                cx="6.5"
                                                cy="6.5"
                                                r="5.5"
                                                stroke="#0F8BA0"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        {job.location}
                                    </li>
                                    <li className="flex mr-4 gap-3 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <circle
                                                cx="6.5"
                                                cy="6.5"
                                                r="5.5"
                                                stroke="#0F8BA0"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        {job.date}
                                    </li>
                                </ul>

                                <button className="r-btn bg-design-green text-white font-normal row-end-1 md:row-start-1 md:row-span-2 col-start-2 ml-auto my-auto">
                                    Apply
                                </button>
                            </div>
                        );
                    })} */}
                </section>
            </div>
        </main>
    );
}
