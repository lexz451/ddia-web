import Logo from '@/lib/assets/logo.svg';
import FacebookIcon from '@/lib/assets/facebook.svg';
import InstagramIcon from '@/lib/assets/instagram.svg';
import XIcon from '@/lib/assets/x-twitter.svg';
import ArrowIcon from '../assets/arrow.svg';
import LinkedInIcon from '@/lib/assets/linked-in.svg';
import MediumIcon from '@/lib/assets/medium.svg';
import YoutubeIcon from '@/lib/assets/yt.svg';
import { Link } from '@lexz451/next-nprogress';

export default function Footer() {
    return (
        <footer className='absolute bottom-10 left-0 right-0'>
            <div className="md:page-container">
                <div className="pt-12 md:pb-12 md:px-16 bg-design-dark-green md:rounded-3xl flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 px-5 md:px-0">
                        <div className="mr-10">
                            <Logo className="w-24 h-16 -ml-1"></Logo>
                            <p className="IntroductoryText  mt-8 leading-normal text-sm text-white">
                                The Digital Democracy Institute of the Americas (DDIA) is a fiscally sponsored project of Equis Institute, a 501(c)(3) organization.
                            </p>
                            <div className="SocialIcons flex gap-3 mt-10">
                                <Link href="#" className='w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center'>
                                    <LinkedInIcon className="w-6 h-6 fill-black"></LinkedInIcon>
                                </Link>
                                <Link href="#" className='w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center'>
                                    <XIcon className="w-5 h-5 fill-black"></XIcon>
                                </Link>
                                <Link href="#" className='w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center'>
                                    <MediumIcon className="w-6 h-6 fill-black"></MediumIcon>
                                </Link>
                                <Link href="#" className='w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center'>
                                    <FacebookIcon className="w-6 h-6 fill-black"></FacebookIcon>
                                </Link>
                                <Link href="#" className='w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center'>
                                    <YoutubeIcon className="w-6 h-6 fill-black"></YoutubeIcon>
                                </Link>
                                <Link href="#" className='w-8 h-8 bg-design-light-green rounded-full flex items-center justify-center'>
                                    <InstagramIcon className="w-6 h-6 fill-black"></InstagramIcon>
                                </Link>

                            </div>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr] gap-x-5 gap-y-5'>
                            <div className="FootersColumn flex-col justify-start items-start gap-3 inline-flex mt-5">
                                <div className="Heading self-stretch text-design-light-green text-[0.8rem] font-semibold  uppercase leading-tight mb-2">About Us</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Mission / Vision</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Our Approach</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Core Strategies</div>
                            </div>
                            <div className="FootersColumn flex-col justify-start items-start gap-3 inline-flex mt-5">
                                <div className="Heading self-stretch text-design-light-green text-[0.8rem] font-semibold  uppercase leading-tight mb-2">Our Work</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Research and Analysis</div>
                                <ul className="list-disc ml-6 text-design-light-green w-full">
                                    <li>
                                        <div className="Text text-design-light-green text-sm font-normal font-avenir leading-normal">Public Opinion Research</div>
                                    </li>
                                    <li className='mt-3'>
                                        <div className="Text w-44 text-design-light-green text-sm font-normal font-avenir leading-normal">Social Listening and <br /> OSINT Investigations</div>
                                    </li>
                                </ul>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Reports and Publications</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Capacity Building</div>
                                <ul className="list-disc ml-6 text-design-light-green w-full">
                                    <li>
                                        <div className="Text text-design-light-green text-sm font-normal font-avenir leading-normal">Workshops & Events</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="FootersColumn flex-col justify-start items-start gap-3 inline-flex mt-5">
                                <div className="Heading self-stretch text-design-light-green text-[0.8rem] font-semibold  uppercase leading-tight mb-2">Latest Updates</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Announcements</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Blog</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">In the News</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Resources</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Events</div>
                            </div>
                            <div className="FootersColumn flex-col justify-start items-start gap-3 inline-flex mt-5">
                                <div className="Heading self-stretch text-design-light-green text-[0.8rem] font-semibold  uppercase leading-tight mb-2">DIA</div>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Get involved</div>
                                <Link href={'/faq'} className="Text text-gray-300 text-sm font-normal  leading-normal">FAQs</Link>
                                <div className="Text text-gray-300 text-sm font-normal font-avenir leading-normal">Meet the team</div>
                            </div>
                        </div>
                    </div>
                    <div className="Subscribe border-y border-white border-opacity-20 mt-10 md:mt-14 px-5 md:px-0">
                        <div className="Content py-8 grid md:grid-cols-2 gap-8">
                            <div className="Cta flex-col justify-start items-start gap-2 inline-flex">
                                <div className="Heading self-stretch text-gray-400 text-sm font-semibold  uppercase leading-tight tracking-wide">Subscribe to our newsletter</div>
                                <div className="SupportingText text-gray-300 text-base font-normal  leading-normal">
                                    Subscribe to receive updates and research from DDIA.
                                </div>
                            </div>
                            <div className="FootersSubscribeForm grid md:grid-cols-2 gap-4">
                                <input placeholder='Name' className='rounded-3xl px-4 bg-transparent border border-design-light-green h-12 placeholder:text-design-light-green text-white text-sm'></input>
                                <div className='block relative'>
                                    <input placeholder='Email' className='rounded-3xl px-4 bg-transparent border border-design-light-green h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                                    <button className='absolute bg-white rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center'>
                                        <ArrowIcon></ArrowIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 mt-5 flex md:flex-row flex-col md:items-center justify-between">
                        <div className="IntroductoryText text-black md:text-neutral-100 mt-5 md:mt-0 py-2 bg-white md:bg-transparent text-center md:text-left order-2 md:order-1">
                            <span className=" text-sm font-normal leading-7">Website designed and developed by </span>
                            <span className=" text-sm font-bold leading-7">W.LAND</span>
                        </div>
                        <div className="order-1 md:order-2 Copyright text-center md:text-right text-gray-400 text-sm font-normal font-avenir uppercase leading-normal">Privacy Policy  |  Terms of Use  |  Cookie Policy</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}