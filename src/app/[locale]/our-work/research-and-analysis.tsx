import IndicatorIcon from "@/lib/assets/indicator.svg";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import Image from "next/image";
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
import { TPost } from "@/lib/utils/types";
import ServerImage from "@/lib/components/server-image";
import { parsePostDate, parseReadTime } from "@/lib/utils/helpers";
import I18nLink from "@/lib/components/I18nLink";

export default function ResearchAndAnalysis({
    research,
    t,
    translations,
}: {
    research: {
        publicOpinionResearch: TPost[];
    };
    t: any;
    translations: any;
}) {

    return (
        <section
            id="research-and-analysis"
            className="py-10 lg:py-20 our-work-section page-container"
        >
            <div className="flex flex-col items-center">
                <IndicatorIcon className="w-4 h-4 fill-design-yellow"></IndicatorIcon>
                <div className="mt-10 font-extrabold text-4xl text-center text-design-green lg:text-6xl leading-10 Headline">
                    {t('research-and-analysis')}
                </div>
                <div className="mt-8 max-w-prose font-normal text-center text-design-green text-lg leading-relaxed IntroductoryText">
                    {/* {t('our-work-page.research.message')} */}
                    {translations?.research.message}
                </div>
                <div
                    id="public-opinion-research"
                    className="flex lg:flex-row flex-col items-center gap-4 lg:gap-10 my-10 lg:my-20 w-full"
                >
                    <div className="lg:flex-1 bg-neutral-400 bg-opacity-50 w-full h-[1px]"></div>
                    <div className="font-extrabold text-2xl text-center text-design-green lg:text-3xl leading-7 IntroductoryText">
                        {t('public-opinion-research')}
                    </div>
                    <div className="lg:flex-1 bg-neutral-400 bg-opacity-50 w-full h-[1px]"></div>
                </div>
                <div className="max-w-prose font-normal text-center text-design-green text-lg leading-relaxed IntroductoryText">
                    {/* {t('our-work-page.research.message2')} */}
                    {translations?.research.message2}
                </div>
                <div className="my-10 font-extrabold text-center text-design-green text-xl uppercase leading-7 IntroductoryText">
                    {/* {t('our-work-page.research.message3')} */}
                    {translations?.research.message3}
                </div>
                <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-10 bg-design-extralight-yellow p-10 border-none rounded-2xl lg:max-w-[80%] lg:h-36 Rectangle247">
                    <ShapeIcon className="flex-shrink-0 w-12 h-12"></ShapeIcon>
                    <div className="font-normal text-neutral-800 text-xl lg:text-2xl leading-none IntroductoryText">
                        {/* {t('our-work-page.research.message4')} */}
                        {translations?.research.message4}
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-10 bg-design-extralight-yellow mt-5 p-10 border-none rounded-2xl lg:max-w-[80%] lg:h-36 Rectangle247">
                    <DetermineIcon className="flex-shrink-0 w-12 h-12"></DetermineIcon>
                    <div className="font-normal text-neutral-800 text-xl lg:text-2xl leading-none IntroductoryText">
                        {/* {t('our-work-page.research.message5')} */}
                        {translations?.research.message5}
                    </div>
                </div>
                <div className="mt-10 max-w-prose font-normal text-center text-lg text-neutral-800 leading-relaxed IntroductoryText">
                    {/* {t('our-work-page.research.message6')} */}
                    {translations?.research.message6}
                </div>

                <div className="gap-10 grid lg:grid-cols-3 lg:grid-rows-2 mt-20 lg:min-h-screen">
                    {research.publicOpinionResearch.map((post) => (
                        <div key={post.slug} className="grid grid-rows-2 bg-white rounded-xl h-auto overflow-hidden BlogSectionsPost">
                            {
                                post.feature_media && (
                                    <I18nLink href={post.platform_url ? post.platform_url : `/${post.slug}`}>
                                        <ServerImage {...post.feature_media} className="relative w-full h-full object-center object-cover"></ServerImage>
                                    </I18nLink>
                                )
                            }
                            <div className="inline-flex flex-col justify-start items-start gap-6 bg-white p-6 Content">
                                <div className="inline-flex flex-col justify-start items-start gap-2 LeadingContent self-stretch">
                                    <div className="flex flex-col justify-start items-start gap-3 self-stretch TitleAndPreview">
                                        <I18nLink href={post.platform_url ? post.platform_url : `/${post.slug}`} className="line-clamp-3 font-avenir font-semibold text-gray-900 text-lg leading-normal self-stretch Title">
                                            {post.title}
                                        </I18nLink>
                                    </div>
                                </div>
                                {
                                    post.authors?.length > 0 && (
                                        <div className="inline-flex justify-start items-center gap-3 mt-auto BlogSectionsAvatarWithText">
                                            {
                                                post.authors[0].avatar && (
                                                    <ServerImage {...post.authors[0].avatar} className="bg-stone-100 rounded-full w-10 h-10 Avatar object-cover"></ServerImage>
                                                )
                                            }
                                            <div className="inline-flex flex-col justify-start items-start Text">
                                                <div className="font-medium text-gray-900 text-sm leading-tight Title">
                                                    {post.authors[0].name}
                                                </div>
                                                <div className="font-normal text-gray-500 text-sm leading-tight SupportingText">
                                                    {parsePostDate(post.created_date)} · {parseReadTime(post.content)}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))}

                </div>
                {/* <div className="flex justify-center items-center w-full">
                    <Link
                        href={`#`}
                        className="bg-design-green border-none text-white r-btn"
                    >
                        See all
                    </Link>
                </div> */}
                <div
                    id="social-listening-and-osint-investigations"
                    className="flex lg:flex-row flex-col items-center gap-4 lg:gap-10 my-20 w-full"
                >
                    <div className="lg:flex-1 bg-neutral-400 bg-opacity-50 w-full h-[1px]"></div>
                    <div className="font-extrabold text-2xl text-center text-design-green lg:text-3xl leading-7 IntroductoryText">
                        {t('social-listening-osint-investigations')}
                    </div>
                    <div className="lg:flex-1 bg-neutral-400 bg-opacity-50 w-full h-[1px]"></div>
                </div>
                <div className="max-w-prose font-normal text-center text-lg text-neutral-800 leading-relaxed IntroductoryText">
                    {/* {t('our-work-page.research.message7')} */}
                    {translations?.research.message7}
                </div>
                <div
                    id="issues-and-narratives"
                    className="mt-20 font-extrabold text-center text-design-green text-xl uppercase leading-7 IntroductoryText"
                >
                    {t('issues-and-narratives')}
                </div>
                <div className="gap-5 lg:gap-10 grid lg:grid-cols-3 lg:grid-rows-2 mt-10 w-full">
                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=elections-and-voting`}
                        className="relative flex justify-between items-center bg-design-cyan p-8 rounded-xl lg:rounded-2xl overflow-hidden group lg:aspect-[4/2]"
                    >
                        <Image
                            src={ElectionsImg}
                            alt=""
                            className="top-0 left-0 absolute w-full h-full"
                        ></Image>
                        <div className="group-hover:bg-black top-0 left-0 absolute bg-design-cyan group-hover:bg-opacity-50 w-full h-full transition-all duration-300 overlay"></div>
                        <div className="relative z-10 font-extrabold text-white text-xl lg:text-3xl Headline">
                            {t('elections-and-voting')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 flex-shrink-0 mt-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                    </I18nLink>
                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=identity-and-culture`}
                        className="relative flex justify-between items-center bg-design-cyan p-8 rounded-xl lg:rounded-2xl overflow-hidden group lg:aspect-[4/2]"
                    >
                        <Image
                            src={DiversityImg}
                            alt=""
                            className="top-0 left-0 absolute w-full h-full"
                        ></Image>
                        <div className="group-hover:bg-black top-0 left-0 absolute bg-design-cyan group-hover:bg-opacity-50 w-full h-full transition-all duration-300 overlay"></div>
                        <div className="relative z-10 font-extrabold text-white text-xl lg:text-3xl Headline">
                            {t('identity-and-culture')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 flex-shrink-0 mt-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                    </I18nLink>

                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=public-health`}
                        className="relative flex justify-between items-center bg-design-cyan p-8 rounded-xl lg:rounded-2xl overflow-hidden group lg:aspect-[4/2]"
                    >
                        <Image
                            src={PHealthImg}
                            alt=""
                            className="top-0 left-0 absolute w-full h-full"
                        ></Image>
                        <div className="group-hover:bg-black top-0 left-0 absolute bg-design-cyan group-hover:bg-opacity-50 w-full h-full transition-all duration-300 overlay"></div>
                        <div className="relative z-10 font-extrabold text-white text-xl lg:text-3xl whitespace-nowrap lg:whitespace-normal Headline">
                            {t('public-health')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 flex-shrink-0 mt-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                    </I18nLink>

                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=migration`}
                        className="relative flex justify-between items-center bg-design-cyan p-8 rounded-xl lg:rounded-2xl overflow-hidden group lg:aspect-[4/2]"
                    >
                        <Image
                            src={MigrationImg}
                            alt=""
                            className="top-0 left-0 absolute w-full h-full"
                        ></Image>
                        <div className="group-hover:bg-black top-0 left-0 absolute bg-design-cyan group-hover:bg-opacity-50 w-full h-full transition-all duration-300 overlay"></div>
                        <div className="relative z-10 font-extrabold text-white text-xl lg:text-3xl Headline">
                            {t('migration')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 flex-shrink-0 mt-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                    </I18nLink>

                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=artificial-intelligence`}
                        className="relative flex justify-between items-center bg-design-cyan p-8 rounded-xl lg:rounded-2xl overflow-hidden group lg:aspect-[4/2]"
                    >
                        <Image
                            src={IAImg}
                            alt=""
                            className="top-0 left-0 absolute w-full h-full"
                        ></Image>
                        <div className="group-hover:bg-black top-0 left-0 absolute bg-design-cyan group-hover:bg-opacity-50 w-full h-full transition-all duration-300 overlay"></div>
                        <div className="relative z-10 font-extrabold text-white text-xl lg:text-3xl Headline">
                            {t('artificial-intelligence')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 flex-shrink-0 mt-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                    </I18nLink>

                    <I18nLink
                        href={`/our-work/issues-and-narratives?tag=conspiracy-networks`}
                        className="relative flex justify-between items-center bg-design-cyan p-8 rounded-xl lg:rounded-2xl overflow-hidden group lg:aspect-[4/2]"
                    >
                        <Image
                            src={ConspiracyImg}
                            alt=""
                            className="top-0 left-0 absolute w-full h-full"
                        ></Image>
                        <div className="group-hover:bg-black top-0 left-0 absolute bg-design-cyan group-hover:bg-opacity-50 w-full h-full transition-all duration-300 overlay"></div>
                        <div className="relative z-10 font-extrabold text-white text-xl lg:text-3xl Headline">
                            {t('conspiracy-networks')}
                        </div>
                        <ArrowCircleIcon className="relative z-10 flex-shrink-0 mt-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                    </I18nLink>
                </div>

                <div
                    id="platforms-and-apps"
                    className="mt-20 font-extrabold text-center text-design-green text-xl uppercase leading-7 IntroductoryText"
                >
                    {t('platforms-and-apps')}
                </div>
                <div className="gap-5 lg:gap-10 grid lg:grid-cols-3 lg:grid-rows-2 mt-10 w-full">
                    <I18nLink
                        href={
                            "/our-work/platforms-and-apps?tag=facebook-and-instagram"
                        }
                        className="flex flex-col justify-between bg-design-cyan hover:bg-design-green p-8 rounded-xl lg:rounded-2xl h-full transition-all duration-300 Rectangle17"
                    >
                        <div className="flex justify-center items-center bg-white bg-opacity-30 rounded-full w-11 h-11 Ellipse59">
                            <FacebookIcon className="fill-white"></FacebookIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="mt-5 font-extrabold text-white text-xl lg:text-3xl Headline">
                                Facebook / Instagram
                            </div>
                            <ArrowCircleIcon className="flex-shrink-0 ml-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={
                            "/our-work/platforms-and-apps?tag=x-formerly-twitter"
                        }
                        className="flex flex-col justify-between bg-design-cyan hover:bg-design-green p-8 rounded-xl lg:rounded-2xl h-full transition-all duration-300"
                    >
                        <div className="flex justify-center items-center bg-white bg-opacity-30 rounded-full w-11 h-11">
                            <XIcon className="w-5 h-5 fill-white"></XIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="mt-5 font-extrabold text-white text-xl lg:text-3xl Headline">
                                {t('x-twitter')}
                            </div>
                            <ArrowCircleIcon className="flex-shrink-0 ml-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={"/our-work/platforms-and-apps?tag=tiktok"}
                        className="flex flex-col justify-between bg-design-cyan hover:bg-design-green p-8 rounded-xl lg:rounded-2xl h-full transition-all duration-300"
                    >
                        <div className="flex justify-center items-center bg-white bg-opacity-30 rounded-full w-11 h-11 Ellipse59">
                            <TikTokIcon className="fill-white"></TikTokIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="mt-5 font-extrabold text-white text-xl lg:text-3xl Headline">
                                {t('tiktok')}
                            </div>
                            <ArrowCircleIcon className="flex-shrink-0 ml-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={"/our-work/platforms-and-apps?tag=whatsapp"}
                        className="flex flex-col justify-between bg-design-cyan hover:bg-design-green p-8 rounded-xl lg:rounded-2xl h-full transition-all duration-300"
                    >
                        <div className="flex justify-center items-center bg-white bg-opacity-30 rounded-full w-11 h-11">
                            <WhatsappIcon className="fill-white"></WhatsappIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="mt-5 font-extrabold text-white text-xl lg:text-3xl Headline">
                                {t('whatsapp')}
                            </div>
                            <ArrowCircleIcon className="flex-shrink-0 ml-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={"/our-work/platforms-and-apps?tag=youtube"}
                        className="flex flex-col justify-between bg-design-cyan hover:bg-design-green p-8 rounded-xl lg:rounded-2xl h-full transition-all duration-300"
                    >
                        <div className="flex justify-center items-center bg-white bg-opacity-30 rounded-full w-11 h-11 Ellipse59">
                            <YoutubeIcon className="fill-white"></YoutubeIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="mt-5 font-extrabold text-white text-xl lg:text-3xl Headline">
                                {t('youtube')}
                            </div>
                            <ArrowCircleIcon className="flex-shrink-0 ml-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                    <I18nLink
                        href={"/our-work/platforms-and-apps?tag=telegram"}
                        className="flex flex-col justify-between bg-design-cyan hover:bg-design-green p-8 rounded-xl lg:rounded-2xl h-full transition-all duration-300"
                    >
                        <div className="flex justify-center items-center bg-white bg-opacity-30 rounded-full w-11 h-11 Ellipse59">
                            <TelegramIcon className="w-5 h-5 fill-white"></TelegramIcon>
                        </div>
                        <div className="flex items-end">
                            <div className="mt-5 font-extrabold text-white text-xl lg:text-3xl Headline">
                                {t('telegram')}
                            </div>
                            <ArrowCircleIcon className="flex-shrink-0 ml-auto stroke-[1.5] stroke-design-light-green"></ArrowCircleIcon>
                        </div>
                    </I18nLink>
                </div>
            </div>
        </section>
    );
}
