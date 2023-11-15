"use client";

import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import { useIsomorphicLayoutEffect } from "@/lib/hooks/useIsomorphicLayoutEffect";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

import Image from "next/image";
import ResearchImg from "@/lib/assets/our-work/research.png";
import ReportImg from "@/lib/assets/our-work/report.png";
import CapacityImg from "@/lib/assets/our-work/capacity.png";
import PolicyImg from "@/lib/assets/our-work/policy.png";
import useI18n from "@/lib/hooks/useI18n";

export default function Hero({
    locale
}: {
    locale: string;
}) {

    const {t} = useI18n(locale);

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    });

    const scrollToSection = (section: string) => {
        gsap.to(window, {
            scrollTo: {
                autoKill: true,
                y: `section${section}`,
                // offsetY: 50
            },
        });
    };

    return (
        <section className="gradient-green-page lg:bg-none pt-[80px] lg:pt-0">
            <div className="page-container">
            <div className="flex flex-col items-center lg:px-10 py-20 lg:gradient-green-container rounded-3xl">
                <div className="text-center text-design-green text-4xl lg:text-6xl font-extrabold  leading-10">
                    {t('our-work')}
                </div>
                <div className="mt-5 lg:mt-10 text-center text-design-green text-lg font-normal leading-normal">
                    {t('our-work-page.description')}
                </div>
                <div className="grid lg:grid-cols-2 gap-8 mt-14 w-full lg:px-16">
                    <button
                        aria-label="Research and Analysis"
                        onClick={() =>
                            scrollToSection("#research-and-analysis")
                        }
                        className="bg-design-green group overflow-hidden relative px-8 py-2 lg:py-8 h-36 rounded-xl lg:rounded-3xl flex items-center"
                    >
                        <Image
                            src={ResearchImg}
                            alt=""
                            className="absolute w-full h-full object-cover left-0 top-0"
                        ></Image>
                        <div className="overlay absolute transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-50 bg-design-green top-0 left-0 w-full h-full"></div>
                        <div className="Headline relative z-10 text-left flex-1 text-white text-2xl lg:text-3xl font-extrabold  lg:leading-9">
                            {t('research-and-analysis')}
                        </div>
                        <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] rotate-90"></ArrowCircleIcon>
                    </button>
                    <button
                        aria-label="Reports and Publications"
                        onClick={() =>
                            scrollToSection("#reports-and-publications")
                        }
                        className="bg-design-green group relative overflow-hidden px-8 py-2 lg:py-8 h-36 rounded-xl lg:rounded-3xl flex items-center"
                    >
                        <Image
                            src={ReportImg}
                            alt=""
                            className="absolute w-full h-full object-cover left-0 top-0"
                        ></Image>
                        <div className="overlay absolute transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-50 bg-design-green top-0 left-0 w-full h-full"></div>
                        <div className="Headline text-left relative z-10 flex-1 text-white text-2xl lg:text-3xl font-extrabold lg:leading-9">
                            {t('reports-and-publications')}
                        </div>
                        <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] rotate-90"></ArrowCircleIcon>
                    </button>
                    <button
                        aria-label="Capacity-Building"
                        onClick={() => scrollToSection("#capacity-building")}
                        className="bg-design-green group overflow-hidden relative px-8 py-2 lg:py-8 h-36 rounded-xl lg:rounded-3xl flex items-center"
                    >
                        <Image
                            src={CapacityImg}
                            alt=""
                            className="absolute w-full h-full object-cover left-0 top-0"
                        ></Image>
                        <div className="overlay absolute transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-50 bg-design-green  top-0 left-0 w-full h-full"></div>
                        <div className="text-left relative z-10 flex-1 text-white text-2xl lg:text-3xl font-extrabold  leading-9">
                            {t('capacity-building')}
                        </div>
                        <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] rotate-90"></ArrowCircleIcon>
                    </button>
                    <button
                        aria-label="Policy"
                        onClick={() => scrollToSection("#policy")}
                        className="bg-design-green group relative overflow-hidden px-8 py-2 lg:py-8 h-36 rounded-xl lg:rounded-3xl flex items-center"
                    >
                        <Image
                            src={PolicyImg}
                            alt=""
                            className="absolute w-full h-full object-cover left-0 top-0"
                        ></Image>
                        <div className="overlay absolute transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-50 bg-design-green top-0 left-0 w-full h-full"></div>
                        <div className="Headline text-left flex-1 relative z-10 text-white text-2xl lg:text-3xl font-extrabold  leading-9">
                            {t('policy')}
                        </div>
                        <ArrowCircleIcon className="stroke-design-light-green stroke-[1.5] rotate-90"></ArrowCircleIcon>
                    </button>
                </div>
            </div>
            </div>
        </section>
    );
}
