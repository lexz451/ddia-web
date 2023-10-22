'use client';

import Logo from '@/lib/assets/logo.svg';
import Logo2 from '@/lib/assets/logo-simple.svg';
import ArrowCircleIcon from '@/lib/assets/arrow-circle.svg';
import IndicatorIcon from '@/lib/assets/indicator.svg';
import GlobeIcon from '@/lib/assets/globe-alt.svg';
import SearchIcon from '@/lib/assets/search.svg';
import { useState } from 'react';
import useScroll from '../hooks/useScroll';
import { Link } from '@lexz451/next-nprogress';
import { usePathname } from 'next/navigation';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollPosition, scrollDirection } = useScroll();

    const [bgColor, setBgColor] = useState('bg-transparent' as 'bg-transparent' | 'bg-design-light');

    const pathname = usePathname();

    const transparentBg = ['/', '/about-us', '/our-work', '/faq', '/team'];

    useIsomorphicLayoutEffect(() => {
        if (transparentBg.includes(pathname)) {
            setBgColor('bg-transparent');
        } else {
            setBgColor('bg-design-light');
        }
    }, [pathname]);

    useIsomorphicLayoutEffect(() => {
        if (scrollDirection === 'up' || scrollPosition < 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        if (scrollPosition > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [scrollDirection, scrollPosition]);

    useIsomorphicLayoutEffect(() => {
        const mm = gsap.matchMedia();
        mm.add('(max-width: 767px)', () => {
            gsap.to('#menu-icon', {
                duration: 1,
                rotation: isOpen ? 180 : 0,
            });
        })
    }, [isOpen]);


    return (
        <header className={`navbar fixed top-0 w-screen z-50 ease-in-out transition-all duration-500 will-change-transform ${isScrolled ? '-translate-y-full' : ''} ${isScrolled && isVisible ? `translate-y-0 bg-design-light bg-opacity-70 backdrop-blur-sm` : `${bgColor}`}`}>
            <nav className="navbar-nav flex items-center lg:items-stretch page-container">
                <div className={`navbar-brand transition-all duration-500 ease-in-out flex-1 ${isScrolled && isVisible ? 'py-2' : 'py-3'}`}>
                    <Link href="/" className={`brand-logo block relative transition-all duration-500 ease-in-out ${isScrolled && isVisible ? 'w-24 h-16' : 'w-32 h-20'}`}>
                        <Logo className={`absolute transition-all duration-500 ease-in-out brand-expanded ${isScrolled && isVisible ? 'opacity-0' : ''}`}></Logo>
                        <Logo2 className={`absolute transition-all duration-500 ease-in-out brand-collapsed opacity-0 ${isScrolled && isVisible ? 'opacity-100' : ''}`}></Logo2>
                    </Link>
                </div>
                <ul className='navbar-menu hidden lg:inline-flex gap-5 mr-10'>
                    <li className='flex'>
                        <Link href={'/about-us'} className="flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase">
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className='text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out'>
                                <span>About us</span>
                            </div>
                        </Link>
                        <div></div>
                    </li>
                    <li className='flex'>
                        <Link href={'/our-work'} className="flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase">
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className='text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out'>
                                <span>Our work</span>
                            </div>
                        </Link>
                        <div className={`overflow-menu bg-design-green absolute left-0 right-0 opacity-0 h-0 overflow-hidden transition-all duration-200 ease-in-out ${isScrolled && isVisible ? 'top-[80px]' : 'top-[104px]'}`}>
                            <div className='page-container py-10'>
                                <div className='grid grid-cols-3 gap-20'>
                                    <div className='flex flex-col'>
                                        <div className='inline-flex items-center border-b border-white border-opacity-50 pb-2'>
                                            <div className="flex-1 text-white text-xl font-semibold leading-10">Research and Analysis</div>
                                            <div className='flex items-center justify-center'>
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white"></ArrowCircleIcon>
                                            </div>
                                        </div>
                                        <div className="mt-5 text-white text-sm font-normal  uppercase leading-normal">Public Opinion Research</div>
                                        <div className="mt-2 text-white text-sm font-normal  uppercase leading-normal">Social Listening and OSINT Investigations</div>
                                        <ul className='list-disc ml-4 mt-2'>
                                            <li className="text-white text-sm font-normal  leading-normal">Issues and Narratives</li>
                                            <li className="text-white text-sm font-normal  leading-normal">Platforms and Apps</li>
                                        </ul>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='inline-flex items-center border-b border-white border-opacity-50 pb-2'>
                                            <div className="flex-1 text-white text-xl font-semibold leading-10">Reports and Publications</div>
                                            <div className='flex items-center justify-center'>
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white"></ArrowCircleIcon>
                                            </div>
                                        </div>
                                        <ul className='list-disc ml-4 mt-5'>
                                            <li className="text-white text-sm font-normal  leading-normal">Reports</li>
                                            <li className="text-white text-sm font-normal  leading-normal">Resource types</li>
                                        </ul>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='inline-flex items-center border-b border-white border-opacity-50 pb-2'>
                                            <div className="flex-1 text-white text-xl font-semibold leading-10">Capacity Building</div>
                                            <div className='flex items-center justify-center'>
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white"></ArrowCircleIcon>
                                            </div>
                                        </div>
                                        <div className="mt-5 text-white text-sm font-normal  uppercase leading-normal">Reports and Publications</div>
                                        <div className="mt-2 text-white text-sm font-normal  uppercase leading-normal">Resources & Tools</div>
                                        <ul className='list-disc ml-4 mt-2'>
                                            <li className="text-white text-sm font-normal  leading-normal">What We Are Reading</li>
                                            <li className="text-white text-sm font-normal  leading-normal">Additional Resources</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className='flex'>
                        <Link href={'/team'} className="flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase">
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className='text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out'>
                                <span>Meet the team</span>
                            </div>
                        </Link>
                    </li>
                    <li className='flex'>
                        <Link href={'/latest'} className="flex items-start my-auto text-center text-design-green text-sm font-medium  uppercase">
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className='text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out'>
                                <span>Latest updates</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden flex-shrink-0 p-2'>
                    <i className={`menu-icon ${isOpen ? 'active': ''}`}></i>
                </button>
                <div className='hidden lg:flex items-center gap-4'>
                    <SearchIcon className="w-6 h-6"></SearchIcon>
                    <GlobeIcon className="w-6 h-6"></GlobeIcon>
                </div>
            </nav>
        </header>
    );
};