"use client";
import SearchIcon from "@/lib/assets/search.svg";
import CloseIcon from "@/lib/assets/close.svg";
import { useRouter } from "@lexz451/next-nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar({
    onSearch,
    queryParam,
    placeholder,
    autoFocus,
}: {
    onSearch?: (query: string) => void;
    queryParam?: string;
    placeholder?: string;
    autoFocus?: boolean;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();

    const searchParam = params.get(queryParam || "search") || "";

    const [searchQuery, setSearchQuery] = useState(searchParam);

    useEffect(() => {
        setSearchQuery(params.get("q") || "");
    }, [params]);

    useEffect(() => {
        setSearchQuery(params.get(queryParam || "search") || "");
    }, [params, queryParam]);

    function search(query: string) {
        if (onSearch) {
            onSearch(query);
        } else {
            console.log("searching...");
            const params = new URLSearchParams();
            params.set(queryParam || "search", query);
            router.push(`${pathname}?${params.toString()}`);
        }
    }

    function clearSearch() {
        setSearchQuery("");
        const params = new URLSearchParams();
        params.delete(queryParam || "search");
        router.push(`${pathname}?${params.toString()}`);
    }

    function onAction() {
        clearSearch();
    }

    return (
        <div className="min-w-[200px]">
            <div
                className={`group flex overflow-hidden relative ml-auto rounded-full bg-stone-100  outline-design-green outline-[1.5px] ${
                    !!searchQuery ? "outline" : "focus-within:outline"
                } `}
            >
                <div className="absolute flex h-full w-[80%] ">
                    <input
                        autoFocus={autoFocus}
                        className={`w-full px-5 my-auto transition-opacity duration-300 bg-transparent outline-none opacity-100 cursor-pointer placeholder:italic group-focus-within:cursor-auto`}
                        type="text"
                        placeholder={placeholder || "Insert your search"}
                        value={searchQuery}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                search(searchQuery);
                            }
                        }}
                        onChange={(event) => {
                            setSearchQuery(event.target.value);
                        }}
                    />
                </div>

                <button
                    onClick={onAction}
                    className="flex ml-auto rounded-full h-11 w-11"
                >
                    {searchQuery ? (
                        <CloseIcon className="m-auto w-5 h-5 fill-design-green"></CloseIcon>
                    ) : (
                        <SearchIcon className="m-auto w-5 h-5 "></SearchIcon>
                    )}
                </button>
            </div>
        </div>
    );
}
