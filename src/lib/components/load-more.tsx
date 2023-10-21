'use client'

import React, { useEffect, useState } from "react"

type LoadMoreType = {
    items: any[],
    total: number,
    className?: string,
    params?: any,
    renderComponent: (item: any, key: string) => JSX.Element
}

export default function LoadMore(
    {
        items,
        total,
        className,
        params: defaultParams,
        renderComponent
    }: LoadMoreType
) {

    const [canFetchMore, setCanFetchMore] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState<any[]>(items);

    useEffect(() => setCanFetchMore(results.length < total), [results, total]);
    useEffect(() => setResults(items), [items]);

    const fetchMore = () => {
        const start = results.length;
        const params = new URLSearchParams(defaultParams);
        params.append('start', start.toString());
        setIsLoading(true);
        fetch(`/api/posts?${params.toString()}`)
            .then(response => response.json())
            .then(data => {
                setResults([...results, ...data.data]);
            }).catch((e) => {
                console.log(e)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="flex flex-col">
            <div className={`${className} flex-1`}>
                {results?.map((item: any) => renderComponent(item, item.slug))}
            </div>
            {canFetchMore && (
                <div className="flex w-full my-20">
                    <button
                        className="mx-auto text-white bg-design-green border-none font-normal r-btn"
                        onClick={fetchMore}
                    >
                        {isLoading ? 'Loading...' : 'Load more'}
                    </button>
                </div>
            )}
        </div>
    )
}