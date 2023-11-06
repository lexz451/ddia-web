"use client";

import i18nConfig from "@/i18nConfig";
import { Link } from "@lexz451/next-nprogress";
import { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

type I18nLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function I18nLink(props: I18nLinkProps) {
    const { href, ...rest } =
        props;

    const pathname = usePathname();
    
    const currentLocale = i18nConfig.locales.find((locale) =>
        pathname.startsWith(`/${locale}`)
    );

    const isExternal = href.startsWith("http");

    const hrefLocale = currentLocale ? `/${currentLocale}` : "";

    return (
        <Link
            href={isExternal ? href : `${hrefLocale}${href == "/" ? "" : href}`}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            {...rest}
        >
            {props.children}
        </Link>
    );
}
