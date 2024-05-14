import { getApi } from "@/lib/utils/api";
import { Metadata } from "next";
import { fetchData } from "./data";
import I18nLink from "@/lib/components/I18nLink";

export const metadata: Metadata = {
    title: "Careers | DDIA - Digital Democracy Institute of the Americas",
    description:
        "The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.",
    robots: {
        follow: true,
        index: true,
    },
    publisher: "DDIA",
    alternates: {
        canonical: `${process.env.SITE_HOST}/en/careers`,
        languages: {
            "en-US": `${process.env.SITE_HOST}/en/careers`,
            "es-ES": `${process.env.SITE_HOST}/es/careers`,
            "pt-BR": `${process.env.SITE_HOST}/pt/careers`,
        },
    },
};

export default async function Careers({
    params: { locale },
}: {
    params: { locale: string };
}) {

    const translation = await getApi<any>(`/static-text/${locale}`);
    const translations = (translation as any)['careers-page'];
    const { careers } = await fetchData()

    return (
        <main className="page-container">
            <section className="flex flex-col items-center mt-10  pt-[120px]">
                <h1 className="w-fit mx-auto font-extrabold text-4xl lg:text-6xl text-design-green mb-4">
                    {/* {t("careers-page.title")} */}
                    {translations?.title}
                </h1>
            </section>
            {
                careers.length === 0 && (
                    <section className="mb-20">
                        <p className="max-w-prose text-center mx-auto text-lg">
                            {/* {t("careers-page.message")} */}
                            {translations?.message}
                        </p>
                    </section>)
            }
            <div className="flex flex-col mt-10">
                {
                    careers.map((career: any, index: number) => {
                        return (
                            <div key={index} className="mb-20 bg-design-extralight-yellow p-5 rounded-xl">
                                <I18nLink href={`/careers/${career.slug}`} className="text-2xl font-bold hover:text-design-green transition-all duration-300">
                                    {career.title}
                                </I18nLink>
                                <div className="flex items-center gap-2 mt-3">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6.5" cy="6.5" r="5.5" stroke="#0F8BA0" strokeWidth="2" />
                                    </svg>
                                    <span className="leading-none">{career.location}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <section className="pb-footer"></section>
        </main>
    );
}
