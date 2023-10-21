'use client'

import ArrowCircleIcon from '@/lib/assets/arrow-circle.svg';
import { useIsomorphicLayoutEffect } from '@/lib/hooks/useIsomorphicLayoutEffect';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

export default function Hero() {

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    })

    const scrollToSection = (section: string) => {
        gsap.to(window, {
            scrollTo: {
                autoKill: true,
                y: `section${section}`,
                // offsetY: 50
            }
        })
    }

    return (
        <section className="page-container">
            <div className="flex flex-col items-center px-10 py-20 gradient-green-container rounded-3xl">
                <div className="Headline w-96 text-center text-design-green text-6xl font-extrabold  leading-10">Our work</div>
                <div className="w-96 mt-10 text-center text-design-green text-lg font-normal  leading-relaxed">Our work is explicitly Latino, connects disciplines and regions (the U.S. and Latin America), and addresses the root causes of belief and behavior.</div>
                <div className="grid grid-cols-2 gap-5 mt-10 w-full px-10">
                    <button aria-label='Research and Analysis' onClick={() => scrollToSection('#research-and-analysis')} className="bg-design-green p-8 h-36 rounded-3xl flex items-center">
                        <div className="Headline text-left flex-1 text-white text-3xl font-extrabold  leading-9">Research and Analysis</div>
                        <ArrowCircleIcon className="stroke-design-light-green rotate-90"></ArrowCircleIcon>
                    </button>
                    <button aria-label='Reports and Publications' onClick={() => scrollToSection('#reports-and-publications')} className="bg-design-green p-8 h-36 rounded-3xl flex items-center">
                        <div className="Headline text-left flex-1 text-white text-3xl font-extrabold  leading-9">Reports and Publications</div>
                        <ArrowCircleIcon className="stroke-design-light-green rotate-90"></ArrowCircleIcon>
                    </button>
                    <button aria-label='Capacity Building' onClick={() => scrollToSection('#capacity-building')} className="bg-design-green p-8 h-36 rounded-3xl flex items-center">
                        <div className="Headline text-left flex-1 text-white text-3xl font-extrabold  leading-9">Capacity <br></br> Building</div>
                        <ArrowCircleIcon className="stroke-design-light-green rotate-90"></ArrowCircleIcon>
                    </button>
                    <button aria-label='Policy' onClick={() => scrollToSection('#policy')} className="bg-design-green p-8 h-36 rounded-3xl flex items-center">
                        <div className="Headline text-left flex-1 text-white text-3xl font-extrabold  leading-9">Policy</div>
                        <ArrowCircleIcon className="stroke-design-light-green rotate-90"></ArrowCircleIcon>
                    </button>
                </div>
            </div>
        </section>
    )
}