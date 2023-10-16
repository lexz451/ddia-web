import Image from "next/image";
import AbtImg from '@/lib/assets/research.png';

export default function AboutUs() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20'>
      <Image priority={true} alt='' src={AbtImg} className="order-2 md:order-1" />
      <div className='flex flex-col items-start self-center w-full order-1 md:order-2'>
        <div className="Headline text-design-green text-4xl md:text-5xl font-semibold leading-10 mb-5 md:mb-10">About us</div>
        <div className="IntroductoryText mb-10 text-neutral-800 md:text-lg font-normal font-['Avenir'] leading-relaxed">
          DDIA – operated by and for Latinos and Latin Americans – is a hub for research and interventions geared at strengthening trust and connection between communities and democracy. In an era of tech solutions to tech problems, we center the human experience in research, capacity-building and policy solutions that contribute to healthy information ecosystems necessary for vibrant digital democracies.
        </div>
        <div className="Rectangle129 r-btn border-none bg-design-green text-white rounded-3xl">
          More details
        </div>
      </div>
    </div>
  )
}