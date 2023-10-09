import Image from 'next/image';
import MailImg from '../assets/get-involved.png';
import ArrowIcon from '../assets/arrow.svg';


export default function GetInvolved() {
    return (
        <div className="Rectangle157 bg-design-green rounded-3xl grid grid-cols-2 gap-10 p-10">
            <Image alt='mail' src={MailImg} quality={80}></Image>
            <div className='flex flex-col justify-center'>
                <div className="Headline text-design-light-green text-5xl font-extrabold font-avenir leading-10">Get Involved</div>
                <div className="IntroductoryText mt-10 text-neutral-100 text-lg font-normal font-inter leading-relaxed">Are you working to strengthen a healthy Internet for democracy? Sign up to receive our latest research, narrative analysis reports, and event updates.</div>
                <div className='flex items-center mt-4'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.97117 17.8052L17.9414 8.90234L8.97117 -0.000523186L0.000941627 8.90234L8.97117 17.8052Z" fill="#EBB785" />
                    </svg>
                    <div className="Heading ml-2 text-white underline text-sm font-bold font-avenir leading-loose">Read more</div>
                </div>
                <div className="IntroductoryText mt-10 text-neutral-100 text-lg font-normal font-inter leading-relaxed">The latest news, articles, and resources, sent to your inbox weekly.</div>
                <input placeholder='Name' className='mt-5 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                <div className='block relative w-full mt-5'>
                    <input placeholder='Email' className='rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm'></input>
                    <button className='absolute bg-white rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center'>
                        <ArrowIcon></ArrowIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}