"use client";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScroll from "@/lib/hooks/useScroll";
import gsap from "gsap";
import { MouseEventHandler, useEffect } from "react";
import useI18n from "@/lib/hooks/useI18n";

export default function Navigation({ locale }: { locale: string }) {
  const { t } = useI18n(locale);
  const { scrollPosition, scrollDirection } = useScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section.our-work-section");
    sections.forEach((section) => {
      const sectionId = section.id;
      const button = document.querySelector(`button[data-id="${sectionId}"]`);
      if (!button) return;
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          button?.classList.add("bg-design-green", "text-white");
        },
        onLeaveBack: () => {
          button?.classList.remove("bg-design-green", "text-white");
        },
      });
    });
  }, []);

  useEffect(() => {
    const navigationContainer = document.getElementById("navigation-container");
    if (!navigationContainer) return;

    if (scrollDirection == "down") {
      gsap.to(navigationContainer, {
        top: 0,
        duration: 0.3,
      });
    } else {
      gsap.to(navigationContainer, {
        top: 80,
        duration: 0.3,
      });
    }
  }, [scrollDirection, scrollPosition]);

  const scrollToSection: MouseEventHandler = (e) => {
    const sectionId = (e.target as HTMLElement).getAttribute("data-id");
    gsap.to(window, {
      scrollTo: {
        y: `section#${sectionId}`,
        offsetY: 100,
      },
    });
  };

  return (
    <section
      id="navigation-container"
      className="bg-design-light bg-opacity-70 backdrop-blur-sm sticky max-w-full flex items-center lg:justify-center lg:overflow-x-auto overflow-x-scroll snap-x scroll-px-5 gap-1 lg:gap-0 z-20 py-5 px-5 lg:my-10"
    >
      <button
        onClick={scrollToSection}
        data-id="research-and-analysis"
        className="snap-start max-w-none hover:bg-design-green hover:text-white transition-colors duration-100 min-w-[200px] text-sm border-design-green text-design-green r-btn"
      >
        {t("research-and-analysis")}
      </button>
      <div className="w-8 h-[2px] bg-design-green"></div>
      <button
        onClick={scrollToSection}
        data-id="reports-and-publications"
        className=" hover:bg-design-green hover:text-white transition-colors duration-100 min-w-[200px] text-sm border-design-green text-design-green r-btn"
      >
        {t("reports-and-publications")}
      </button>
      <div className="w-8 h-[2px] bg-design-green"></div>
      <button
        onClick={scrollToSection}
        data-id="capacity-building"
        className="hover:bg-design-green hover:text-white transition-colors duration-100 min-w-[200px] text-sm border-design-green text-design-green r-btn"
      >
        {t("capacity-building")}
      </button>
      <div className="w-8 h-[2px] bg-design-green"></div>
      <button
        onClick={scrollToSection}
        data-id="policy"
        className="hover:bg-design-green hover:text-white transition-colors duration-100 min-w-[200px] text-sm border-design-green text-design-green r-btn"
      >
        {t("policy")}
      </button>
    </section>
  );
}
