import Image from 'next/image';
import HeroImg from '@/lib/assets/hero-1.png';
import GetInvolved from '@/lib/components/get-involved';
import LatestUpdates from '@/lib/components/latest-updates';
import OurWork from '@/lib/components/our-work';
import AboutUs from '@/lib/components/about-us';
import { getApi } from '@/lib/utils/api';
import { TPost } from '@/lib/utils/types';

async function fetchData() {
  const { data: posts } = await getApi<TPost[]>('/posts', {
    pagination: {
      limit: 3
    },
    populate: ["feature_media", "post_type", "authors"],
    sort: ['publish_date:desc']
  });
  return {
    posts
  }
}

export default async function Home() {

  const { posts: latestPosts } = await fetchData();

  return (
    <main>
      <section className='gradient-green-page pt-[150px] lg:pt-[180px]'>
        <div className='page-container grid lg:grid-cols-2'>
          <div className='flex flex-col items-start justify-center'>
            <h1 className="Headline text-design-green text-4xl lg:text-6xl font-extrabold ">
              Digital Democracy Institute of the Americas (DDIA)
            </h1>
            <p className="IntroductoryText max-w-prose text-design-dark lg:text-xl font-normal  leading-7 mt-5">
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
