"use client";
import SearchIcon from "@/lib/assets/search.svg";
import CloseIcon from "@/lib/assets/close.svg";
import { useRouter } from "@lexz451/next-nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchBar({
    onSearch,
    onClear,
    placeholder,
    autoClean = false,
    query
}: {
    onSearch?: (query: string) => void;
    onClear?: () => void;
    placeholder?: string;
    autoClean?: boolean;
    query?: string;
}) {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(query || "");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setSearchQuery(query || "");
    }, [query]);

    useEffect(() => {
        if (autoClean) {
            setSearchQuery("")
            inputRef.current?.blur();
        }
    }, [autoClean, pathname, query, searchParams])

    function search() {
        onSearch?.(searchQuery);
    }

    function clearSearch() {
        setSearchQuery("");
        onClear?.();
    }

    // function onAction() {
    //     clearSearch();
    // }

    return (
        <div className="min-w-[200px]">
            <div
                className={`group flex overflow-hidden relative ml-auto rounded-full bg-stone-100  outline-design-green outline-[1.5px] ${
                    !!searchQuery ? "outline" : "focus-within:outline"
                } `}
            >
                <div className="absolute flex h-full w-[80%] ">
                    <input
                        ref={inputRef}
                        className={`w-full px-5 my-auto transition-opacity duration-300 bg-transparent outline-none opacity-100 cursor-pointer placeholder:italic group-focus-within:cursor-auto`}
                        type="text"
                        placeholder={placeholder || "Insert your search"}
                        value={searchQuery}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                search()
                            }
                        }}
                        onChange={(event) => {
                            setSearchQuery(event.target.value);
                        }}
                    />
                </div>

                <div
                    className="flex ml-auto rounded-full h-11 w-11"
                >
                    {searchQuery ? (
                        <CloseIcon onClick={clearSearch} className="cursor-pointer m-auto w-5 h-5 fill-design-green"></CloseIcon>
                    ) : (
                        <SearchIcon className="m-auto w-5 h-5 "></SearchIcon>
                    )}
                </div>
            </div>
        </div>
    );
}
