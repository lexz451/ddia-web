import Logo from '@/lib/assets/logo.svg';
import FacebookIcon from '@/lib/assets/facebook.svg';
import InstagramIcon from '@/lib/assets/instagram.svg';
import XIcon from '@/lib/assets/x-twitter.svg';

export default function Footer() {
    return (
        <footer className="container mx-auto mb-10">
            <div className="Rectangle197 py-12 px-16 bg-design-dark-green rounded-3xl flex flex-col">
                <div className="flex items-start justify-between gap-10">
                    <div className="mr-10">
                        <Logo className="w-24 h-16 -ml-1"></Logo>
                        <p className="IntroductoryText  mt-8 leading-snug text-sm text-white">
                            Contact us at <a className="underline">info@ddia.org</a> <br /> to explore partnerships or to learn <br /> more about our work.
                        </p>
                        <div className="SocialIcons flex gap-6 mt-10">
                            <FacebookIcon className="w-6 h-6"></FacebookIcon>
                            <InstagramIcon className="w-6 h-6"></InstagramIcon>
                            <XIcon className="w-6 h-6"></XIcon>
                        </div>
                    </div>
                    <div className="FootersColumn w-40 flex-col justify-start items-start gap-4 inline-flex mt-5">
                        <div className="Heading self-stretch text-design-light-green text-sm font-semibold  uppercase leading-tight mb-2">About Us</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Mission / Vision</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Our Approach</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Core Strategies</div>
                    </div>
                    <div className="FootersColumn w-40 flex-col justify-start items-start gap-4 inline-flex mt-5">
                        <div className="Heading self-stretch text-design-light-green text-sm font-semibold  uppercase leading-tight mb-2">Our Work</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Research and Analysis</div>
                        <ul className="list-disc ml-6 text-design-light-green w-full">
                            <li>
                                <div className="Text text-design-light-green text-sm font-normal  leading-normal">Public Opinion Research</div>
                            </li>
                            <li className='mt-4'>
                                <div className="Text w-44 text-design-light-green text-sm font-normal  leading-normal">Social Listening and <br /> OSINT Investigations</div>
                            </li>
                        </ul>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Reports and Publications</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Capacity Building</div>
                        <ul className="list-disc ml-6 text-design-light-green w-full">
                            <li>
                                <div className="Text text-design-light-green text-sm font-normal  leading-normal">Workshops & Events</div>
                            </li>
                        </ul>
                    </div>
                    <div className="FootersColumn w-40 flex-col justify-start items-start gap-4 inline-flex mt-5">
                        <div className="Heading self-stretch text-design-light-green text-sm font-semibold  uppercase leading-tight mb-2">Latest Updates</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Announcements</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Blog</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">In the News</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Resources</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Events</div>
                    </div>
                    <div className="FootersColumn w-40 flex-col justify-start items-start gap-4 inline-flex mt-5">
                        <div className="Heading self-stretch text-design-light-green text-sm font-semibold  uppercase leading-tight mb-2">DIA</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Get involved</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">FAQs</div>
                        <div className="Text text-gray-300 text-sm font-normal  leading-normal">Meet the team</div>
                    </div>
                </div>
                <div className="Subscribe border-y border-white border-opacity-20 mt-14">
                    <div className="Content py-8 justify-between items-center inline-flex w-full">
                        <div className="Cta flex-col justify-start items-start gap-2 inline-flex">
                            <div className="Heading self-stretch text-gray-400 text-sm font-semibold  uppercase leading-tight tracking-wide">Subscribe to our newsletter</div>
                            <div className="SupportingText text-gray-300 text-base font-normal  leading-normal">The latest news, articles, and resources, sent to your inbox weekly.</div>
                        </div>
                        <div className="FootersSubscribeForm justify-start items-start gap-3 flex">
                            {/* <div className="FootersTextInput h-10 px-3 py-2 bg-white rounded-md border border-white justify-start items-center flex">
                                <input className="Placeholder text-gray-500 text-base font-normal  leading-normal">Enter your email</input>
                            </div> */}
                            <input className="h-10 rounded-md px-4 placeholder:text-gray-500  bg-white leading-normal" placeholder="Enter your email" />
                            <button className="FootersSubmitButton btn bg-design-light-green text-design-dark-green">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-between">
                    <div className="IntroductoryText">
                        <span className="text-neutral-100 text-sm font-normal  leading-7">Website designed and developed by </span>
                        <span className="text-neutral-100 text-sm font-bold  leading-7">W.LAND</span>
                    </div>
                    <div className="Copyright w-96 text-right text-gray-400 text-sm font-normal  uppercase leading-normal">Privacy Policy  |  Terms of Use  |  Cookie Policy</div>
                </div>
            </div>


        </footer>

    )
}