import Logo from '@/lib/assets/logo.svg';
import GlobeIcon from '@/lib/assets/globe-alt.svg';
import SearchIcon from '@/lib/assets/search.svg';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className='absolute left-0 right-0'>
            <nav className='flex items-center container mx-auto py-5'>
                <div className='flex-1'>
                    <Link href="/">
                        <Logo className="w-32 h-20 relative"></Logo>
                    </Link>
                </div>
                <ul className='inline-flex mr-10'>
                    <li>
                        <a className="Heading w-20 text-center text-design-green text-sm font-medium font-['Avenir'] uppercase leading-10">About us</a>
                    </li>
                    <li>
                        <div className="Heading w-28 text-center text-design-green text-sm font-medium font-['Avenir'] uppercase leading-10">Our work</div>
                    </li>
                    <li>
                        <div className="Heading w-36 text-center text-design-green text-sm font-medium font-['Avenir'] uppercase leading-10">meet the team</div>
                    </li>
                    <li>
                        <div className="Heading w-32 text-center text-design-green text-sm font-medium font-['Avenir'] uppercase leading-10">Latest Updates</div>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <SearchIcon className="w-6 h-6"></SearchIcon>
                    <GlobeIcon className="w-6 h-6"></GlobeIcon>
                </div>
            </nav>
        </header>
    );
};