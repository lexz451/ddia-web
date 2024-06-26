"use client";

import Logo from "@/lib/assets/logo.svg";
import LogoPinned from "@/lib/assets/logo-simple.svg";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import IndicatorIcon from "@/lib/assets/indicator.svg";
import GlobeIcon from "@/lib/assets/globe-alt.svg";
import { Suspense, useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import I18nSwitcher from "./I18nSwitcher";
import I18nLink from "./I18nLink";
import useClickOutside from "../hooks/useClickOutside";
import SearchBar from "./search-bar";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock-upgrade";
import NavbarAccordion from "./navbar-accordion";
import useI18nRouter from "../hooks/useI18nRouter";
import useI18n from "../hooks/useI18n";

export default function Navbar({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLocaleSwitch, setShowLocaleSwitch] = useState(false);
  const langDialog = useRef<HTMLDivElement>(null);
  const scrollLockTarget = useRef<HTMLDivElement>(null);

  const { scrollPosition, scrollDirection } = useScroll();
  const pathname = usePathname();
  const router = useI18nRouter();

  const { t } = useI18n(locale);

  const isHome = pathname == "/";
  const isAboutUs = pathname == "/about-us";
  const isOurWork = pathname == "/our-work";
  const isTeam = pathname == "/team";
  const isLatest = pathname == "/latest";

  useClickOutside(langDialog, () => {
    setShowLocaleSwitch(false);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const onMobileNavbarClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!scrollLockTarget.current) return;
    if (isOpen) {
      disableBodyScroll(scrollLockTarget.current);
    } else {
      enableBodyScroll(scrollLockTarget.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  useEffect(() => {
    const navbar = document.getElementById("navbar") as HTMLElement;

    if (scrollPosition > navbar.offsetHeight) {
      setIsScrolled(true);
      if (scrollDirection == "up") {
        gsap.to(navbar, {
          position: "fixed",
          top: 0,
          duration: 0.3,
        });
      } else if (scrollDirection == "down") {
        gsap.to(navbar, {
          top: -navbar.offsetHeight,
          duration: 0.3,
        });
      }
    } else if (scrollPosition == 0 && !isOpen) {
      setIsScrolled(false);
      gsap.to(navbar, {
        position: "absolute",
        top: 0,
        duration: 0.3,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollDirection, scrollPosition]);

  function onSearch(query: string) {
    router.push(`/search?q=${query}`);
  }

  return (
    <header
      ref={scrollLockTarget}
      id="navbar"
      className={`navbar h-auto absolute transition-colors duration-100 lg:duration-300 will-change-transform left-0 right-0 mx-auto z-50 ${
        isOpen
          ? "bg-design-light h-screen overflow-y-auto"
          : "bg-transparent duration-0"
      } `}
    >
      <nav
        className={`navbar-nav  ${
          isScrolled ? "bg-design-light bg-opacity-70 backdrop-blur-sm" : ""
        }`}
      >
        <div className="page-container flex items-center lg:items-stretch">
          <div
            className={`navbar-brand transition-all duration-300 ease-in-out flex-1 ${
              isScrolled ? "py-2" : "py-3"
            }`}
          >
            <I18nLink
              aria-label="home"
              href="/"
              className={`brand-logo block relative transition-all duration-300 ease-in-out ${
                isScrolled ? "w-24 h-16" : "w-32 h-20"
              } ${isHome ? "active" : ""}`}
            >
              <Logo
                className={`absolute transition-all duration-300 ease-in-out brand-expanded ${
                  isScrolled ? "opacity-0" : "opacity-100"
                }`}
              ></Logo>
              <LogoPinned
                className={`absolute transition-all duration-300 ease-in-out brand-collapsed ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              ></LogoPinned>
            </I18nLink>
          </div>
          <ul className="navbar-menu hidden lg:inline-flex mr-4">
            <li className="flex">
              <I18nLink
                href={"/about-us"}
                className={`flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase px-4 ${
                  isAboutUs ? "active" : ""
                }`}
              >
                <IndicatorIcon className="absolute -ml-4 indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                <div className="text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out">
                  <span>{t("about-us")}</span>
                </div>
              </I18nLink>
              <div></div>
            </li>
            <li className="flex">
              <I18nLink
                href={"/our-work"}
                className={`flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase px-4 ${
                  isOurWork ? "active" : ""
                }`}
              >
                <IndicatorIcon className="absolute -ml-4 indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                <div className="text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out">
                  <span>{t("our-work")}</span>
                </div>
              </I18nLink>
              <div
                className={`overflow-menu bg-design-green absolute left-0 right-0 opacity-0 h-0 overflow-hidden transition-all duration-200 ease-in-out ${
                  isScrolled ? "top-[80px]" : "top-[104px]"
                }`}
              >
                <div className="page-container py-10">
                  <div className="grid grid-cols-3 gap-20">
                    <div className="flex flex-col">
                      <I18nLink
                        href={"/our-work#research-and-analysis"}
                        className="group inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 pb-2"
                      >
                        <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                          {t("research-and-analysis")}
                        </div>
                        <div className="flex items-center justify-center">
                          <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                        </div>
                      </I18nLink>
                      <I18nLink
                        href={"/our-work#public-opinion-research"}
                        className="mt-5 text-white hover:text-[#6ABDC2] text-sm font-normal  uppercase leading-normal"
                      >
                        {t("public-opinion-research")}
                      </I18nLink>
                      <I18nLink
                        href={
                          "/our-work#social-listening-and-osint-investigations"
                        }
                        className="mt-2 text-white hover:text-[#6ABDC2] text-sm font-normal  uppercase leading-normal"
                      >
                        {t("social-listening-osint-investigations")}
                      </I18nLink>
                      <ul className="list-disc ml-4 mt-2">
                        <li className="text-white hover:text-[#6ABDC2] text-sm font-normal  leading-normal">
                          <I18nLink href={"/our-work#issues-and-narratives"}>
                            {t("issues-and-narratives")}
                          </I18nLink>
                        </li>
                        <li className="text-white hover:text-[#6ABDC2] text-sm font-normal  leading-normal">
                          <I18nLink href={"/our-work#platforms-and-apps"}>
                            {t("platforms-and-apps")}
                          </I18nLink>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col">
                      <I18nLink
                        href={"/our-work#reports-and-publications"}
                        className="group inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 pb-2"
                      >
                        <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                          {t("reports-and-publications")}
                        </div>
                        <div className="flex items-center justify-center">
                          <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                        </div>
                      </I18nLink>
                      <I18nLink
                        href={"/our-work#policy"}
                        className="group mt-4 inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 pb-2"
                      >
                        <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                          {t("policy")}
                        </div>
                        <div className="flex items-center justify-center">
                          <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                        </div>
                      </I18nLink>
                    </div>
                    <div className="flex flex-col">
                      <I18nLink
                        href={"/our-work#capacity-building"}
                        className="group inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 pb-2"
                      >
                        <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                          {t("capacity-building")}
                        </div>
                        <div className="flex items-center justify-center">
                          <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                        </div>
                      </I18nLink>
                      <I18nLink
                        href={"/our-work#workshops-and-events"}
                        className="mt-5 text-white hover:text-[#6ABDC2] text-sm font-normal  uppercase leading-normal"
                      >
                        {t("workshops-and-events")}
                      </I18nLink>
                      <I18nLink
                        href={"/our-work#resources-and-tools"}
                        className="mt-2 text-white hover:text-[#6ABDC2] text-sm font-normal  uppercase leading-normal"
                      >
                        {t("external-resources")}
                      </I18nLink>
                      <ul className="list-disc ml-4 mt-2">
                        <li className="text-white hover:text-[#6ABDC2] text-sm font-normal  leading-normal">
                          <I18nLink href={"/our-work#what-we-are-reading"}>
                            {t("what-we-are-reading")}
                          </I18nLink>
                        </li>
                        {/* <li className="text-white hover:text-[#6ABDC2] text-sm font-normal  leading-normal">
                                                    <I18nLink
                                                        href={
                                                            "/our-work#additional-resources"
                                                        }
                                                    >
                                                        Additional Resources
                                                    </I18nLink>
                                                </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex">
              <I18nLink
                href={"/team"}
                className={`flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase px-4 ${
                  isTeam ? "active" : ""
                }`}
              >
                <IndicatorIcon className="absolute -ml-4 indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                <div className="text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out">
                  <span>{t("meet-the-team")}</span>
                </div>
              </I18nLink>
            </li>
            <li className="flex">
              <I18nLink
                href={"/latest"}
                className={`flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase px-4 ${
                  isLatest ? "active" : ""
                }`}
              >
                <IndicatorIcon className="absolute -ml-4 indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                <div className="text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out">
                  <span>{t("latest-updates")}</span>
                </div>
              </I18nLink>
            </li>
          </ul>
          <div className="hidden lg:flex items-center gap-4">
            <Suspense fallback={null}>
              <SearchBar
                autoClean={true}
                placeholder={t("search")}
                onSearch={onSearch}
              ></SearchBar>
            </Suspense>
            <div className="relative h-6">
              <button
                aria-label="Toggle locale switcher"
                onClick={() => setShowLocaleSwitch(!showLocaleSwitch)}
              >
                <GlobeIcon className="w-6 h-6"></GlobeIcon>
              </button>

              <div
                ref={langDialog}
                className={`absolute right-0 mt-2 px-5 py-2 rounded-lg shadow-lg transition-all duration-300 bg-white ${
                  showLocaleSwitch
                    ? "opacity-100 visible"
                    : "opacity-0 collapse"
                }`}
              >
                <I18nSwitcher currentLocale={locale}></I18nSwitcher>
              </div>
            </div>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex-shrink-0 p-2"
          >
            <i className={`menu-icon ${isOpen ? "active" : ""}`}></i>
          </button>
        </div>
      </nav>
      <div
        className={`mobile-menu transition-all duration-300 delay-100 ${
          isOpen ? "opacity-100 visible" : "opacity-0 collapse h-0 delay-0"
        }`}
      >
        <div className="page-container mt-10">
          <Suspense fallback={null}>
            <SearchBar placeholder="Search..." onSearch={onSearch}></SearchBar>
          </Suspense>
          <div className="mt-5 flex flex-col divide-design-cyan border-y-design-cyan border-y divide-y">
            <div className="w-full flex items-center py-4">
              <IndicatorIcon className="fill-design-yellow mr-3"></IndicatorIcon>
              <I18nLink
                onClick={onMobileNavbarClick}
                href={"/about-us"}
                className="text-sm font-medium uppercase text-design-cyan leading-normal"
              >
                {t("about-us")}
              </I18nLink>
            </div>
            <NavbarAccordion
              title={
                <div className="w-full h-full flex items-center py-4">
                  <IndicatorIcon className="fill-design-yellow mr-3"></IndicatorIcon>
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work"}
                    className="text-sm font-medium uppercase text-design-cyan leading-normal"
                  >
                    {t("our-work")}
                  </I18nLink>
                </div>
              }
            >
              <div className=" bg-design-green px-5">
                <div className="flex flex-col">
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work#research-and-analysis"}
                    className="group inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 py-2"
                  >
                    <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                      {t("research-and-analysis")}
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowCircleIcon className="w-8 h-8 stroke-[#6ABDC2]"></ArrowCircleIcon>
                    </div>
                  </I18nLink>
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work#public-opinion-research"}
                    className="mt-5 text-white hover:text-[#6ABDC2] text-sm font-medium  uppercase leading-normal"
                  >
                    {t("public-opinion-research")}
                  </I18nLink>
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work#social-listening-and-osint-investigations"}
                    className="mt-2 text-white hover:text-[#6ABDC2] text-sm font-medium  uppercase leading-normal"
                  >
                    {t("social-listening-osint-investigations")}
                  </I18nLink>
                  <ul className="list-disc ml-4 mt-2">
                    <li className="text-white hover:text-[#6ABDC2] text-sm font-medium  leading-normal">
                      <I18nLink
                        onClick={onMobileNavbarClick}
                        href={"/our-work#issues-and-narratives"}
                      >
                        {t("issues-and-narratives")}
                      </I18nLink>
                    </li>
                    <li className="text-white hover:text-[#6ABDC2] text-sm font-medium  leading-normal">
                      <I18nLink
                        onClick={onMobileNavbarClick}
                        href={"/our-work#platforms-and-apps"}
                      >
                        {t("platforms-and-apps")}
                      </I18nLink>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work#reports-and-publications"}
                    className="group inline-flex items-center border-y border-[#6ABDC2] border-opacity-50 py-2 mt-4"
                  >
                    <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                      {t("reports-and-publications")}
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowCircleIcon className="w-8 h-8 stroke-[#6ABDC2]"></ArrowCircleIcon>
                    </div>
                  </I18nLink>
                </div>
                <div className="flex flex-col">
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work#capacity-building"}
                    className="group inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 py-2"
                  >
                    <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                      {t("capacity-building")}
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowCircleIcon className="w-8 h-8 stroke-[#6ABDC2]"></ArrowCircleIcon>
                    </div>
                  </I18nLink>
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work#workshops-and-events"}
                    className="mt-5 text-white hover:text-[#6ABDC2] text-sm font-medium  uppercase leading-normal"
                  >
                    {t("workshops-and-events")}
                  </I18nLink>
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work#resources-and-tools"}
                    className="mt-2 text-white hover:text-[#6ABDC2] text-sm font-medium  uppercase leading-normal"
                  >
                    {t("external-resources")}
                  </I18nLink>
                  <ul className="list-disc ml-4 mt-2">
                    <li className="text-white hover:text-[#6ABDC2] text-sm font-medium leading-normal">
                      <I18nLink
                        onClick={onMobileNavbarClick}
                        href={"/our-work#what-we-are-reading"}
                      >
                        {t("what-we-are-reading")}
                      </I18nLink>
                    </li>
                    {/* <li className="text-white hover:text-[#6ABDC2] text-sm font-medium  leading-normal">
                                            <I18nLink
                                                href={
                                                    "/our-work#additional-resources"
                                                }
                                            >
                                                Additional Resources
                                            </I18nLink>
                                        </li> */}
                  </ul>
                </div>
                <div className="flex flex-col">
                  <I18nLink
                    onClick={onMobileNavbarClick}
                    href={"/our-work#policy"}
                    className="group mt-4 inline-flex items-center border-t border-[#6ABDC2] border-opacity-50 py-2"
                  >
                    <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                      {t("policy")}
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                    </div>
                  </I18nLink>
                </div>
              </div>
            </NavbarAccordion>
            <div className="w-full flex items-center py-4">
              <IndicatorIcon className="fill-design-yellow mr-3"></IndicatorIcon>
              <I18nLink
                onClick={onMobileNavbarClick}
                href={"/team"}
                className="text-sm font-medium uppercase text-design-cyan leading-normal"
              >
                {t("meet-the-team")}
              </I18nLink>
            </div>
            <div className="w-full flex items-center py-4">
              <IndicatorIcon className="fill-design-yellow mr-3"></IndicatorIcon>
              <I18nLink
                onClick={onMobileNavbarClick}
                href={"/latest"}
                className="text-sm font-medium uppercase text-design-cyan leading-normal"
              >
                {t("latest-updates")}
              </I18nLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
