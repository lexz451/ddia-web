import initTranslations from "@/i18n";
import I18nLink from "@/lib/components/I18nLink";
import TeamAccordion from "@/lib/components/team-accordion";
import { getApi } from "@/lib/utils/api";
import { TMember } from "@/lib/utils/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team | DDIA - Digital Democracy Institute of the Americas",
    description:
        "The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.",
    robots: {
        follow: true,
        index: true,
    },
    publisher: "DDIA",
    alternates: {
        canonical: `${process.env.SITE_HOST}/en/team`,
        languages: {
            "en-US": `${process.env.SITE_HOST}/en/team`,
            "es-ES": `${process.env.SITE_HOST}/es/team`,
            "pt-BR": `${process.env.SITE_HOST}/pt/team`,
        },
    },
};

async function fetchData() {
    const ourTeam = await getApi(
        "/our-teams",
        {
            populate: {
                avatar: true,
                descriptions: {
                    populate: ["language"]
                },
            },
            sort: ['order:asc']
        },
        {
            next: { tags: ["our-team"] },
        }
    );
    const board = await getApi(
        "/boards",
        {
            populate: {
                avatar: true,
                descriptions: {
                    populate: ["language"]
                },
            },
            sort: ['order:asc']
        },
        {
            next: { tags: ["board"] },
        }
    );
    const advisory = await getApi(
        "/advisories",
        {
            populate: {
                avatar: true,
                descriptions: {
                    populate: ["language"]
                },
            },
            sort: ['order:asc']
        },
        {
            next: { tags: ["advisory"] },
        }
    );


    return {
        ourTeam: ourTeam.data as TMember[],
        board: board.data as TMember[],
        advisory: advisory.data as TMember[],
    };
}

export default async function MeetTheTeam({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const { ourTeam, advisory, board } = await fetchData();
    const {t} = await initTranslations(locale)

    return (
        <main className="bg-gradient-to-b from-design-light-green via-white to-white pt-[150px]">
            <div className="page-container">
                <section className="flex flex-col items-center mt-10">
                    <h1 className="w-fit mx-auto font-extrabold text-4xl lg:text-6xl text-design-green mb-4">
                        {t("meet-the-team")}
                    </h1>
                    <I18nLink
                        className="r-btn border-design-green text-design-green mt-10 mx-auto"
                        href={"/careers"}
                    >
                        {t("work-with-us")}
                    </I18nLink>
                </section>
                <section className="mt-20 flex flex-col gap-8">
                    {ourTeam.map((member) => (
                        <TeamAccordion locale={locale} {...member} key={member.slug} />
                    ))}
                </section>
                <section>
                    <div
                        className="block w-full"
                        style={{
                            height: "1px",
                            backgroundColor: "rgba(90,100,100, 0.6)",
                            marginBlock: "4rem 3.2rem",
                        }}
                    ></div>
                    <h2 className="text-design-green mb-5 font-semibold text-4xl leading-10">
                        {t("board-of-directors")}
                    </h2>
                    <div className="flex flex-col gap-8">
                        {board.map((member) => (
                            <TeamAccordion locale={locale} {...member} key={member.slug} />
                        ))} 
                    </div>
                </section>
                <section className="pb-footer mb-32">
                    <div
                        className="block w-full"
                        style={{
                            height: "1px",
                            backgroundColor: "rgba(90,100,100, 0.6)",
                            marginBlock: "4rem 3.2rem",
                        }}
                    ></div>
                    <h2 className="text-design-green mb-5 font-semibold text-4xl leading-10">
                        {t("advisory-council")}
                    </h2>
                    <div className="flex flex-col gap-8">
                    {advisory.map((member) => (
                        <TeamAccordion locale={locale} {...member} key={member.slug} />
                    ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
