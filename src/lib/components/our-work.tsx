"use client";
import SearchIcon from '@/lib/assets/search-2.svg';
import { useGsapWithContext } from '@/hooks/useGsap';



export default function OurWork() {

    useGsapWithContext((gsap) => {
        const wrapper = document.querySelector(".our-work-container-wrapper") as HTMLDivElement;
        const container = document.querySelector(".our-work-container") as HTMLDivElement;
        const containerOffset = container?.offsetLeft;
        const scroller = document.querySelector(".scroller") as HTMLDivElement;
        gsap.to(scroller, {
            x: () => (wrapper?.offsetWidth - scroller?.offsetWidth - (containerOffset * 2) - 32),
            scrollTrigger: {
                trigger: ".our-work-container",
                pin: true,
                invalidateOnRefresh: true,
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: true,
                onUpdate: (self) => {
                    console.log(self.progress);
                    console.log(scroller.offsetWidth);
                    console.log(wrapper.offsetWidth);
                    console.log(containerOffset);
                }
            }
        });
    })

    return (
        <div className='our-work-container-wrapper w-screen overflow-hidden'>
            <div className='our-work-container page-container'>
                <div className='flex items-center h-full'>
                    <div className={`scroller grid grid-flow-col auto-cols-[35vw] gap-20`}>
                        <div className='self-center'>
                            <div>
                                <div className="Headline text-design-green text-5xl font-extrabold font-['Avenir'] leading-10 mb-10">Our work</div>
                                <div className="IntroductoryText max-w-prose text-neutral-800 text-lg font-normal font-['Avenir'] leading-relaxed mb-10">DDIA is using every tool in our toolbox (public opinion research, narrative analysis, testing, capacity building and policy) to help Latinos live a healthy digital life. We do so by fostering research and an exchange of ideas across disciplines, leaders, and countries; by guiding interventions that serve our communities in the U.S. and across the Americas; and by centering Latinos and Latin Americans in policy conversations about the future of the digital information ecosystem.</div>
                                <div className="Rectangle129 w-36 h-11 btn rounded-3xl bg-design-green">
                                    <div className="Heading w-28 h-9 text-center text-white text-sm font-bold font-['Avenir LT Pro'] leading-loose">More details</div>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-[40rem] max-h-[40rem] h-full rounded-3xl bg-gradient-to-tr from-design-light-green to-white p-20'>
                            <SearchIcon className="mb-10"></SearchIcon>
                            <div className="mb-10 Headline text-design-dark-green text-4xl font-extrabold font-['Avenir'] leading-9">Research and Analysis</div>
                            <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal font-['Avenir'] leading-relaxed">DDIA uses narrative analysis, open source investigations, public opinion research, and information-sharing between disciplines across the Americas to deepen understanding of Latinos and information landscapes in the US and Latin America.</div>
                            <div className='flex items-center mt-4'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z" fill="#fafafa" />
                                </svg>
                                <div className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose">Read more</div>
                            </div>
                        </div>
                        <div className='max-w-[40rem] max-h-[40rem] h-full rounded-3xl bg-gradient-to-tr from-design-light-green to-white p-20'>
                            <SearchIcon className="mb-10"></SearchIcon>
                            <div className="mb-10 Headline text-design-dark-green text-4xl font-extrabold font-['Avenir'] leading-9">Reports and Publications</div>
                            <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal font-['Avenir'] leading-relaxed">
                                DDIA&apos;s reports and publications contribute to the development of a set of theories on what is unique to Latinos and Latin Americans when it comes to information disorder online.
                            </div>
                            <div className='flex items-center mt-4'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z" fill="#fafafa" />
                                </svg>
                                <div className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose">Read more</div>
                            </div>
                        </div>
                        <div className='max-w-[40rem] max-h-[40rem] h-full rounded-3xl bg-gradient-to-tr from-design-light-green to-white p-20'>
                            <SearchIcon className="mb-10"></SearchIcon>
                            <div className="mb-10 Headline text-design-dark-green text-4xl font-extrabold font-['Avenir'] leading-9">Capacity Building</div>
                            <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal font-['Avenir'] leading-relaxed">
                                DDIA is working to strengthen a healthier internet by applying research to practical solutions and interventions that reflect and serve the needs of Latino communities.
                            </div>
                            <div className='flex items-center mt-4'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z" fill="#fafafa" />
                                </svg>
                                <div className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose">Read more</div>
                            </div>
                        </div>
                        <div className='max-w-[40rem] max-h-[40rem] h-full rounded-3xl bg-gradient-to-tr from-design-light-green to-white p-20'>
                            <SearchIcon className="mb-10"></SearchIcon>
                            <div className="mb-10 Headline text-design-dark-green text-4xl font-extrabold font-['Avenir'] leading-9">Policy</div>
                            <div className="mb-10 IntroductoryText max-w-prose text-neutral-800 text-lg font-normal font-['Avenir'] leading-relaxed">
                                DDIA is working to strengthen a healthier internet by applying research to practical solutions and interventions that reflect and serve the needs of Latino communities.
                            </div>
                            <div className='flex items-center mt-4'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z" fill="#fafafa" />
                                </svg>
                                <div className="Heading ml-2 text-design-green underline text-sm font-bold font-avenir leading-loose">Read more</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


