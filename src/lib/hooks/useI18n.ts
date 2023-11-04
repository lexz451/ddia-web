import i18nConfig from "@/i18nConfig";
import i18next, { t } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect } from "react";
import { initReactI18next, useTranslation } from "react-i18next";

//
i18next
    .use(initReactI18next)
    //   .use(LanguageDetector)
    .use(
        resourcesToBackend(
            (language: string, namespace: string) =>
                import(`../../../locales/${language}/${namespace}.json`)
        )
    )
    .init({
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        debug: false,
        preload: typeof window === "undefined" ? i18nConfig.locales : [],
        lng: undefined, // let detect the language on client side
        detection: {
            order: ["path", "htmlTag", "cookie", "navigator"],
        },
    });

export default function useI18n(
    locale: string,
    namespaces: string | string[] | undefined = "translation"
) {
    const ret = useTranslation(namespaces);
    const { i18n } = ret;

    useEffect(() => {
        if (i18n.language !== locale) i18n.changeLanguage(locale);
    }, [locale, i18n]);

    return {
        ...ret,
    };
}
