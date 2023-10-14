import Image from "next/image";
import Link from "next/link";
import Roberta from "@/lib/assets/Roberta-Braga.png";

export default function MeetTheTeam() {
  return (
    <main className="bg-gradient-to-b from-design-light-green via-design-light to-white">
      <div className="container mx-auto pt-40">
        <h1 className="font-avenir w-fit mx-auto font-extrabold text-6xl text-design-dark-green mb-4">
          Meet the Team
        </h1>
        <p className="max-w-[70ch] mx-auto font-avenir">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
        <Link
          className="r-btn border-design-green text-design-green mt-14 mb-28 mx-auto"
          href={"#"}
        >
          Work with me
        </Link>

        <section className="flex p-14 mb-20 bg-design-green rounded-2xl">
          <Image
            className="object-cover rounded-full h-1/2 mr-10"
            src={Roberta}
            alt=""
            sizes="35rem"
          />
          <div className="relative">
            <Link className="absolute right-0 top-0" href={"#"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <circle cx="22.5" cy="22.5" r="22.5" fill="#F9F8F5" />
                <path
                  d="M14.7438 29.867L28.8655 15.7453M28.8655 15.7453L14.3541 15.8783M28.8655 15.7453L28.7372 29.7385"
                  stroke="#015C6B"
                  strokeWidth="2"
                />
              </svg>
            </Link>

            <h3 className="text-3xl font-extrabold font-avenir text-white">
              Roberta Braga
            </h3>
            <h4 className="text-white font-avenir uppercase mt-1 mb-3">
              Founder and Executive Director
            </h4>
            <p className="text-white font-avenir text-lg">
              Roberta Braga is founder and executive director of the Digital
              Democracy Institute of the Americas. She previously served as
              director for counter-disinformation strategies at Equis, a set of
              organizations working to better understand Latinos in the United
              States. Prior to joining Equis, Roberta managed global content and
              campaigns at the law firm Baker McKenzie and served as deputy
              director for programs and outreach at the Atlantic Council’s
              Adrienne Arsht Latin America Center, where she led programming on
              Brazil and projects on democracy-building, countering
              disinformation and misinformation in elections, and trade
              integration. Originally from Brazil, she is a native Portuguese-
              and English-speaker, and fluent in Spanish.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
