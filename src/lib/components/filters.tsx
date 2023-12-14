"use client";

import SearchBar from "./search-bar";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useI18nRouter from "../hooks/useI18nRouter";
import useI18n from "../hooks/useI18n";

export default function Filters({
    tags,
    locale,
}: {
    tags: any[];
    locale: string;
}) {
    const { t } = useI18n(locale);
    const router = useI18nRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    const handleTagClick = (tag: any) => {
        const queryString = createQueryString("tag", tag.slug);
        router.push(`${pathname}?${queryString}`);
    };

    const resetTag = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("tag");
        router.push(`${pathname}?${params.toString()}`);
    };

    const onSearch = (query: string) => {
        const queryString = createQueryString("q", query);
        router.push(`${pathname}?${queryString}`);
    };

    const onClearSearch = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("q");
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="relative flex flex-col lg:flex-row items-center gap-10 mb-8 border-b border-neutral-400 pb-5">
            <div className="order-2 lg:order-1 flex items-center flex-wrap flex-1 gap-2">
                <button
                    className={`min-w-[80px] text-center rounded-full border-[1.5px] px-4 py-2 font-avenir flex-shrink-0 border-design-green font-extrabold text-sm 
                ${
                    !searchParams.get("tag")
                        ? "bg-design-green text-white"
                        : "text-design-green"
                }`}
                    onClick={() => resetTag()}
                >
                    {t("all")}
                </button>
                {tags.sort(
                    (a,b) => t(a.slug).localeCompare(t(b.slug))
                ).map((tag: any) => {
                    return (
                        <button
                            key={tag.slug}
                            className={`min-w-[80px] text-center rounded-full border-[1.5px] px-4 py-2 font-avenir flex-shrink-0 border-design-green font-extrabold text-sm ${
                                searchParams.get("tag") == tag.slug
                                    ? "bg-design-green text-white"
                                    : "text-design-green"
                            }`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {t(tag.slug)}
                        </button>
                    );
                })}
            </div>
            <div className="order-1 lg:order-2 w-full lg:w-auto">
                <SearchBar
                    onSearch={onSearch}
                    onClear={onClearSearch}
                    placeholder={t('filter')}
                />
            </div>
        </div>
    );
}
