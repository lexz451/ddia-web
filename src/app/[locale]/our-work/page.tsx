// import ReportsAndPublications from "./reports-and-publications";
// import CapacityBuilding from "./capacity-building";
// import ResearchAndAnalysis from "./research-and-analysis";
import Hero from "./hero";
import Navigation from "./navigation";
// import Policy from "./policy";
import { fetchData } from "./data";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";

const ResearchAndAnalysis = dynamic(() => import("./research-and-analysis"));
const ReportsAndPublications = dynamic(
    () => import("./reports-and-publications")
);
const CapacityBuilding = dynamic(() => import("./capacity-building"));
const Policy = dynamic(() => import("./policy"));

export default async function OurWorkPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const { research, reports, capacity, policy } = await fetchData();

    const { t } = await initTranslations(locale);

    return (
        <main className="bg-design-light lg:pt-[150px]">
            <Hero locale={locale}></Hero>
            <Navigation locale={locale}></Navigation>
            <ResearchAndAnalysis
                research={research}
                t={t}
            ></ResearchAndAnalysis>
            <ReportsAndPublications
                reports={reports}
                locale={locale}
            ></ReportsAndPublications>
            <CapacityBuilding t={t} capacity={capacity}></CapacityBuilding>
            <Policy policy={policy} t={t}></Policy>
        </main>
    );
}
