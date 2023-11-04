"use client";
import { useRouter } from "@lexz451/next-nprogress";
import { usePathname } from "next/navigation";
import useI18n from "../hooks/useI18n";

export default function I18nSwitcher({
    currentLocale,
}: {
    currentLocale: string;
}) {
    const router = useRouter();
    const currentPathname = usePathname();
    const { t } = useI18n(currentLocale);

    const handleChange = (newLocale: string) => {
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "; expires=" + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        const pathNameWithoutLocale = currentPathname.replace(
            `/${currentLocale}`,
            ""
        );

        router.push("/" + newLocale + pathNameWithoutLocale);

        router.refresh();
    };

    return (
        <div className="flex items-center text-sm">
            <span className="whitespace-nowrap mr-2">
                {t("i18nSwitcher.label")}
            </span>
            <button
                onClick={() =>
                    handleChange(currentLocale == "en" ? "es" : "en")
                }
                className="underline"
            >
                {t(currentLocale == "en" ? "es" : "en")}
            </button>
        </div>
    );
}
