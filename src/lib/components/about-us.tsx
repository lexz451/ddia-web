import Image from "next/image";
import AbtImg from '@/lib/assets/research.png';
import I18nLink from "./I18nLink";


export default function AboutUs({
    t
}: {
    t: any;
}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
      <Image alt='' src={AbtImg} className="order-2 lg:order-1" sizes="100vw" />
      <div className='flex flex-col items-start self-center w-full order-1 lg:order-2'>
        <div className="Headline text-design-green text-4xl lg:text-5xl font-semibold leading-10 mb-5 lg:mb-10">
            {t('home.about.title')}
        </div>
        <div className="IntroductoryText mb-10 text-neutral-800 lg:text-lg font-normal  leading-relaxed">
            {t('home.about.subtitle')}
        </div>
        <I18nLink href={'/about-us'} className="Rectangle129 r-btn border-none bg-design-green text-white rounded-3xl">
          {t('more-details')}
        </I18nLink>
      </div>
    </div>
  )
}