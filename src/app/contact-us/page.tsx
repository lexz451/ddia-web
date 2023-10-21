import FacebookIcon from '@/lib/assets/facebook.svg';
import InstagramIcon from '@/lib/assets/instagram.svg';
import XIcon from '@/lib/assets/x-twitter.svg';
import LinkedInIcon from '@/lib/assets/linked-in.svg';
import MediumIcon from '@/lib/assets/medium.svg';
import YoutubeIcon from '@/lib/assets/yt.svg';
import ArrowIcon from '@/lib/assets/arrow.svg';
import { Link } from '@lexz451/next-nprogress';
import MailImg from '@/lib/assets/get-involved.png';
import Image from 'next/image';

export default function ContactUs() {
    return (
        <main>
            <section className="pt-[150px]">
                <div className="flex flex-col items-center justify-center my-20">
                    <div className="Headline w-80 text-center text-sky-900 text-6xl font-extrabold font-avenir leading-10">Contact us</div>
                    <div className="IntroductoryText w-96 text-center my-10">
                        <span className="text-design-green text-lg font-medium font-avenir leading-7">Contact us at </span><span className="text-design-green text-lg font-extrabold font-['Avenir'] underline leading-7">info@ddia.org</span>
                        <span className="text-design-green text-lg font-medium font-avenir leading-7"> to explore partnerships or to learn more about our work.</span>
                    </div>
                    <div className="Headline w-28 h-7 text-center text-gray-900 text-base font-medium leading-10">Follow us:</div>
                    <div className="SocialIcons flex gap-3 mt-5">
                        <Link href="#" className='w-8 h-8 bg-design-green rounded-full flex items-center justify-center'>
                            <LinkedInIcon className="w-6 h-6 fill-design-light-green"></LinkedInIcon>
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-design-green rounded-full flex items-center justify-center'>
                            <XIcon className="w-5 h-5 fill-design-light-green"></XIcon>
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-design-green rounded-full flex items-center justify-center'>
                            <MediumIcon className="w-6 h-6 fill-design-light-green"></MediumIcon>
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-design-green rounded-full flex items-center justify-center'>
                            <FacebookIcon className="w-6 h-6 fill-design-light-green"></FacebookIcon>
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-design-green rounded-full flex items-center justify-center'>
                            <YoutubeIcon className="w-6 h-6 fill-design-light-green"></YoutubeIcon>
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-design-green rounded-full flex items-center justify-center'>
                            <InstagramIcon className="w-6 h-6 fill-design-light-green"></InstagramIcon>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='page-container my-10'>
                <div className='bg-design-green md:rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 py-10 md:py-20'>
                    <Image src={MailImg} alt='' className='order-2 md:order-1'></Image>
                    <div className='flex flex-col justify-center order-1 md:order-2'>
                        <div className="Headline w-96 text-design-light-green text-5xl font-extrabold font-avenir leading-10">Our Newsletter</div>
                        <div className="IntroductoryText w-96 text-neutral-100 text-lg font-normal leading-normal my-5">Sign up  to receive our latest research, narrative analysis reports, and event updates.</div>
                        <input placeholder='Name' className='mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                        <input placeholder='Organization' className='mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                        <input placeholder='Title' className='mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                        <div className='block relative w-full mt-4'>
                            <input placeholder='Email' className='rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                            <button className='absolute bg-white rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center'>
                                <ArrowIcon></ArrowIcon>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}