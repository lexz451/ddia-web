import GetInvolved from '@/lib/components/get-involved';
import LatestUpdates from '@/lib/components/latest-updates';
import OurWork from '@/lib/components/our-work';
import AboutUs from '@/lib/components/about-us';
import { getApi } from '@/lib/utils/api';
import { TPost } from '@/lib/utils/types';
import Hero from '@/lib/components/hero';

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
      <Hero></Hero>
      <section className='page-container my-20'>
        <AboutUs></AboutUs>
      </section>
      <section>
        <OurWork></OurWork>
      </section>
      <GetInvolved></GetInvolved>
      <section className='page-container my-20 pb-footer'>
        <LatestUpdates posts={latestPosts}></LatestUpdates>
      </section>
    </main>
  )
}
