import ReportsAndPublications from './reports-and-publications';
import CapacityBuilding from './capacity-building';
import ResearchAndAnalysis from './research-and-analysis';
import { getApi } from '@/lib/utils/api';
import { TPost } from '@/lib/utils/types';
import Hero from './hero';
import Navigation from './navigation';
import Policy from './policy';

async function fetchData() {
    const { data: issuesAndNarratives } = await getApi<TPost[]>(`/posts`, {
        filters: {
            categories: {
                slug: {
                    $eq: 'issues-and-narratives'
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"],
        pagination: {
            limit: 3,
        },
        sort: ['publish_date:desc']
    });

    const { data: platformsAndApps } = await getApi<TPost[]>(`/posts`, {
        filters: {
            categories: {
                slug: {
                    $eq: 'platforms-and-apps'
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"],
        pagination: {
            limit: 3,
        },
        sort: ['publish_date:desc']
    });

    const reportsAndPublications = await getApi<TPost[]>(`/posts`, {
        filters: {
            post_type: {
                id: {
                    $eq: 2
                }
            }
        },
        populate: [
            "feature_media",
            "authors",
            "authors.avatar",
            "categories",
            "tags"],
        pagination: {
            limit: 6,
        },
        sort: ['publish_date:desc']
    });

    // const { data: reportsAndNarratives } = await getApi('/posts', {
    //     filters: {
    //         categories: {
    //             slug: {
    //                 $eq: 'reports-and-publications'
    //             }
    //         }
    //     },
    //     populate: [
    //         "feature_media",
    //         "post_type",
    //         "authors",
    //         "authors.avatar",
    //         "categories",
    //         "tags"],
    //     pagination: {
    //         limit: 3,
    //     },
    //     sort: ['publish_date:desc']
    // });

    return {
        issuesAndNarratives,
        platformsAndApps,
        reportsAndPublications: {
            data: reportsAndPublications.data,
            total: reportsAndPublications.meta.pagination.total
        }
    };
}

export default async function OurWorkPage() {

    const { issuesAndNarratives, platformsAndApps, reportsAndPublications } = await fetchData();

    return (
        <main className="bg-design-light pt-[150px]">
            <Hero></Hero>
            <Navigation></Navigation>
            <ResearchAndAnalysis issuesAndNarratives={issuesAndNarratives} platformsAndApps={platformsAndApps}></ResearchAndAnalysis>
            <ReportsAndPublications reportsAndPublications={reportsAndPublications}></ReportsAndPublications>
            <CapacityBuilding></CapacityBuilding>
            <Policy></Policy>
        </main>
    );
}