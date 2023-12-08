import Image from "next/image";
import HeroImg from '@/lib/assets/hero-1.png';
import I18nLink from "./I18nLink";

export default function Hero({
    t,
    translations
}: {
    t: any;
    translations: any;
}) {

  return (
    <section className='gradient-green-page pt-[150px] lg:pt-[180px]'>
      <div className='page-container grid lg:grid-cols-2'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className="Headline text-design-green text-4xl lg:text-6xl font-extrabold ">
            {translations?.hero?.title}
          </h1>
          <p className="IntroductoryText max-w-prose text-design-dark lg:text-xl font-normal  leading-7 mt-5">
            {translations?.hero?.subtitle}
          </p>
          <I18nLink href={'/get-involved'} className="Rectangle129 r-btn border-none bg-design-yellow bg-opacity-95 rounded-3xl mt-10 text-design-green">
            {t('get-involved')}
          </I18nLink>
        </div>
        <div>
          <Image priority={true} alt='hero' sizes="100vw" src={HeroImg} />
        </div>
      </div>
    </section>
  );
}