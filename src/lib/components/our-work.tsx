"use client";
import SearchIcon from "@/lib/assets/search-2.svg";
import ReportsIcon from "@/lib/assets/reports-and-publications.svg";
import CapacityIcon from "@/lib/assets/capacity-building.svg";
import PolicyIcon from "@/lib/assets/policy.svg";
import { useGsapWithContext } from "@/lib/hooks/useGsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import useI18n from "../hooks/useI18n";
import I18nLink from "./I18nLink";

export default function OurWork({
    locale,
    translations,
}: {
    locale: string;
    translations: any;
}) {

    const { t } = useI18n(locale)

    const swiperPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className}">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                        />
                      </svg>
            </span>`;
        },
    };

    useGsapWithContext((gsap) => {
        gsap.registerPlugin(ScrollTrigger);

        const wrapper = document.querySelector(
            ".our-work-container-wrapper"
        ) as HTMLDivElement;
        const container = document.querySelector(
            ".our-work-container"
        ) as HTMLDivElement;
        const containerOffset = container?.offsetLeft;
        const scroller = document.querySelector(".scroller") as HTMLDivElement;

        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            scroller.style.gridAutoColumns = (container?.offsetWidth / 2) - 40 - 10 + "px";

            gsap.to(scroller, {
                x: () =>
                    wrapper?.offsetWidth -
                    scroller?.offsetWidth -
                    containerOffset * 2 -
                    32,
                scrollTrigger: {
                    trigger: ".our-work-container",
                    pin: true,
                    invalidateOnRefresh: true,
                    start: "center center",
                    end: "bottom top",
                    // markers: true,
                    scrub: true,
                },
            });
        });
    });

    return (
        <div className="our-work-container-wrapper overflow-hidden">
            <div className="lg:hidden page-container mb-10">
                <div className="flex flex-col items-start">
                    <div className="Headline text-design-green text-3xl lg:text-5xl font-extrabold  leading-10 mb-5 lg:mb-10">
                        {t('home.our-work.title')}
                    </div>
                    <div className="IntroductoryText lg:max-w-prose text-neutral-800 lg:text-lg font-normal  leading-relaxed mb-10">
                        {/* {t('home.our-work.subtitle')} */}
                        {translations?.['our-work']?.subtitle}
                    </div>
                    <I18nLink
                        href={"/our-work"}
                        className="r-btn rounded-3xl border-none text-white bg-design-green"
                    >
                        {t('more-details')}
                    </I18nLink>
                </div>
            </div>
            <div className="our-work-container page-container">
                <div className="flex items-center h-full">
                    <Swiper
                        className="lg:hidden"
                        spaceBetween={50}
                        slidesPerView={1}                        
                        pagination={swiperPagination}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="w-fit max-h-[40rem] h-full rounded-3xl gradient-green-container-horizontal py-20 px-10">
                                <SearchIcon className="mb-10"></SearchIcon>
                                <div className="lg:mb-10 mb-5 Headline text-design-dark-green text-2xl lg:text-4xl font-extrabold  leading-9">
                                    {/* {t('home.our-work.research.title')} */}
                                    {translations?.['our-work']?.research?.title}
                                </div>
                                <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-relaxed">
                                    {/* {t('home.our-work.research.subtitle')} */}
                                    {translations?.['our-work']?.research?.subtitle}
                                </div>
                                <div className="flex items-center mt-4">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                                            fill="#fafafa"
                                        />
                                    </svg>
                                    <I18nLink
                                        href={"/our-work#research-and-analysis"}
                                        className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose"
                                    >
                                        {t("read-more")}
                                    </I18nLink>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-fit max-h-[40rem] h-full rounded-3xl gradient-green-container-horizontal py-20 px-10">
                                <ReportsIcon className="mb-10 w-14 h-14"></ReportsIcon>
                                <div className="lg:mb-10 mb-5 Headline text-design-dark-green text-2xl lg:text-4xl font-extrabold  leading-9">
                                    {/* {t('home.our-work.reports.title')} */}
                                    {translations?.['our-work']?.reports?.title}
                                </div>
                                <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-relaxed">
                                    {/* {t('home.our-work.reports.subtitle')} */}
                                    {translations?.['our-work']?.reports?.subtitle}
                                </div>
                                <div className="flex items-center mt-4">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                                            fill="#fafafa"
                                        />
                                    </svg>
                                    <I18nLink
                                        href={
                                            "/our-work#reports-and-publications"
                                        }
                                        className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose"
                                    >
                                        {t("read-more")}
                                    </I18nLink>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-fit max-h-[40rem] h-full rounded-3xl gradient-green-container-horizontal py-20 px-10">
                                <CapacityIcon className="mb-10 w-14 h-14"></CapacityIcon>
                                <div className="lg:mb-10 mb-5 Headline text-design-dark-green text-2xl lg:text-4xl font-extrabold  leading-9">
                                    {/* {t('home.our-work.capacity.title')} */}
                                    {translations?.['our-work']?.capacity?.title}
                                </div>
                                <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-relaxed">
                                    {/* {t('home.our-work.capacity.subtitle')} */}
                                    {translations?.['our-work']?.capacity?.subtitle}
                                </div>
                                <div className="flex items-center mt-4">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                                            fill="#fafafa"
                                        />
                                    </svg>
                                    <I18nLink
                                        href={"/our-work#capacity-building"}
                                        className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose"
                                    >
                                        {t("read-more")}
                                    </I18nLink>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-fit h-full rounded-3xl gradient-green-container-horizontal py-20 px-10">
                                <PolicyIcon className="mb-10 w-14 h-14"></PolicyIcon>
                                <div className="lg:mb-10 mb-5 Headline text-design-dark-green text-2xl lg:text-4xl font-extrabold  leading-9">
                                    {/* {t('home.our-work.policy.title')} */}
                                    {translations?.['our-work']?.policy?.title}
                                </div>
                                <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-relaxed">
                                    {/* {t('home.our-work.policy.subtitle')} */}
                                    {translations?.['our-work']?.policy?.subtitle}
                                </div>
                                <div className="flex items-center mt-4">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                                            fill="#fafafa"
                                        />
                                    </svg>
                                    <I18nLink
                                        href={"/our-work#policy"}
                                        className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose"
                                    >
                                        {t("read-more")}
                                    </I18nLink>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div
                        className={`scroller hidden lg:grid grid-flow-col auto-cols-[90vw] lg:auto-cols-[512px] gap-10 lg:gap-20`}
                    >
                        <div className="self-center">
                            <div className="flex flex-col items-start">
                                <div className="Headline text-design-green text-5xl font-extrabold  leading-10 mb-10">
                                    {t('home.our-work.title')}
                                </div>
                                <div className="IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-normal mb-10">
                                    {/* {t('home.our-work.subtitle')} */}
                                    {translations?.['our-work']?.subtitle}
                                </div>
                                <I18nLink
                                    href={"/our-work"}
                                    className="text-white border-none r-btn rounded-3xl bg-design-green"
                                >
                                    {t('more-details')}
                                </I18nLink>
                            </div>
                        </div>
                        <div className="w-fit max-w-[40rem] max-h-[40rem] h-full rounded-3xl gradient-green-container-horizontal py-20 px-10">
                            <SearchIcon className="mb-10"></SearchIcon>
                            <div className="lg:mb-10 mb-5 Headline text-design-dark-green text-2xl lg:text-4xl font-extrabold  leading-9">
                                {/* {t('home.our-work.research.title')} */}
                                {translations?.['our-work']?.research?.title}
                            </div>
                            <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-normal">
                                {/* {t('home.our-work.research.subtitle')} */}
                                {translations?.['our-work']?.research?.subtitle}
                            </div>
                            <div className="flex items-center mt-4">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                                        fill="#fafafa"
                                    />
                                </svg>
                                <I18nLink
                                    href={"/our-work#research-and-analysis"}
                                    className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose"
                                >
                                    {t("read-more")}
                                </I18nLink>
                            </div>
                        </div>
                        <div className="w-fit max-w-[40rem] max-h-[40rem] h-full rounded-3xl gradient-green-container-horizontal py-20 px-10">
                            <ReportsIcon className="mb-10 w-14 h-14"></ReportsIcon>
                            <div className="lg:mb-10 mb-5 Headline text-design-dark-green text-2xl lg:text-4xl font-extrabold  leading-9">
                                {/* {t('home.our-work.reports.title')} */}
                                {translations?.['our-work']?.reports?.title}
                            </div>
                            <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-normal">
                                {/* {t('home.our-work.reports.subtitle')} */}
                                {translations?.['our-work']?.reports?.subtitle}
                            </div>
                            <div className="flex items-center mt-4">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                                        fill="#fafafa"
                                    />
                                </svg>
                                <I18nLink
                                    href={"/our-work#reports-and-publications"}
                                    className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose"
                                >
                                    {t("read-more")}
                                </I18nLink>
                            </div>
                        </div>
                        <div className="w-fit max-w-[40rem] max-h-[40rem] h-full rounded-3xl gradient-green-container-horizontal py-20 px-10">
                            <CapacityIcon className="mb-10 w-14 h-14"></CapacityIcon>
                            <div className="lg:mb-10 mb-5 Headline text-design-dark-green text-2xl lg:text-4xl font-extrabold  leading-9">
                                {/* {t('home.our-work.capacity.title')} */}
                                {translations?.['our-work']?.capacity?.title}
                            </div>
                            <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-normal">
                                {/* {t('home.our-work.capacity.subtitle')} */}
                                {translations?.['our-work']?.capacity?.subtitle}
                            </div>
                            <div className="flex items-center mt-4">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                                        fill="#fafafa"
                                    />
                                </svg>
                                <I18nLink
                                    href={"/our-work#capacity-building"}
                                    className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose"
                                >
                                    {t("read-more")}
                                </I18nLink>
                            </div>
                        </div>
                        <div className="w-fit max-w-[40rem] max-h-[40rem] h-full rounded-3xl gradient-green-container-horizontal py-20 px-10">
                            <PolicyIcon className="mb-10 w-14 h-14"></PolicyIcon>
                            <div className="lg:mb-10 mb-5 Headline text-design-dark-green text-2xl lg:text-4xl font-extrabold  leading-9">
                                {/* {t('home.our-work.policy.title')} */}
                                {translations?.['our-work']?.policy?.title}
                            </div>
                            <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal  leading-normal">
                                {/* {t('home.our-work.policy.subtitle')} */}
                                {translations?.['our-work']?.policy?.subtitle}
                            </div>
                            <div className="flex items-center mt-4">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z"
                                        fill="#fafafa"
                                    />
                                </svg>
                                <I18nLink
                                    href={"/our-work#policy"}
                                    className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose"
                                >
                                   {t("read-more")}
                                </I18nLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
