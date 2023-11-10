import Navbar from "@/lib/components/navbar";
import type { Metadata } from "next";
import Footer from "@/lib/components/footer";
import { ProgressBar } from "@lexz451/next-nprogress";

import "../globals.css";
import { Suspense } from "react";
import { avenir } from "@/lib/utils/fonts";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";

export const metadata: Metadata = {
    title: "DDIA - Digital Democracy Institute of the Americas",
    description: "The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.",
    robots: {
        follow: true,
        index: true,
    },
    publisher: "DDIA",
    alternates: {
        canonical: `${process.env.SITE_HOST}/en`,
        languages: {
            'en-US': `${process.env.SITE_HOST}/en`,
            'es-ES': `${process.env.SITE_HOST}/es`,
            'pt-BR': `${process.env.SITE_HOST}/pt`,
        }
    }
};

export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale} dir={dir(locale)}>
            <head>
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#015C6B"
                ></link>
                <link
                    rel="icon"
                    href="/favicon.svg"
                    type="image/svg+xml"
                ></link>
            </head>
            <body className={`${avenir.variable}`}>
                <Navbar locale={locale} />
                {children}
                <Footer locale={locale} />
                <Suspense fallback={null}>
                    <ProgressBar
                        color="#015C6B"
                        height="2px"
                        options={{ showSpinner: false }}
                    />
                </Suspense>
            </body>
        </html>
    );
}
