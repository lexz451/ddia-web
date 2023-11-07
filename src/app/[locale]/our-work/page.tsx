import ReportsAndPublications from "./reports-and-publications";
import CapacityBuilding from "./capacity-building";
import ResearchAndAnalysis from "./research-and-analysis";
import Hero from "./hero";
import Navigation from "./navigation";
import Policy from "./policy";
import { fetchData } from "./data";
import initTranslations from "@/i18n";

export default async function OurWorkPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const {
        research,
        reports,
        capacity,
        policy,
    } = await fetchData();

    const { t } = await initTranslations(locale)

    return (
        <main className="bg-design-light lg:pt-[150px]">
            <Hero></Hero>
            <Navigation></Navigation>
            <ResearchAndAnalysis research={research}></ResearchAndAnalysis>
            <ReportsAndPublications
                reports={reports}
            ></ReportsAndPublications>
            <CapacityBuilding
                capacity={capacity}
            ></CapacityBuilding>
            <Policy policy={policy} t={t}></Policy>
        </main>
    );
}
