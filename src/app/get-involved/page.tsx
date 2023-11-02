import FacebookIcon from "@/lib/assets/facebook.svg";
import InstagramIcon from "@/lib/assets/instagram.svg";
import XIcon from "@/lib/assets/x-twitter.svg";
import LinkedInIcon from "@/lib/assets/linked-in.svg";
import MediumIcon from "@/lib/assets/medium.svg";
import YoutubeIcon from "@/lib/assets/yt.svg";

import Image from "next/image";
import MailImg from "@/lib/assets/get-involved.png";
import ArrowIcon from "@/lib/assets/arrow.svg";
import LogoCircle from "@/lib/assets/logo-circle.svg";

import Link from "next/link";

export default function ContactUs() {
    const jobPositions = [
        {
            id: 1,
            position: "Job Position",
            department: "Department",
            location: "Location",
            date: "Date",
        },
        {
            id: 2,
            position: "Job Position",
            department: "Department",
            location: "Location",
            date: "Date",
        },
        {
            id: 3,
            position: "Job Position",
            department: "Department",
            location: "Location",
            date: "Date",
        },
    ];

    return (
        <main className="bg-gradient-to-b from-design-light-green via-design-light to-white pt-[150px]">
            <div className="page-container px-0">
                <section className="w-full items-center mt-10 mb-20 px-4">
                    <h1 className="font-avenir text-center w-fit mx-auto font-extrabold text-6xl text-design-green mb-4">
                        Contact Us
                    </h1>

                    <p className="text-design-green font-avenir mb-10 font-medium max-w-md mx-auto text-center">
                        Contact us at{" "}
                        <Link
                            className="underline font-semibold"
                            href={"info@ddia.org"}
                        >
                            info@ddia.org
                        </Link>{" "}
                        to explore partnerships or to learn more about our work.
                    </p>

                    <div className="flex flex-col items-center mx-auto w-fit">
                        <p>Follow us:</p>
                        <div className="SocialIcons flex gap-3 mt-4">
                            <Link
                                href="#"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <LinkedInIcon className="w-6 h-6 fill-design-light"></LinkedInIcon>
                            </Link>
                            <Link
                                href="#"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <XIcon className="w-5 h-5 fill-design-light"></XIcon>
                            </Link>
                            <Link
                                href="#"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <MediumIcon className="w-6 h-6 fill-design-light"></MediumIcon>
                            </Link>
                            <Link
                                href="#"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <FacebookIcon className="w-6 h-6 fill-design-light"></FacebookIcon>
                            </Link>
                            <Link
                                href="#"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <YoutubeIcon className="w-6 h-6 fill-design-light"></YoutubeIcon>
                            </Link>
                            <Link
                                href="#"
                                className="w-8 h-8 bg-design-green rounded-full flex items-center justify-center"
                            >
                                <InstagramIcon className="w-6 h-6 fill-design-light"></InstagramIcon>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="md:page-container my-20">
                    <div className="Rectangle157 bg-design-green md:rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 py-10 md:py-20">
                        <Image
                            alt="mail"
                            src={MailImg}
                            quality={80}
                            className="order-2 md:order-1"
                        ></Image>
                        <div className="flex flex-col justify-center order-1 md:order-2">
                            <div className="Headline text-design-light-green text-4xl md:text-5xl font-extrabold font-avenir leading-10">
                                Our Newsletter
                            </div>
                            <p className="IntroductoryText mt-5 md:mt-10 text-neutral-100 md:text-lg font-light font-inter leading-relaxed">
                                Sign up to recieve our latest research,
                                narrative analysis reports, and even updates
                            </p>

                            <input
                                placeholder="First name"
                                className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                            ></input>
                            <input
                                placeholder="Last name"
                                className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                            ></input>
                            <div className="block relative w-full mt-4">
                                <input
                                    placeholder="Email"
                                    className="rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                                ></input>
                                <button className="absolute bg-white rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center">
                                    <ArrowIcon></ArrowIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-32 px-4 pb-footer">

                    <LogoCircle className="w-20 h-20 mx-auto"></LogoCircle>

                    <h1 className="font-avenir text-center w-fit mt-10 mx-auto font-semibold text-5xl text-design-green mb-4">
                        Career Oportunities
                    </h1>

                    <p className="max-w-prose text-center font-avenir mx-auto mt-5">
                        Thank you for your interest in joining our team! At this
                        time, we don&apos;t have any job offers available. However,
                        please stay tuned for future opportunities to become a
                        part of our mission-driven organization.
                    </p>

                    {/* {jobPositions.map((job) => {
                        return (
                            <div
                                className="my-4 grid grid-cols-2 grid-rows-[auto_1fr] gap-2 bg-design-light-gray rounded-xl px-10 py-4"
                                key={job.id}
                            >
                                <h2 className="col-start-1 text-2xl font-medium my-auto">
                                    {job.position}
                                </h2>
                                <ul className="flex flex-wrap col-start-1 h-auto row-start-2 col-span-2 lg:col-end-1 gap-2">
                                    <li className="flex mr-4 gap-3 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <circle
                                                cx="6.5"
                                                cy="6.5"
                                                r="5.5"
                                                stroke="#0F8BA0"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        {job.department}
                                    </li>
                                    <li className="flex mr-4 gap-3 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <circle
                                                cx="6.5"
                                                cy="6.5"
                                                r="5.5"
                                                stroke="#0F8BA0"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        {job.location}
                                    </li>
                                    <li className="flex mr-4 gap-3 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <circle
                                                cx="6.5"
                                                cy="6.5"
                                                r="5.5"
                                                stroke="#0F8BA0"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        {job.date}
                                    </li>
                                </ul>

                                <button className="r-btn bg-design-green text-white font-normal row-end-1 md:row-start-1 md:row-span-2 col-start-2 ml-auto my-auto">
                                    Apply
                                </button>
                            </div>
                        );
                    })} */}
                </section>
            </div>
        </main>
    );
}
