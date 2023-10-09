import Image from "next/image";
import AbtImg from '@/lib/assets/research.png';

export default function AboutUs() {
    return (
        <div className='grid grid-cols-2 gap-20'>
          <Image priority={true} alt='' src={AbtImg} />
          <div className='flex flex-col self-center'>
            <div className="Headline w-80 text-design-green text-5xl font-semibold leading-10 mb-10">About us</div>
            <div className="IntroductoryText mb-10 w-96 text-neutral-800 text-lg font-normal font-['Avenir'] leading-relaxed">DDIA – operated by and for Latinos and Latin Americans – is a hub for research and interventions geared at strengthening trust and connection between communities and democracy. In an era of tech solutions to tech problems, we center the human experience in research, capacity-building and policy solutions that contribute to healthy information ecosystems necessary for vibrant digital democracies.</div>
            <div className="Rectangle129 w-36 h-11 btn bg-design-green rounded-3xl">
              <div className="Heading w-28 h-9 text-center text-white text-sm font-bold font-['Avenir LT Pro'] leading-loose">More details</div>
            </div>
          </div>
        </div>
    )
}