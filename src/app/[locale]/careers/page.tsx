import { getApi } from "@/lib/utils/api";
import { Metadata } from "next";

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

    return (
        <main className="page-container">
            <section className="flex flex-col items-center mt-10  pt-[120px]">
                <h1 className="w-fit mx-auto font-extrabold text-4xl lg:text-6xl text-design-green mb-4">
                    {/* {t("careers-page.title")} */}
                    {translations?.title}
                </h1>
            </section>
            <section className="mb-20">
                <p className="max-w-prose text-center mx-auto text-lg">
                    {/* {t("careers-page.message")} */}
                    {translations?.message}
                </p>
            </section>
            <section className="pb-footer"></section>
        </main>
    );
}
