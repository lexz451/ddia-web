'use client';

import { useGsapWithContext } from "@/lib/hooks/useGsap";
import { useIsomorphicLayoutEffect } from "@/lib/hooks/useIsomorphicLayoutEffect";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScroll from "@/lib/hooks/useScroll";
import gsap  from "gsap";
import { MouseEventHandler } from "react";

export default function Navigation() {
    const { scrollPosition, scrollDirection } = useScroll();


    useIsomorphicLayoutEffect(() => {
        const navigationContainer = document.getElementById('navigation-container');
        if (!navigationContainer) return;

        if (scrollDirection == 'down') {
            navigationContainer.classList.add('top-0');
            navigationContainer.classList.remove('top-20');
        } else {
            navigationContainer.classList.add('top-20');
            navigationContainer.classList.remove('top-0');
        }

    }, [scrollDirection, scrollPosition]);

    useGsapWithContext((g) => {
        g.registerPlugin(ScrollTrigger);
        const sections = g.utils.toArray<HTMLElement>('section.our-work-section');
        sections.forEach((section) => {
            const sectionId = section.id;
            const button = document.getElementById(sectionId);
            ScrollTrigger.create({
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => {
                    button?.classList.add('bg-design-green', 'text-white');
                },
                onLeaveBack: () => {
                    button?.classList.remove('bg-design-green', 'text-white');
                }
            })
        })
    })

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    })

    const scrollToSection: MouseEventHandler = (e) => {
        const sectionId = (e.target as HTMLElement).id;
        gsap.to(window, {
            scrollTo: {
                y: `section#${sectionId}`,
                offsetY: 100
            }
        })
    }

    return (
        <section id="navigation-container" className='bg-design-light bg-opacity-70 backdrop-blur-sm transition-all ease-in-out z-10 duration-500 sticky py-5 my-10'>
            <div className='flex items-center justify-center'>
                <button onClick={scrollToSection} id="research-and-analysis" className='transition-colors duration-150 min-w-[200px] text-sm border-design-green text-design-green r-btn'>
                    Research and Analysis
                </button>
                <div className='w-8 h-[2px] bg-design-green'></div>
                <button onClick={scrollToSection} id="reports-and-publications" className='transition-colors duration-150 min-w-[200px] text-sm border-design-green text-design-green r-btn'>
                    Reports and Publications
                </button>
                <div className='w-8 h-[2px] bg-design-green'></div>
                <button onClick={scrollToSection} id="capacity-building" className='transition-colors duration-150 min-w-[200px] text-sm border-design-green text-design-green r-btn'>
                    Capacity-Building
                </button>
                <div className='w-8 h-[2px] bg-design-green'></div>
                <button onClick={scrollToSection} id="policy" className='transition-colors duration-150 min-w-[200px] text-sm border-design-green text-design-green r-btn'>
                    Policy
                </button>
            </div>
        </section>
    )
}