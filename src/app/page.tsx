import Image from 'next/image';
import HeroImg from '@/lib/assets/hero-1.png';
import GetInvolved from '@/lib/components/get-involved';
import { getApi } from '@/lib/utils/api';
import LatestUpdates from '@/lib/components/latest-updates';
import OurWork from '@/lib/components/our-work';
import AboutUs from '@/lib/components/about-us';

async function getData() {
  const posts = await getApi('/posts', {
    pagination: {
      limit: 3
    },
    populate: ["feature_media", "post_type"],
    sort: ["publish_date:desc"]
  }, {
    cache: 'no-cache'
  });
  return {
    posts
  };
};

export default async function Home() {

  const { posts: { data: latestPosts } } = await getData();

  return (
    <main className="">
      <section className='Rectangle198 bg-gradient-to-b from-design-light-green to-white pt-[150px] md:pt-[180px]'>
        <div className='page-container grid md:grid-cols-2'>
          <div className='flex flex-col items-start justify-center'>
            <h1 className="Headline text-design-green text-4xl md:text-6xl font-extrabold font-['Avenir']">
              Digital Democracy Institute of the Americas (DDIA)
            </h1>
            <p className="IntroductoryText max-w-prose text-design-dark md:text-xl font-normal font-['Avenir'] leading-7 mt-5">
            The Digital Democracy Institute of the Americas (DDIA) is bringing together insights and actors across the Western Hemisphere to shape a more participatory, inclusive, and resilient digital democracy.
            </p>
            <button className="Rectangle129 r-btn font-normal border-none bg-design-yellow rounded-3xl mt-10 text-design-green">
              Get involved
            </button>
          </div>
          <div>
            <Image priority={true} alt='' src={HeroImg} />
          </div>
        </div>

      </section>
      <section className='page-container my-20'>
        <AboutUs></AboutUs>
      </section>
      <section>
        <OurWork></OurWork>
      </section>
      <GetInvolved></GetInvolved>
      <section className='page-container my-20'>
        <LatestUpdates posts={latestPosts}></LatestUpdates>
      </section>
    </main>
  )
}
