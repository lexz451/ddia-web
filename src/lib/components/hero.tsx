'use client';

import Image from "next/image";
import HeroImg from '@/lib/assets/hero-1.png';
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Hero() {

  const scrollToForm = () => {
    gsap.registerPlugin(ScrollToPlugin)
    gsap.to(window, { scrollTo: { y: "section#get-involved" } });
  }

  return (
    <section className='gradient-green-page pt-[150px] lg:pt-[180px]'>
      <div className='page-container grid lg:grid-cols-2'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className="Headline text-design-green text-4xl lg:text-6xl font-extrabold ">
            Digital Democracy Institute of the Americas (DDIA)
          </h1>
          <p className="IntroductoryText max-w-prose text-design-dark lg:text-xl font-normal  leading-7 mt-5">
            The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.
          </p>
          <button onClick={scrollToForm} className="Rectangle129 r-btn border-none bg-design-yellow rounded-3xl mt-10 text-design-green">
            Get involved
          </button>
        </div>
        <div>
          <Image priority={true} alt='hero' src={HeroImg} />
        </div>
      </div>
    </section>
  );
}