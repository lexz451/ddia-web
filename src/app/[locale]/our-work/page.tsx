// import ReportsAndPublications from "./reports-and-publications";
// import CapacityBuilding from "./capacity-building";
// import ResearchAndAnalysis from "./research-and-analysis";
import Hero from "./hero";
import Navigation from "./navigation";
// import Policy from "./policy";
import { fetchData } from "./data";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const ResearchAndAnalysis = dynamic(() => import("./research-and-analysis"));
const ReportsAndPublications = dynamic(
    () => import("./reports-and-publications")
);
const CapacityBuilding = dynamic(() => import("./capacity-building"));
const Policy = dynamic(() => import("./policy"));

export const metadata: Metadata = {
    title: "Our Work | DDIA - Digital Democracy Institute of the Americas",
    description:
        "The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.",
    robots: {
        follow: true,
        index: true,
    },
    publisher: "DDIA",
    alternates: {
        canonical: `${process.env.SITE_HOST}/en/our-work`,
        languages: {
            "en-US": `${process.env.SITE_HOST}/en/our-work`,
            "es-ES": `${process.env.SITE_HOST}/es/our-work`,
            "pt-BR": `${process.env.SITE_HOST}/pt/our-work`,
        },
    },
};

export default async function OurWorkPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const { research, reports, capacity, policy, translations } = await fetchData(locale);

    const { t } = await initTranslations(locale);

    return (
        <main className="bg-design-light lg:pt-[150px]">
            <Hero locale={locale} translations={translations}></Hero>
            <Navigation locale={locale}></Navigation>
            <ResearchAndAnalysis
                translations={translations}
                research={research}
                t={t}
            ></ResearchAndAnalysis>
            <ReportsAndPublications
                translations={translations}
                reports={reports}
                locale={locale}
            ></ReportsAndPublications>
            <CapacityBuilding translations={translations} t={t} capacity={capacity}></CapacityBuilding>
            <Policy translations={translations} policy={policy} t={t}></Policy>
        </main>
    );
}
