import ReportsAndPublications from "./reports-and-publications";
import CapacityBuilding from "./capacity-building";
import ResearchAndAnalysis from "./research-and-analysis";
import Hero from "./hero";
import Navigation from "./navigation";
import Policy from "./policy";
import { fetchData } from "./data";

export default async function OurWorkPage() {
    const {
        issuesAndNarratives,
        platformsAndApps,
        reportsAndPublications,
        additionalResources,
        policy,
        whatWeAreReading,
        workshopsAndEvents,
    } = await fetchData();

    return (
        <main className="bg-design-light pt-[150px]">
            <Hero></Hero>
            <Navigation></Navigation>
            <ResearchAndAnalysis
                issuesAndNarratives={issuesAndNarratives}
                platformsAndApps={platformsAndApps}
            ></ResearchAndAnalysis>
            <ReportsAndPublications
                reportsAndPublications={reportsAndPublications}
            ></ReportsAndPublications>
            <CapacityBuilding
                workshopsAndEvents={workshopsAndEvents}
                whatWeAreReading={whatWeAreReading}
                additionalResources={additionalResources}
            ></CapacityBuilding>
            <Policy policy={policy}></Policy>
        </main>
    );
}
