import IndicatorIcon from '@/lib/assets/indicator.svg';
import Image from 'next/image';
import TestImg from '@/lib/assets/tecnologia-fondo-toque-humano-nueva-version-moderna-creacion-adan-11.png';

export default function Policy() {
    return (
        <section id="policy" className="our-work-section bg-design-light-green pb-footer">
            <div className="page-container  py-20">
                <div className='flex flex-col items-center'>
                    <IndicatorIcon className="fill-white w-4 h-4"></IndicatorIcon>
                    <div className="Headline mt-10 text-center text-design-green text-6xl font-extrabold  leading-10">Policy</div>
                    <div className="IntroductoryText mt-8 max-w-prose text-center text-design-green text-lg font-normal  leading-relaxed">
                        <p className='mb-4'>DdIA is working to <b>improve institutional decision-making by anchoring policies to the needs of Latinos and by centering US Latino and Latin American voices in discussions</b> that have been traditionally siloed or dominated by the US and Europe.</p>
                        <p>Many policymakers are at the cusp of implementing regulations and navigating the risks - with limited discussion across disciplines and borders. We inform policy by convening and working with organizations and governments to connect efforts, share best practices and collaborate on joint initiatives.</p>
                    </div>
                    <div className='max-w-[80%] flex flex-col gap-10 my-20'>
                        <div className="BlogSectionsPost h-[310px] grid grid-cols-2 relative rounded-2xl overflow-hidden">
                            <iframe className='w-full h-full object-cover object-center' src="https://www.youtube.com/embed/SNDGgJXNwCA?frameborder=0" title="Whirlwind: What to Expect for Digital Democracy in 2024" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className="Content px-10 py-8 bg-white bg-opacity-40 flex-col justify-center items-start gap-9 inline-flex">
                                <IndicatorIcon className="fill-design-green w-4 h-4"></IndicatorIcon>
                                <div className="IntroductoryText w-80 text-neutral-800 text-2xl font-normal  leading-7">Shape understanding of the systemic, social and behavioral factors that contribute to the spread of false, misleading, and hate-fueled information in Latino spaces online</div>
                            </div>
                        </div>
                        <div className="BlogSectionsPost h-[310px] grid grid-cols-2 relative rounded-2xl overflow-hidden">
                            <iframe className='w-full h-full object-cover object-center' src="https://www.youtube.com/embed/SNDGgJXNwCA?frameborder=0" title="Whirlwind: What to Expect for Digital Democracy in 2024" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <div className="Content px-10 py-8 bg-white bg-opacity-40 flex-col justify-center items-start gap-9 inline-flex">
                                <IndicatorIcon className="fill-design-green w-4 h-4"></IndicatorIcon>
                                <div className="IntroductoryText w-80 text-neutral-800 text-2xl font-normal  leading-7">
                                    Incubate and adapt proven-effective interventions and approaches in service of Latino communities
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-stone-800 mb-10 bg-opacity-50'></div>
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
                </div>
            </div>
        </section>
    );
}