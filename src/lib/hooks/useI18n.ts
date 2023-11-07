"use client";

import i18nConfig from "@/i18nConfig";
import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect, useState } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

//
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend(
            (language: string, namespace: string) =>
                import(`../../../locales/${language}/${namespace}.json`)
        )
    )
    .init({
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        // debug: true,
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

    if (
        typeof window === 'undefined' && locale && i18n.resolvedLanguage !== locale
    ) {
        i18n.changeLanguage(locale);
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeLocale, setActiveLocale] = useState<string | undefined>(i18n.resolvedLanguage);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (i18n.resolvedLanguage && i18n.resolvedLanguage !== activeLocale) {
                setActiveLocale(i18n.resolvedLanguage);
            }
        }, [activeLocale, i18n.resolvedLanguage]);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!locale || i18n.resolvedLanguage === locale) return;
            i18n.changeLanguage(locale);
        }, [locale, i18n]);
    }

    return ret;
}
