"use client";

import Image from "next/image";
import MailImg from "../assets/get-involved.png";
import { sendContactInfo } from "../utils/actions";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";

export default function GetInvolved() {
    const [state, sendInfo] = useFormState(sendContactInfo, {
        message: "",
        error: false,
        submitted: false,
    });

    return (
        <section
            id="get-involved"
            className="lg:page-container bg-design-green lg:bg-transparent my-20"
        >
            <div className="Rectangle157 page-container lg:bg-design-green lg:rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-10 py-14">
                <Image
                    alt="mail"
                    src={MailImg}
                    sizes="100vw"
                    className="order-2 lg:order-1"
                ></Image>
                <form
                    action={sendInfo}
                    className="flex flex-col justify-center order-1 lg:order-2"
                >
                    <div className="Headline text-design-light-green text-4xl lg:text-5xl font-extrabold font-avenir leading-10">
                        Get Involved
                    </div>
                    <p className="IntroductoryText mt-5 lg:mt-10 text-neutral-100 lg:text-lg font-inter leading-normal">
                        Are you working to strengthen a healthy Internet for
                        democracy? Do you want to learn more about narratives
                        circulating in Latino spaces online? Have an interest in
                        U.S. Latinos or Latin America and where the two
                        intersect? Are you a policymaker working on tech policy?
                    </p>
                    <p className="mt-4 text-neutral-100 lg:text-lg leading-normal">
                        Contact us at <a className="underline" href="mailto:info@ddia.org">info@ddia.org</a> with press inquiries, to explore partnerships, and to learn more about our work.
                    </p>
                    <input
                        required
                        name="name"
                        placeholder="Name"
                        className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                    ></input>
                    <input
                        required
                        name="organization"
                        placeholder="Organization"
                        className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                    ></input>
                    <input
                        required
                        name="title"
                        placeholder="Title"
                        className="mt-4 rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                    ></input>
                    <div className="block relative w-full mt-4">
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="rounded-3xl bg-transparent border border-design-light-green px-4 h-12 w-full placeholder:text-design-light-green text-white text-sm"
                        ></input>
                        {/* <button type="submit" className="absolute hover:bg-design-light-green transition-colors duration-300 bg-white rounded-full right-0 top-0 bottom-0 h-12 w-12 flex items-center justify-center">
                            <ArrowIcon></ArrowIcon>
                        </button> */}
                        <SubmitButton></SubmitButton>
                        {state?.error && (
                            <p className="text-red-500 text-sm mt-2">
                                {state?.message}
                            </p>
                        )}
                        {state?.submitted && (
                            <p className="text-design-light-green text-sm mt-5">
                                {state?.message}
                            </p>
                        )}
                        <p aria-live="polite" className="sr-only">
                            {state?.message}
                        </p>
                    </div>
                    
                    <p className="my-4 text-neutral-100 lg:text-lg">
                        Sign up to receive our latest updates.
                    </p>

                </form>
            </div>
        </section>
    );
}
