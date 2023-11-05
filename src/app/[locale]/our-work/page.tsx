import ReportsAndPublications from "./reports-and-publications";
import CapacityBuilding from "./capacity-building";
import ResearchAndAnalysis from "./research-and-analysis";
import Hero from "./hero";
import Navigation from "./navigation";
import Policy from "./policy";
import { fetchData } from "./data";

export default async function OurWorkPage() {
    const {
        research,
        reports,
        capacity,
        policy,
    } = await fetchData();

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
            <Policy policy={policy}></Policy>
        </main>
    );
}
