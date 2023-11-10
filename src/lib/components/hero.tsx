import Image from "next/image";
import HeroImg from '@/lib/assets/hero-1.png';
import I18nLink from "./I18nLink";

export default function Hero({
    t
}: {
    t: any;
}) {

  return (
    <section className='gradient-green-page pt-[150px] lg:pt-[180px]'>
      <div className='page-container grid lg:grid-cols-2'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className="Headline text-design-green text-4xl lg:text-6xl font-extrabold ">
            {/* Digital Democracy Institute of the Americas (DDIA) */}
            {t('home.hero.title')}
          </h1>
          <p className="IntroductoryText max-w-prose text-design-dark lg:text-xl font-normal  leading-7 mt-5">
            {/* The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy. */}
            {t('home.hero.subtitle')}
          </p>
          <I18nLink href={'/get-involved'} className="Rectangle129 r-btn border-none bg-design-yellow bg-opacity-95 rounded-3xl mt-10 text-design-green">
            Get Involved
          </I18nLink>
        </div>
        <div>
          <Image priority={true} alt='hero' src={HeroImg} />
        </div>
      </div>
    </section>
  );
}