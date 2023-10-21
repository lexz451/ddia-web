'use client';
import SearchIcon from '@/lib/assets/search.svg';
import { useRouter } from '@lexz451/next-nprogress';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const searchParam = params.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(searchParam);

  useEffect(() => {
    setSearchQuery(params.get("q") || "");
  }, [params]);

  function search(query: string) {
    console.log("searching");
    router.push("/latest?q=" + query);
  }

  return (
    <div className="min-w-[250px] mb-4">
      <div
        className={`group flex overflow-hidden relative  rounded-full bg-design-light transition-[width] duration-500 ease-out outline-design-green outline-[1.5px] w-full lg:max-w-[14rem] lg:ml-auto lg:w-11 ${
          !!searchQuery
            ? "lg:w-full outline"
            : "lg:focus-within:w-full focus-within:outline"
        } `}
      >
        <div className="absolute flex h-full w-[80%] ">
          <input
            className={`w-full px-5 my-auto transition-opacity duration-300 bg-transparent outline-none opacity-100 cursor-pointer placeholder:italic group-focus-within:cursor-auto`}
            type="text"
            placeholder="Insert your search"
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

        <button className="flex ml-auto rounded-full h-11 w-11">
          <SearchIcon className="stroke-design-green m-auto"></SearchIcon>
        </button>
      </div>
    </div>
  );
}
