import IndicatorIcon from "@/lib/assets/indicator.svg";
import { TPost } from "@/lib/utils/types";
import ServerImage from "@/lib/components/server-image";
import I18nLink from "@/lib/components/I18nLink";

export default function Policy({ policy, t }: { policy: TPost[]; t: any }) {
    return (
        <section
            id="policy"
            className="our-work-section bg-design-light pb-footer"
        >
            <div className="page-container py-10 lg:py-20 mb-10">
                <div className="flex flex-col items-center">
                    <IndicatorIcon className="fill-design-green w-4 h-4"></IndicatorIcon>
                    <div className="Headline mt-10 text-center text-design-green text-4xl lg:text-6xl font-extrabold  leading-10">
                        {t("policy")}
                    </div>
                    <div className="IntroductoryText mt-8 max-w-prose text-center text-design-green text-lg font-normal  leading-normal">
                        <p className="mb-4">
                            {t("our-work-page.research.message11")}
                        </p>
                        <p>{t("our-work-page.research.message12")}</p>
                    </div>

                    <div className="grid lg:grid-cols-3 mt-20 gap-10">
                        {policy.map((upd) => (
                            <div key={upd.slug} className={`flex flex-col`}>
                                <I18nLink
                                    href={`${upd.platform_url}`}
                                    className="relative w-full mb-4 group rounded-2xl overflow-hidden"
                                >
                                    {upd.feature_media && (
                                        <ServerImage
                                            {...upd.feature_media}
                                            sizes="33vw"
                                            className="aspect-[9/6] object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                </I18nLink>
                                <I18nLink
                                    href={`${upd.platform_url}`}
                                    className="mt-2 mb-4 text-xl font-semibold tracking-tight text-design-dark-green"
                                >
                                    {upd.title}
                                </I18nLink>
                                <h4 className="tracking-tighter text-gray-500 line-clamp-3">
                                    {upd.description}
                                </h4>
                                <div className="flex flex-row items-center my-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <path
                                            d="M8.97117 17.8042L17.9414 8.90137L8.97117 -0.00149975L0.000941627 8.90137L8.97117 17.8042Z"
                                            fill="#EBB785"
                                        />
                                    </svg>
                                    <I18nLink
                                        className="pl-2 text-sm font-bold underline text-design-green"
                                        href={`/${upd.slug}`}
                                    >
                                        {t("read-more")}
                                    </I18nLink>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <I18nLink
                            href={`/latest?tag=policy`}
                            className="r-btn border-none text-white bg-design-green mt-10"
                        >
                            See all
                        </I18nLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
