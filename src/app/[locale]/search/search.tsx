"use client";

import SearchBar from "@/lib/components/search-bar";
import useI18nRouter from "@/lib/hooks/useI18nRouter";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchWrapper({
    q
}: {
    q?: string;
}) {

    const router = useI18nRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [currentQuery, setCurrentQuery] = useState(q);

    useEffect(() => {
        setCurrentQuery(searchParams.get("q") || "");
    }, [searchParams])

    const onSearch = (query: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("q", query);
        router.push(`${pathname}?${params.toString()}`);
    }

    const resetSearch = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("q");
        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <section className="mx-auto">
            <SearchBar query={currentQuery} onClear={resetSearch} onSearch={onSearch}></SearchBar>
        </section>
    );
}
