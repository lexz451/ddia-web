import IndicatorIcon from "@/lib/assets/indicator.svg";
import Search2Icon from "@/lib/assets/search-2.svg";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import Image from "next/image";
import TestImg from "@/lib/assets/tecnologia-fondo-toque-humano-nueva-version-moderna-creacion-adan-11.png";
import { TPost } from "@/lib/utils/types";
import ServerImage from "@/lib/components/server-image";
import { parsePostDate, parseReadTime } from "@/lib/utils/helpers";
import { Link } from "@lexz451/next-nprogress";
import FacebookIcon from "@/lib/assets/facebook.svg";
import XIcon from "@/lib/assets/x-twitter.svg";
import TikTokIcon from "@/lib/assets/tiktok.svg";
import YoutubeIcon from "@/lib/assets/yt.svg";
import WhatsappIcon from "@/lib/assets/whatsapp.svg";
import TelegramIcon from "@/lib/assets/telegram.svg";
import ConspiracyImg from "@/lib/assets/issues-and-narratives/conspiracy.png";
import DiversityImg from "@/lib/assets/issues-and-narratives/diversity.png";
import ElectionsImg from "@/lib/assets/issues-and-narratives/elections.png";
import IAImg from "@/lib/assets/issues-and-narratives/IA.png";
import MigrationImg from "@/lib/assets/issues-and-narratives/migration.png";
import PHealthImg from "@/lib/assets/issues-and-narratives/public-health.png";
import ShapeIcon from "@/lib/assets/shape-understanding.svg";
import DetermineIcon from "@/lib/assets/determine-the-extent.svg";

export default function ResearchAndAnalysis({
    issuesAndNarratives,
    platformsAndApps,
}: {
    issuesAndNarratives: TPost[];
    platformsAndApps: TPost[];
}) {
    return (
        <section
            id="research-and-analysis"
            className="our-work-section page-container py-20"
        >
            <div className="flex flex-col items-center">
                <IndicatorIcon className="fill-design-yellow w-4 h-4"></IndicatorIcon>
                <div className="Headline mt-10 text-center text-design-green text-6xl font-extrabold  leading-10">
                    Research and Analysis
                </div>
                <div className="IntroductoryText mt-8 max-w-prose text-center text-design-green text-lg font-normal  leading-relaxed">
                    DDIA uses narrative analysis, open source investigations,
                    public opinion research, and information-sharing between
                    disciplines across the Americas to deepen understanding of
                    Latinos and information landscapes in the U.S. and Latin
                    America.
                </div>
                <div
                    id="public-opinion-research"
                    className="flex items-center gap-10 my-20 w-full"
                >
                    <div className="flex-1 h-[1px] bg-neutral-400 bg-opacity-50"></div>
                    <div className="IntroductoryText text-center text-design-green text-3xl font-extrabold  leading-7">
                        Public Opinion Research
                    </div>
                    <div className="flex-1 h-[1px] bg-neutral-400 bg-opacity-50"></div>
                </div>
                <div className="IntroductoryText max-w-prose text-center text-design-green text-lg font-normal  leading-relaxed">
                    DDIA conducts polls, surveys, focus groups and interviews to
                    develop theories about what is unique to Latinos when it
                    comes to information integrity and information disorder
                    online.
                </div>
                <div className="IntroductoryText my-10 text-center text-design-green text-xl font-extrabold  uppercase leading-7">
                    We use public opinion research to:
                </div>
                <div className="Rectangle247 border-none max-w-[80%] flex items-center justify-between p-10 gap-10 h-36 bg-design-extralight-yellow rounded-2xl">
                    <ShapeIcon className="w-12 h-12 flex-shrink-0"></ShapeIcon>
                    <div className="IntroductoryText text-neutral-800 text-2xl font-normal  leading-none">
                        Shape understanding of the psychological, social, and
                        systemic drivers of information and disinformation
                        cycles.
                    </div>
                </div>
                <div className="Rectangle247 border-none mt-5 max-w-[80%] flex items-center justify-between p-10 gap-10 h-36 bg-design-extralight-yellow rounded-2xl">
                    <DetermineIcon className="w-12 h-12 flex-shrink-0"></DetermineIcon>
                    <div className="IntroductoryText text-neutral-800 text-2xl font-normal  leading-none">
                        Determine the extent to which disinformation,
                        misinformation, propaganda and extremist content
                        penetrate and impact Latinos’ beliefs, behaviors, and
                        democratic engagement (and vice versa).
                    </div>
                </div>
                <div className="IntroductoryText mt-10 max-w-prose text-center text-neutral-800 text-lg font-normal  leading-relaxed">
                    Research insights inform resilience-building interventions
                    for communities across the Americas. These insights also
                    serve as a resource for policymakers, civil society, and
                    media looking to shape better programming decisions that
                    impact Latino and Latin American communities.
                </div>

                <div className="grid grid-cols-3 gap-10 my-20">
                    <div className="BlogSectionsPost overflow-hidden bg-white rounded-xl grid grid-rows-2">
                        <Image
                            src={TestImg}
                            alt=""
                            className="relative w-full h-full object-cover object-center"
                        ></Image>
                        <div className="Content p-6 bg-white flex-col justify-center items-start gap-6 inline-flex">
                            <div className="LeadingContent self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div className="TitleAndPreview self-stretch  flex-col justify-start items-start gap-3 flex">
                                    <div className="Title self-stretch text-gray-900 text-xl font-semibold font-avenir leading-normal">
                                        Decisions that impact Latin American
                                        communities
                                    </div>
                                </div>
                            </div>
                            <div className="BlogSectionsAvatarWithText justify-start items-center gap-3 inline-flex">
                                <div className="Avatar w-10 h-10 bg-stone-100 rounded-full" />
                                <div className="Text flex-col justify-start items-start inline-flex">
                                    <div className="Title text-gray-900 text-sm font-medium leading-tight">
                                        Brenna Goyette
                                    </div>
                                    <div className="SupportingText text-gray-500 text-sm font-normal leading-tight">
                                        Mar 10, 2020 · 4 min read
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BlogSectionsPost overflow-hidden bg-white rounded-xl grid grid-rows-2">
                        <Image
                            src={TestImg}
                            alt=""
                            className="relative w-full h-full object-cover object-center"
                        ></Image>
                        <div className="Content p-6 bg-white flex-col justify-center items-start gap-6 inline-flex">
                            <div className="LeadingContent self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div className="TitleAndPreview self-stretch  flex-col justify-start items-start gap-3 flex">
                                    <div className="Title self-stretch text-gray-900 text-xl font-semibold font-avenir leading-normal">
                                        Decisions that impact Latin American
                                        communities
                                    </div>
                                </div>
                            </div>
                            <div className="BlogSectionsAvatarWithText justify-start items-center gap-3 inline-flex">
                                <div className="Avatar w-10 h-10 bg-stone-100 rounded-full" />
                                <div className="Text flex-col justify-start items-start inline-flex">
                                    <div className="Title text-gray-900 text-sm font-medium leading-tight">
                                        Brenna Goyette
                                    </div>
                                    <div className="SupportingText text-gray-500 text-sm font-normal leading-tight">
                                        Mar 10, 2020 · 4 min read
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BlogSectionsPost overflow-hidden bg-white rounded-xl grid grid-rows-2">
                        <Image
                            src={TestImg}
                            alt=""
                            className="relative w-full h-full object-cover object-center"
                        ></Image>
                        <div className="Content p-6 bg-white flex-col justify-center items-start gap-6 inline-flex">
                            <div className="LeadingContent self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div className="TitleAndPreview self-stretch  flex-col justify-start items-start gap-3 flex">
                                    <div className="Title self-stretch text-gray-900 text-xl font-semibold font-avenir leading-normal">
                                        Decisions that impact Latin American
                                        communities
                                    </div>
                                </div>
                            </div>
                            <div className="BlogSectionsAvatarWithText justify-start items-center gap-3 inline-flex">
                                <div className="Avatar w-10 h-10 bg-stone-100 rounded-full" />
                                <div className="Text flex-col justify-start items-start inline-flex">
                                    <div className="Title text-gray-900 text-sm font-medium leading-tight">
                                        Brenna Goyette
                                    </div>
                                    <div className="SupportingText text-gray-500 text-sm font-normal leading-tight">
                                        Mar 10, 2020 · 4 min read
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <Link
                        href={`#`}
                        className="r-btn border-none text-white bg-design-green"
                    >
                        See all
                    </Link>
                </div>
                <div
                    id="social-listening-and-osint-investigations"
                    className="flex items-center gap-10 my-20 w-full"
                >
                    <div className="flex-1 h-[1px] bg-neutral-400 bg-opacity-50"></div>
                    <div className="IntroductoryText text-center text-design-green text-3xl font-extrabold  leading-7">
                        Social Listening and OSINT Investigations
                    </div>
                    <div className="flex-1 h-[1px] bg-neutral-400 bg-opacity-50"></div>
                </div>
                <div className="IntroductoryText max-w-prose text-center text-neutral-800 text-lg font-normal  leading-relaxed">
                    DDIA and U.S uses social listening, media monitoring, and
                    OSINT techniques to shed light on how Latino communities are
                    exposed to and targeted with information within platforms,
                    messaging apps, and websites across the U.S. and Latin
                    America.
                </div>
                <div
                    id="issues-and-narratives"
                    className="IntroductoryText mt-20 text-center text-design-green text-xl font-extrabold  uppercase leading-7"
                >
                    Issues and Narratives
                </div>
                <div className="grid grid-cols-3 grid-rows-2 mt-10 gap-10">
                    <Link
                        href={`/our-work/issues-and-narratives?tag=elections-and-voting`}
                        className="group relative overflow-hidden bg-design-cyan rounded-2xl flex justify-between aspect-[4/2] p-8"
                    >
                        <Image
                            src={ElectionsImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-3xl font-extrabold ">
                            Elections and Voting
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </Link>
                    <Link
                        href={`/our-work/issues-and-narratives?tag=identity-and-culture`}
                        className="group relative overflow-hidden bg-design-cyan rounded-2xl flex justify-between aspect-[4/2] p-8"
                    >
                        <Image
                            src={DiversityImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-3xl font-extrabold ">
                            Identity and Culture
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </Link>
                   
                    <Link
                        href={`/our-work/issues-and-narratives?tag=public-health`}
                        className="group relative overflow-hidden bg-design-cyan rounded-2xl flex justify-between aspect-[4/2] p-8"
                    >
                        <Image
                            src={PHealthImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-3xl font-extrabold ">
                            Public <br></br> Health
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </Link>

                    <Link
                        href={`/our-work/issues-and-narratives?tag=migration`}
                        className="group relative overflow-hidden bg-design-cyan rounded-2xl flex justify-between aspect-[4/2] p-8"
                    >
                        <Image
                            src={MigrationImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-3xl font-extrabold ">
                            Migration
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </Link>

                    <Link
                        href={`/our-work/issues-and-narratives?tag=artificial-intelligence`}
                        className="group relative overflow-hidden bg-design-cyan rounded-2xl flex justify-between aspect-[4/2] p-8"
                    >
                        <Image
                            src={IAImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-3xl font-extrabold ">
                            Artificial Intelligence
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </Link>

                    <Link
                        href={`/our-work/issues-and-narratives?tag=conspiracy-networks`}
                        className="group relative overflow-hidden bg-design-cyan rounded-2xl flex justify-between aspect-[4/2] p-8"
                    >
                        <Image
                            src={ConspiracyImg}
                            alt=""
                            className="absolute left-0 top-0 w-full h-full"
                        ></Image>
                        <div className="transition-all duration-300 overlay absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-50 bg-design-cyan"></div>
                        <div className="relative z-10 Headline text-white text-3xl font-extrabold ">
                            Conspiracy Networks
                        </div>
                        <ArrowCircleIcon className="relative z-10 stroke-design-light-green mt-auto flex-shrink-0"></ArrowCircleIcon>
                    </Link>
                </div>
               
                <div
                    id="platforms-and-apps"
                    className="IntroductoryText text-center mt-20 text-design-green text-xl font-extrabold  uppercase leading-7"
                >
                    Platforms and Apps
                </div>
                <div className="grid grid-cols-3 grid-rows-2 mt-10 gap-10">
                    <Link
                        href={
                            "/our-work/platforms-and-apps?tag=facebook-and-instagram"
                        }
                        className="Rectangle17 bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <FacebookIcon className=" fill-white"></FacebookIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-3xl font-extrabold ">
                                Facebook and <br></br> Instagram
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </Link>
                    <Link
                        href={
                            "/our-work/platforms-and-apps?tag=x-formerly-twitter"
                        }
                        className="Rectangle17 bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <XIcon className="w-5 h-5 fill-white"></XIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-3xl font-extrabold ">
                                X (formerly Twitter)
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </Link>
                    <Link
                        href={"/our-work/platforms-and-apps?tag=tiktok"}
                        className="Rectangle17 bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <TikTokIcon className=" fill-white"></TikTokIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-3xl font-extrabold ">
                                TikTok
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </Link>
                    <Link
                        href={"/our-work/platforms-and-apps?tag=whatsapp"}
                        className="Rectangle17 bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <WhatsappIcon className=" fill-white"></WhatsappIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-3xl font-extrabold ">
                                Whatsapp
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </Link>
                    <Link
                        href={"/our-work/platforms-and-apps?tag=youtube"}
                        className="Rectangle17 bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <YoutubeIcon className="fill-white"></YoutubeIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-3xl font-extrabold ">
                                Youtube
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </Link>
                    <Link
                        href={"/our-work/platforms-and-apps?tag=telegram"}
                        className="Rectangle17 bg-design-cyan hover:bg-design-green transition-all duration-300 rounded-2xl flex flex-col justify-between h-full p-8"
                    >
                        <div className="Ellipse59 w-11 h-11 flex items-center justify-center bg-white bg-opacity-30 rounded-full">
                            <TelegramIcon className="w-5 h-5 fill-white"></TelegramIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="Headline mt-5 text-white text-3xl font-extrabold ">
                                Telegram
                            </div>
                            <ArrowCircleIcon className="stroke-design-light-green ml-auto flex-shrink-0"></ArrowCircleIcon>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
