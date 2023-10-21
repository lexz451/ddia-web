'use client';

import SearchBar from "./search-bar";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "@lexz451/next-nprogress";

export default function Filters({
    tags
}: { tags: any[] }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    const handleTagClick = (tag: any) => {
        const queryString = createQueryString("tag", tag.slug)
        router.push(`${pathname}?${queryString}`)
    }

    const resetTag = () => {
        const params = new URLSearchParams(searchParams)
        params.delete("tag")
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="flex items-start gap-10 mb-8 border-b border-neutral-400 pb-5">
            <div className="flex items-center flex-wrap flex-1 gap-2">
                <button
                    className={`min-w-[80px] text-center rounded-full border-[1.5px] px-5 py-2 font-avenir flex-shrink-0 border-design-green font-extrabold text-sm 
                ${!searchParams.get("tag")
                            ? "bg-design-green text-white"
                            : "text-design-green"
                        }`}
                    onClick={() => resetTag()}
                >
                    All
                </button>
                {tags.map((tag: any) => {
                    return (
                        <button
                            key={tag.slug}
                            className={`min-w-[80px] text-center rounded-full border-[1.5px] px-5 py-2 font-avenir flex-shrink-0 border-design-green font-extrabold text-sm ${searchParams.get('tag') == tag.slug
                                ? "bg-design-green text-white"
                                : "text-design-green"
                                }`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag.title}
                        </button>
                    );
                })}
            </div>
            <SearchBar />
        </div>
    )
}