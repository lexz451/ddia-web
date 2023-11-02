"use client";

import Logo from "@/lib/assets/logo.svg";
import LogoPinned from "@/lib/assets/logo-simple.svg";
import ArrowCircleIcon from "@/lib/assets/arrow-circle.svg";
import IndicatorIcon from "@/lib/assets/indicator.svg";
import GlobeIcon from "@/lib/assets/globe-alt.svg";
import SearchIcon from "@/lib/assets/search.svg";
import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";
import { Link } from "@lexz451/next-nprogress";
import { usePathname } from "next/navigation";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollPosition, scrollDirection } = useScroll();
    const pathname = usePathname();

    const isHome = pathname == "/";
    const isAboutUs = pathname == "/about-us";
    const isOurWork = pathname == "/our-work";
    const isTeam = pathname == "/team";
    const isLatest = pathname == "/latest";

    useEffect(() => {
        const navbar = document.getElementById("navbar") as HTMLElement;
        if (scrollPosition > navbar.offsetHeight) {
            setIsScrolled(true);
            if (scrollDirection == "up") {
                // setIsVisible(true);
                gsap.to(navbar, {
                    position: "fixed",
                    top: 0,
                    duration: 0.3,
                    // ease: Power2.easeOut
                });
            } else if (scrollDirection == "down") {
                // setIsVisible(false);
                gsap.to(navbar, {
                    top: -navbar.offsetHeight,
                    duration: 0.3,
                    // ease: Power2.easeOut
                });
            }
        } else if (scrollPosition == 0) {
            setIsScrolled(false);
            gsap.to(navbar, {
                position: "absolute",
                top: 0,
                duration: 0.3,
                // ease: Power2.easeOut
            });
        }
    }, [scrollDirection, scrollPosition]);

    useIsomorphicLayoutEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(max-width: 767px)", () => {
            gsap.to("#menu-icon", {
                duration: 1,
                rotation: isOpen ? 180 : 0,
            });
        });
    }, [isOpen]);

    return (
        <header
            id="navbar"
            className={`navbar absolute transition-colors duration-300 will-change-transform left-0 right-0 w-screen z-50 ${
                isScrolled
                    ? "bg-design-light bg-opacity-70 backdrop-blur-sm"
                    : `bg-transparent`
            }`}
        >
            <nav className="navbar-nav flex items-center lg:items-stretch page-container">
                <div
                    className={`navbar-brand transition-all duration-300 ease-in-out flex-1 ${
                        isScrolled ? "py-2" : "py-3"
                    }`}
                >
                    <Link
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
                    </Link>
                </div>
                <ul className="navbar-menu hidden lg:inline-flex mr-10">
                    <li className="flex">
                        <Link
                            href={"/about-us"}
                            className={`flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase px-4 ${
                                isAboutUs ? "active" : ""
                            }`}
                        >
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className="text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out">
                                <span>About us</span>
                            </div>
                        </Link>
                        <div></div>
                    </li>
                    <li className="flex">
                        <Link
                            href={"/our-work"}
                            className={`flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase px-4 ${
                                isOurWork ? "active" : ""
                            }`}
                        >
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className="text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out">
                                <span>Our work</span>
                            </div>
                        </Link>
                        <div
                            className={`overflow-menu bg-design-green absolute left-0 right-0 opacity-0 h-0 overflow-hidden transition-all duration-200 ease-in-out ${
                                isScrolled ? "top-[80px]" : "top-[104px]"
                            }`}
                        >
                            <div className="page-container py-10">
                                <div className="grid grid-cols-3 gap-20">
                                    <div className="flex flex-col">
                                        <Link
                                            href={
                                                "/our-work#research-and-analysis"
                                            }
                                            className="group inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 pb-2"
                                        >
                                            <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                                                Research and Analysis
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                                            </div>
                                        </Link>
                                        <Link
                                            href={
                                                "/our-work#public-opinion-research"
                                            }
                                            className="mt-5 text-white hover:text-[#6ABDC2] text-sm font-normal  uppercase leading-normal"
                                        >
                                            Public Opinion Research
                                        </Link>
                                        <Link
                                            href={
                                                "/our-work#social-listening-and-osint-investigations"
                                            }
                                            className="mt-2 text-white hover:text-[#6ABDC2] text-sm font-normal  uppercase leading-normal"
                                        >
                                            Social Listening and OSINT
                                            Investigations
                                        </Link>
                                        <ul className="list-disc ml-4 mt-2">
                                            <li className="text-white hover:text-[#6ABDC2] text-sm font-normal  leading-normal">
                                                <Link
                                                    href={
                                                        "/our-work#issues-and-narratives"
                                                    }
                                                >
                                                    Issues and Narratives
                                                </Link>
                                            </li>
                                            <li className="text-white hover:text-[#6ABDC2] text-sm font-normal  leading-normal">
                                                <Link
                                                    href={
                                                        "/our-work#platforms-and-apps"
                                                    }
                                                >
                                                    Platforms and Apps
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col">
                                        <Link
                                            href={
                                                "/our-work#reports-and-publications"
                                            }
                                            className="group inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 pb-2"
                                        >
                                            <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                                                Reports and Publications
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                                            </div>
                                        </Link>
                                        <Link
                                            href={"/our-work#policy"}
                                            className="group mt-4 inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 pb-2"
                                        >
                                            <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                                                Policy
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col">
                                        <Link
                                            href={"/our-work#capacity-building"}
                                            className="group inline-flex items-center border-b border-[#6ABDC2] border-opacity-50 pb-2"
                                        >
                                            <div className="flex-1 text-white group-hover:text-[#6ABDC2] text-xl font-semibold leading-10">
                                                Capacity Building
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white group-hover:stroke-[#6ABDC2]"></ArrowCircleIcon>
                                            </div>
                                        </Link>
                                        <Link
                                            href={
                                                "/our-work#workshops-and-events"
                                            }
                                            className="mt-5 text-white hover:text-[#6ABDC2] text-sm font-normal  uppercase leading-normal"
                                        >
                                            Workshops & Events
                                        </Link>
                                        <Link
                                            href={
                                                "/our-work#resources-and-tools"
                                            }
                                            className="mt-2 text-white hover:text-[#6ABDC2] text-sm font-normal  uppercase leading-normal"
                                        >
                                            Resources & Tools
                                        </Link>
                                        <ul className="list-disc ml-4 mt-2">
                                            <li className="text-white hover:text-[#6ABDC2] text-sm font-normal  leading-normal">
                                                <Link href={"/our-work#what-we-are-reading"}>
                                                    What We Are Reading
                                                </Link>
                                            </li>
                                            <li className="text-white hover:text-[#6ABDC2] text-sm font-normal  leading-normal">
                                                <Link href={"/our-work#additional-resources"}>
                                                    Additional Resources
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <Link
                            href={"/team"}
                            className={`flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase px-4 ${
                                isTeam ? "active" : ""
                            }`}
                        >
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className="text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out">
                                <span>Meet the team</span>
                            </div>
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            href={"/latest"}
                            className={`flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase px-4 ${
                                isLatest ? "active" : ""
                            }`}
                        >
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className="text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out">
                                <span>Latest updates</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex-shrink-0 p-2"
                >
                    <i className={`menu-icon ${isOpen ? "active" : ""}`}></i>
                </button>
                <div className="hidden lg:flex items-center gap-4">
                    <SearchIcon className="w-6 h-6"></SearchIcon>
                    <GlobeIcon className="w-6 h-6"></GlobeIcon>
                </div>
            </nav>
        </header>
    );
}
