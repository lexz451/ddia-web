import IndicatorIcon from '@/lib/assets/indicator.svg';
import ArrowCircleIcon from '@/lib/assets/arrow-circle.svg';
import TestImg from '@/lib/assets/tecnologia-fondo-toque-humano-nueva-version-moderna-creacion-adan-11.png';
import Image from 'next/image';

export default function CapacityBuilding() {
    return (
        <section id="capacity-building" className='our-work-section gradient-cyan-section'>
            <div className="page-container py-20">
                <div className='flex flex-col items-center'>
                    <IndicatorIcon className="fill-white w-4 h-4"></IndicatorIcon>
                    <div className="Headline mt-10 text-center text-design-light-yellow text-6xl font-extrabold font-['Avenir'] leading-10">Capacity Building</div>
                    <div className="IntroductoryText mt-8 max-w-prose text-center text-stone-50 text-lg font-normal font-['Avenir'] leading-relaxed">DDIA is working to strengthen a healthier internet by applying research to practical solutions and interventions that reflect and serve the needs of Latino communities. <br /><br />We use our research to guide those working directly with communities on framing of narratives, inoculation exercises, depolarization workshops, media and digital literacy training, or other interventions. We also connect what has worked in one context to other contexts.</div>
                    <div className='flex items-center gap-10 my-20 w-full'>
                        <div className='flex-1 h-[1px] bg-design-light bg-opacity-50'></div>
                        <div className="IntroductoryText text-center text-design-light text-3xl font-extrabold font-['Avenir'] leading-7">Workshops & Events</div>
                        <div className='flex-1 h-[1px] bg-design-light bg-opacity-50'></div>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <div className="Rectangle267 p-10 gap-10 w-full bg-white bg-opacity-40 rounded-2xl flex items-center">
                            <div className='flex-1'>
                                <div className="SupportingText text-sky-900 text-base font-normal leading-tight">Mar 16, 2020</div>
                                <div className="Headline mt-1 text-gray-900 text-2xl font-extrabold font-['Avenir']">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                            </div>
                            <ArrowCircleIcon className="stroke-black"></ArrowCircleIcon>
                        </div>
                        <div className="Rectangle267 p-10 gap-10 w-full bg-white bg-opacity-40 rounded-2xl flex items-center">
                            <div className='flex-1'>
                                <div className="SupportingText text-sky-900 text-base font-normal leading-tight">Mar 16, 2020</div>
                                <div className="Headline mt-1 text-gray-900 text-2xl font-extrabold font-['Avenir']">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                            </div>
                            <ArrowCircleIcon className="stroke-black"></ArrowCircleIcon>
                        </div>
                        <div className="Rectangle267 p-10 gap-10 w-full bg-white bg-opacity-40 rounded-2xl flex items-center">
                            <div className='flex-1'>
                                <div className="SupportingText text-sky-900 text-base font-normal leading-tight">Mar 16, 2020</div>
                                <div className="Headline mt-1 text-gray-900 text-2xl font-extrabold font-['Avenir']">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                            </div>
                            <ArrowCircleIcon className="stroke-black"></ArrowCircleIcon>
                        </div>
                    </div>
                    <button className='r-btn border-none text-white bg-design-green mt-10'>See all</button>
                    <div className='flex items-center gap-10 my-20 w-full'>
                        <div className='flex-1 h-[1px] bg-design-green bg-opacity-50'></div>
                        <div className="IntroductoryText text-center text-design-green text-3xl font-extrabold font-['Avenir'] leading-7">
                            Resources & Tools
                        </div>
                        <div className='flex-1 h-[1px] bg-design-green bg-opacity-50'></div>
                    </div>
                    <div className="IntroductoryText w-96 text-center text-sky-900 text-xl font-extrabold font-['Avenir'] uppercase leading-7">What We Are Reading</div>
                    <div className="grid grid-cols-3 mt-10 gap-5">
                        <div className="BlogSectionsPost h-auto overflow-hidden bg-white rounded-lg grid grid-rows-2">
                            {/* <img className="Image w-80 h-48 relative" src="https://via.placeholder.com/339x192" /> */}
                            <Image src={TestImg} alt='' className='relative w-full h-full object-cover object-center'></Image>
                            <div className="Content p-6 bg-white flex-col justify-center items-start gap-8 inline-flex">
                                <div className="LeadingContent self-stretch h-20 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="Category self-stretch text-design-light-green text-sm font-medium leading-tight">Tag</div>
                                    <div className="TitleAndPreview self-stretch h-14 flex-col justify-start items-start gap-3 flex">
                                        <div className="Title self-stretch text-gray-900 text-xl font-semibold leading-7">Research insights inform resilience-building </div>
                                    </div>
                                </div>
                                <div className="BlogSectionsAvatarWithText justify-start items-center gap-3 inline-flex">
                                    <div className="Avatar w-10 h-10 bg-stone-100 rounded-full" />
                                    <div className="Text flex-col justify-start items-start inline-flex">
                                        <div className="Title text-gray-900 text-sm font-medium leading-tight">Roel Aufderehar</div>
                                        <div className="SupportingText text-gray-500 text-sm font-normal leading-tight">Mar 16, 2020 · 6 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="BlogSectionsPost h-auto overflow-hidden bg-white rounded-lg grid grid-rows-2">
                            {/* <img className="Image w-80 h-48 relative" src="https://via.placeholder.com/339x192" /> */}
                            <Image src={TestImg} alt='' className='relative w-full h-full object-cover object-center'></Image>
                            <div className="Content p-6 bg-white flex-col justify-center items-start gap-8 inline-flex">
                                <div className="LeadingContent self-stretch h-20 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="Category self-stretch text-design-light-green text-sm font-medium leading-tight">Tag</div>
                                    <div className="TitleAndPreview self-stretch h-14 flex-col justify-start items-start gap-3 flex">
                                        <div className="Title self-stretch text-gray-900 text-xl font-semibold leading-7">Research insights inform resilience-building </div>
                                    </div>
                                </div>
                                <div className="BlogSectionsAvatarWithText justify-start items-center gap-3 inline-flex">
                                    <div className="Avatar w-10 h-10 bg-stone-100 rounded-full" />
                                    <div className="Text flex-col justify-start items-start inline-flex">
                                        <div className="Title text-gray-900 text-sm font-medium leading-tight">Roel Aufderehar</div>
                                        <div className="SupportingText text-gray-500 text-sm font-normal leading-tight">Mar 16, 2020 · 6 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="BlogSectionsPost h-auto overflow-hidden bg-white rounded-lg grid grid-rows-2">
                            {/* <img className="Image w-80 h-48 relative" src="https://via.placeholder.com/339x192" /> */}
                            <Image src={TestImg} alt='' className='relative w-full h-full object-cover object-center'></Image>
                            <div className="Content p-6 bg-white flex-col justify-center items-start gap-8 inline-flex">
                                <div className="LeadingContent self-stretch h-20 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="Category self-stretch text-design-light-green text-sm font-medium leading-tight">Tag</div>
                                    <div className="TitleAndPreview self-stretch h-14 flex-col justify-start items-start gap-3 flex">
                                        <div className="Title self-stretch text-gray-900 text-xl font-semibold leading-7">Research insights inform resilience-building </div>
                                    </div>
                                </div>
                                <div className="BlogSectionsAvatarWithText justify-start items-center gap-3 inline-flex">
                                    <div className="Avatar w-10 h-10 bg-stone-100 rounded-full" />
                                    <div className="Text flex-col justify-start items-start inline-flex">
                                        <div className="Title text-gray-900 text-sm font-medium leading-tight">Roel Aufderehar</div>
                                        <div className="SupportingText text-gray-500 text-sm font-normal leading-tight">Mar 16, 2020 · 6 min read</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="IntroductoryText mt-20 w-96 text-center text-gray-900 text-xl font-extrabold font-['Avenir'] uppercase leading-7">Additional Resources</div>
                    <div className='flex flex-col gap-5 w-full mt-10'>
                        <div className="Rectangle267  p-10 gap-10 w-full bg-white bg-opacity-40 rounded-2xl flex items-center justify-between">
                            <div>
                                <div className="SupportingText text-sky-900 text-base font-normal leading-tight">Mar 16, 2020</div>
                                <div className="Headline mt-1 text-gray-900 text-2xl font-extrabold font-['Avenir']">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                            </div>
                            <ArrowCircleIcon className="stroke-black"></ArrowCircleIcon>
                        </div>
                        <div className="Rectangle267 p-10 gap-10 w-full bg-white bg-opacity-40 rounded-2xl flex items-center justify-between">
                            <div>
                                <div className="SupportingText text-sky-900 text-base font-normal leading-tight">Mar 16, 2020</div>
                                <div className="Headline mt-1 text-gray-900 text-2xl font-extrabold font-['Avenir']">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                            </div>
                            <ArrowCircleIcon className="stroke-black"></ArrowCircleIcon>
                        </div>
                        <div className="Rectangle267  p-10 gap-10 w-full bg-white bg-opacity-40 rounded-2xl flex items-center justify-between">
                            <div>
                                <div className="SupportingText text-sky-900 text-base font-normal leading-tight">Mar 16, 2020</div>
                                <div className="Headline mt-1 text-gray-900 text-2xl font-extrabold font-['Avenir']">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                            </div>
                            <ArrowCircleIcon className="stroke-black"></ArrowCircleIcon>
                        </div>
                    </div>
                    <button className='r-btn border-none text-white bg-design-green mt-10'>See all</button>
                </div>
            </div>
        </section>
    );
}