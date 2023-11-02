import Image from 'next/image';
import MailImg from '../assets/get-involved.png';
import ArrowIcon from '../assets/arrow.svg';


export default function GetInvolved() {
    return (
        <section id='get-involved' className='lg:page-container bg-design-green lg:bg-transparent my-20'>
            <div className="Rectangle157 page-container lg:bg-design-green lg:rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-10 py-14">
                <Image alt='mail' src={MailImg} quality={80} className='order-2 lg:order-1'></Image>
                <div className='flex flex-col justify-center order-1 lg:order-2'>
                    <div className="Headline text-design-light-green text-4xl lg:text-5xl font-extrabold font-avenir leading-10">Get Involved</div>
                    <p className="IntroductoryText mt-5 lg:mt-10 text-neutral-100 lg:text-lg font-light font-inter leading-relaxed">
                        Are you working to strengthen a healthy Internet for democracy? Do you want to learn more about narratives circulating in Latino spaces online? Have an interest in U.S. Latinos or Latin America and where the two intersect? Are you a policymaker working on tech policy?
                    </p>
                    {/* <div className='flex items-center mt-4'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z" fill="#EBB785" />
                    </svg>
                    <div className="Heading ml-2 text-white underline text-sm font-bold font-avenir leading-loose">Read more</div>
                </div> */}
                    <p className='my-4 text-neutral-100 font-light lg:text-lg'>Sign up to receive our latest updates.</p>

                    <input placeholder='Name' className='mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                    <input placeholder='Organization' className='mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                    <input placeholder='Title' className='mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                    <div className='block relative w-full mt-4'>
                        <input placeholder='Email' className='rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                        <button className='absolute hover:bg-design-light-green transition-colors duration-300 bg-white rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center'>
                            <ArrowIcon></ArrowIcon>
                        </button>
                    </div>
                    <p className='mt-10 text-neutral-100 font-light lg:text-lg'>
                        Contact us at <a className='underline' href='mailto:info@ddia.org'>info@ddia.org</a> to explore partnerships or to learn more about our work.
                    </p>
                </div>
            </div>
        </section>

    )
}