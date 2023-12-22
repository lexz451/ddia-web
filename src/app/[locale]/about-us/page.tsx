import imgapproach from "@/lib/assets/approach-11.png";
import imgfakeNews from "@/lib/assets/fake-news.png";
import imgholdingWorld from "@/lib/assets/hombre-negocios-mundo-mano-1.png";
import imghandsCircle from "@/lib/assets/manos-circulo.png";
import imgvision1 from "@/lib/assets/vision-1.png";
import imgvision2 from "@/lib/assets/vision-2.png";
import { getApi } from "@/lib/utils/api";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us | DDIA - Digital Democracy Institute of the Americas",
    description:
        "The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.",
    robots: {
        follow: true,
        index: true,
    },
    publisher: "DDIA",
    alternates: {
        canonical: `${process.env.SITE_HOST}/en/about-us`,
        languages: {
            "en-US": `${process.env.SITE_HOST}/en/about-us`,
            "es-ES": `${process.env.SITE_HOST}/es/about-us`,
            "pt-BR": `${process.env.SITE_HOST}/pt/about-us`,
        },
    },
};

export default async function AboutUs({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const translation = await getApi<any>(`/static-text/${locale}`);
    const { about: translations } = translation as any;

    return (
        <main className="">
            <section
                id="our-mission"
                className="gradient-green-page pt-[120px]"
            >
                <div className="page-container mt-10">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_2fr] gap-6 pb-10">
                        <Image
                            className="object-cover w-full object-left-top rounded-2xl"
                            src={imgvision1}
                            placeholder="blur"
                            alt="vision-img"
                            sizes="50vw"
                        />
                        <div className="flex w-full h-full lg:py-8 lg:px-12 lg:bg-design-light rounded-2xl">
                            <div className="m-auto">
                                <h1 className="text-4xl lg:text-5xl text-design-green font-avenir font-semibold pb-8">
                                    {/* {t('about.our-mission.title')} */}
                                    {/*Our Mission*/}
                                    {translations?.["our-mission"].title}
                                </h1>
                                <p className="text-base text-design-dark font-avenir min-w-prose">
                                    {translations?.["our-mission"].subtitle}
                                    {/* {t("about.our-mission.subtitle")} */}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-6 pb-10">
                        <div className="flex w-full h-full lg:py-8 lg:px-12 lg:bg-design-light rounded-2xl">
                            <div className="m-auto">
                                <h1 className="text-4xl lg:text-5xl text-design-green font-avenir font-semibold pb-8">
                                    {/* {t("about.our-vision.title")} */}
                                    {/*Our Vision*/}
                                    {translations?.["our-vision"].title}
                                </h1>
                                <p className="text-base text-design-dark font-avenir min-w-prose">
                                    {/* {t("about.our-vision.subtitle")} */}
                                    {translations?.["our-vision"].subtitle}
                                </p>
                            </div>
                        </div>
                        <Image
                            className="w-full object-cover object-center rounded-2xl"
                            src={imgvision2}
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section
                id="our-approach"
                className="bg-design-light-yellow lg:bg-transparent"
            >
                <div className="lg:page-container my-20">
                    <div className="page-container flex flex-col-reverse lg:flex-row items-center justify-center gap-8 py-14 lg:px-10 lg:bg-design-light-yellow rounded-2xl">
                        <Image
                            className="object-cover basis-1/2 object-center grow-0 shrink-[3]"
                            src={imgapproach}
                            alt="approach"
                            sizes="50vw"
                            placeholder="blur"
                        />
                        <div className="basis-1/2 grow shrink-0 w-full px-12">
                            <h1 className="text-4xl lg:text-5xl text-design-green font-semibold pb-8">
                                {/* {t("about.our-approach.title")} */}
                                {/*Our Approach*/}
                                {translations?.["our-approach"].title}
                            </h1>
                            <p className="text-base text-design-dark font-avenir max-w-prose">
                                {/* {t("about.our-approach.subtitle")} */}
                                {translations?.["our-approach"].subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="core-strategies" className="">
                <div className="page-container">
                    <div className="flex flex-col lg:items-center mx-auto pb-footer mb-12 lg:max-w-[80%]">
                        <h1 className="text-4xl lg:text-5xl text-design-green font-semibold pb-8">
                            {/* {t("about.core-strategies.title")} */}
                            
                            {/*Core Strategies*/}
                            {translations?.["core-strategies"].title}
                        </h1>
                        <p className="text-base text-design-dark lg:text-center font-avenir mb-16 max-w-prose">
                            {/* {t("about.core-strategies.subtitle")} */}
                            {translations?.["core-strategies"].subtitle}
                            

                        </p>

                        <div className="lg:h-[300px] grid grid-rows-2 lg:grid lg:grid-rows-1 lg:grid-cols-2 mb-12 bg-design-light-yellow rounded-2xl">
                            <div className="relative order-2 lg:order-1">
                                <Image
                                    className="object-cover object-center rounded-2xl"
                                    src={imgfakeNews}
                                    alt="fake-news"
                                    sizes="30vw"
                                    fill={true}
                                    placeholder="blur"
                                />
                                <h1 className="block absolute text-white right-[15%] top-[40%] text-5xl w-[4ch] rotate-[-15deg] font-[Bakbak One]">
                                    Fake news
                                </h1>
                            </div>

                            <div className="order-1 lg:order-2 flex flex-col justify-center relative py-10 px-5 md:px-10  mr-8 h-full">
                                <svg
                                    className=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M8.97117 17.8042L17.9414 8.90137L8.97117 -0.00149975L0.000941627 8.90137L8.97117 17.8042Z"
                                        fill="#EBB785"
                                    />
                                </svg>
                                <p className="text-xl text-design-dark font-avenir max-w-prose mt-5">
                                    {translations?.["core-strategies"].first}
                                    {/* {t("about.core-strategies.first")} */}
                                    {/*Shape understanding of the systemic, social and behavioral
                  factors that contribute to the spread of false, misleading,
                  and hate-fueled information in Latino spaces online*/}
                                </p>
                            </div>
                        </div>

                        <div className="lg:h-[300px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mb-12 bg-design-light-yellow rounded-2xl">
                            <div className="relative order-2 lg:order-1">
                                <Image
                                    className="object-cover object-center rounded-2xl aspect-[9/6]"
                                    src={imghandsCircle}
                                    alt=""
                                    sizes="30vw"
                                    fill={true}
                                    placeholder="blur"
                                />
                            </div>

                            <div className="order-1 lg:order-2 flex flex-col justify-center relative py-10 px-5 md:px-10  mr-8 h-full">
                                <svg
                                    className=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M8.97117 17.8042L17.9414 8.90137L8.97117 -0.00149975L0.000941627 8.90137L8.97117 17.8042Z"
                                        fill="#EBB785"
                                    />
                                </svg>
                                <p className="text-xl text-design-dark font-avenir max-w-prose mt-5">
                                    {translations?.["core-strategies"].second}
                                    {/* {t("about.core-strategies.second")} */}
                                    {/*Incubate and adapt proven-effective interventions and
                  approaches in service of Latino communities*/}
                                </p>
                            </div>
                        </div>

                        <div className="lg:h-[300px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mb-12 bg-design-light-yellow rounded-2xl">
                            <div className="relative order-2 lg:order-1">
                                <Image
                                    className="object-cover object-center rounded-2xl aspect-[9/6]"
                                    src={imgholdingWorld}
                                    alt="holding-world"
                                    sizes="30vw"
                                    fill={true}
                                    placeholder="blur"
                                />
                            </div>

                            <div className="order-1 lg:order-2 flex flex-col justify-center relative py-10 px-5 md:px-10  mr-8 h-full">
                                <svg
                                    className=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M8.97117 17.8042L17.9414 8.90137L8.97117 -0.00149975L0.000941627 8.90137L8.97117 17.8042Z"
                                        fill="#EBB785"
                                    />
                                </svg>
                                <p className="text-xl text-design-dark font-avenir max-w-prose mt-5">
                                    {translations?.["core-strategies"].third}
                                    {/* {t("about.core-strategies.third")} */}
                                    {/*Center Latinos’ perspectives and experiences in policy
                  discussions and decisions made about the future of the
                Internet and online world.*/}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
