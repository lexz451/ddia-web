'use client';

import Logo from '@/lib/assets/logo.svg';
import Logo2 from '@/lib/assets/logo-simple.svg';
import ArrowCircleIcon from '@/lib/assets/arrow-circle.svg';
import IndicatorIcon from '@/lib/assets/indicator.svg';
import GlobeIcon from '@/lib/assets/globe-alt.svg';
import SearchIcon from '@/lib/assets/search.svg';
import { useEffect, useState } from 'react';
import useScroll from '../hooks/useScroll';
import { Link } from '@lexz451/next-nprogress';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollPosition, scrollDirection } = useScroll();

    const [bgColor, setBgColor] = useState('bg-transparent' as 'bg-transparent' | 'bg-white' | 'bg-black');

    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') {
            setBgColor('bg-transparent');
        } else {
            setBgColor('bg-white');
        }
    }, [pathname]);

    useEffect(() => {
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

    return (
        <header className={`${bgColor} navbar fixed w-screen top-0 z-50 ease-in-out transition-all duration-500 will-change-transform ${isScrolled ? '-translate-y-full' : ''} ${isScrolled && isVisible ? 'translate-y-0 bg-white bg-opacity-70 backdrop-blur-sm' : ''}`}>
            <nav className="navbar-nav flex items-stretch page-container">
                <div className={`navbar-brand transition-all duration-500 ease-in-out flex-1 ${isScrolled && isVisible ? 'py-2' : 'py-5'}`}>
                    <Link href="/" className={`brand-logo block relative transition-all duration-500 ease-in-out ${isScrolled && isVisible ? 'w-24 h-16' : 'w-32 h-20'}`}>
                        <Logo className={`absolute transition-all duration-500 ease-in-out brand-expanded ${isScrolled && isVisible ? 'opacity-0' : ''}`}></Logo>
                        <Logo2 className={`absolute transition-all duration-500 ease-in-out brand-collapsed opacity-0 ${isScrolled && isVisible ? 'opacity-100' : ''}`}></Logo2>
                    </Link>
                </div>
                <ul className='navbar-menu hidden md:inline-flex gap-5 mr-10'>
                    <li className='flex'>
                        <Link href={'/about-us'} className="flex items-start my-auto text-center text-design-green text-sm font-medium font-['Avenir'] uppercase">
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className='text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out'>
                                <span>About us</span>
                            </div>
                        </Link>
                        <div></div>
                    </li>
                    <li className='flex'>
                        <Link href={'/about-us'} className="flex items-start my-auto text-center text-design-green text-sm font-medium font-['Avenir'] uppercase">
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className='text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out'>
                                <span>Our work</span>
                            </div>
                        </Link>
                        <div className={`overflow-menu bg-design-green absolute left-0 right-0 opacity-0 h-0 overflow-hidden transition-all duration-200 ease-in-out ${isScrolled && isVisible ? 'top-[80px]' : 'top-[120px]'}`}>
                            <div className='page-container py-10'>
                                <div className='grid grid-cols-3 gap-20'>
                                    <div className='flex flex-col'>
                                        <div className='inline-flex items-center border-b border-white border-opacity-50 pb-2'>
                                            <div className="flex-1 text-white text-xl font-semibold leading-10">Research and Analysis</div>
                                            <div className='flex items-center justify-center'>
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white"></ArrowCircleIcon>
                                            </div>
                                        </div>
                                        <div className="mt-5 text-white text-sm font-normal font-['Avenir'] uppercase leading-normal">Public Opinion Research</div>
                                        <div className="mt-2 text-white text-sm font-normal font-['Avenir'] uppercase leading-normal">Social Listening and OSINT Investigations</div>
                                        <ul className='list-disc ml-4 mt-2'>
                                            <li className="text-white text-sm font-normal font-['Avenir'] leading-normal">Issues and Narratives</li>
                                            <li className="text-white text-sm font-normal font-['Avenir'] leading-normal">Platforms and Apps</li>
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
                                            <li className="text-white text-sm font-normal font-['Avenir'] leading-normal">Reports</li>
                                            <li className="text-white text-sm font-normal font-['Avenir'] leading-normal">Resource types</li>
                                        </ul>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='inline-flex items-center border-b border-white border-opacity-50 pb-2'>
                                            <div className="flex-1 text-white text-xl font-semibold leading-10">Capacity Building</div>
                                            <div className='flex items-center justify-center'>
                                                <ArrowCircleIcon className="w-8 h-8 stroke-white"></ArrowCircleIcon>
                                            </div>
                                        </div>
                                        <div className="mt-5 text-white text-sm font-normal font-['Avenir'] uppercase leading-normal">Reports and Publications</div>
                                        <div className="mt-2 text-white text-sm font-normal font-['Avenir'] uppercase leading-normal">Resources & Tools</div>
                                        <ul className='list-disc ml-4 mt-2'>
                                            <li className="text-white text-sm font-normal font-['Avenir'] leading-normal">What We Are Reading</li>
                                            <li className="text-white text-sm font-normal font-['Avenir'] leading-normal">Additional Resources</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className='flex'>
                        <Link href={'/about-us'} className="flex items-start my-auto text-center text-design-green text-sm font-medium font-['Avenir'] uppercase">
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className='text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out'>
                                <span>Meet the team</span>
                            </div>
                        </Link>
                    </li>
                    <li className='flex'>
                        <Link href={'/latest'} className="flex items-start my-auto text-center text-design-green text-sm font-medium font-['Avenir'] uppercase">
                            <IndicatorIcon className="indicator opacity-0 transition-all duration-100 ease-in-out mr-2 mt-1"></IndicatorIcon>
                            <div className='text border-b-2 mt-1 border-transparent transition-all duration-100 ease-in-out'>
                                <span>Latest updates</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <SearchIcon className="w-6 h-6"></SearchIcon>
                    <GlobeIcon className="w-6 h-6"></GlobeIcon>
                </div>
            </nav>
        </header>
    );
};