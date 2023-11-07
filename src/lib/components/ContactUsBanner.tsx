import Image from "next/image";
import ContactUsImg from "@/lib/assets/banners/contact-us.png";
import ContactUsDesktopImg from "@/lib/assets/banners/contact-us-desktop.png";
import Link from "next/link";

export default function ContactUsBanner() {
    return (
        <Link href={'mailto:info@ddia.org'} className="flex w-full my-10 h-80 overflow-hidden rounded-3xl bg-gradient-to-b from-design-light-green to-gray-100">
            <Image src={ContactUsDesktopImg} className="hidden lg:block w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Contact Us"></Image>
            <Image src={ContactUsImg} className="block lg:hidden w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Contact Us"></Image>
        </Link>
    );
}