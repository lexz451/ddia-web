import Image from 'next/image';
import HeroImg from '@/lib/assets/hero-1.png';
import GetInvolved from '@/lib/components/get-involved';

export default function Home() {
  return (
    <main className="">
      <section className='Rectangle198 min-h-screen bg-gradient-to-b from-design-light-green to-white pt-[120px]'>
        <div className='container mx-auto grid grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <h1 className="Headline text-design-green text-6xl font-extrabold font-['Avenir']">Hero Banner with <br />Eye-Catching Image and CTA</h1>
            <p className="IntroductoryText max-w-prose text-design-dark text-xl font-normal font-['Avenir'] leading-7 mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
            <button className="Rectangle129 w-40 h-11 bg-design-yellow rounded-3xl border mt-10 text-design-green">
              Get involved
            </button>
          </div>
          <div>
            <Image alt='' src={HeroImg} />
          </div>
        </div>

      </section>
      <section>
        <GetInvolved></GetInvolved>
      </section>
    </main>
  )
}
