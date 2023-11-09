"use client";

import i18nConfig from "@/i18nConfig";
import { useRouter } from "@lexz451/next-nprogress";
import { usePathname } from "next/navigation";

export default function useI18nRouter() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = i18nConfig.locales.find((locale) =>
        pathname.startsWith(`/${locale}`)
    );
    const hrefLocale = currentLocale ? `/${currentLocale}` : "";

    const startsWithLocale = (url: string) => {
        return url.startsWith(hrefLocale);
    };

    const push = (url: string) => {
        if (startsWithLocale(url)) {
            return router.push(url);
        }
        return router.push(`${hrefLocale}${url == "/" ? "" : url}`);
    };

    return {
        push,
    };
}
