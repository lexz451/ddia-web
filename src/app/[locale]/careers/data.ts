import { getApi } from "@/lib/utils/api";

export async function fetchData() {
    const { data: careers } = await getApi<any[]>(
        "/careers",
        {
            filters: {
                enabled: {
                    $eq: true,
                },
            },
        },
        {
            next: { tags: ["career"] },
        }
    );

    return { careers };
}