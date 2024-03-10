import { getApi } from "@/lib/utils/api";

export async function fetchData() {
    const { data: careers } = await getApi<any[]>(
        "/careers",
        {},
        {
            next: { tags: ["career"] },
        }
    );

    return { careers };
}