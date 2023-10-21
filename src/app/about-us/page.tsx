import imgapproach from "@/lib/assets/approach-11.png";
import imgfakeNews from "@/lib/assets/fake-news.png";
import imgholdingWorld from "@/lib/assets/hombre-negocios-mundo-mano-1.png";
import imghandsCircle from "@/lib/assets/manos-circulo.png";
import imgvision1 from "@/lib/assets/vision-1.png";
import imgvision2 from "@/lib/assets/vision-2.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="Rectangle198 min-h-screen bg-gradient-to-b from-[#a8dadc] via-design-light to-white pt-[120px]">
      <div className="container mx-auto mt-14">
        <section>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_2fr] gap-6 pb-10">
            <Image
              className="object-cover w-full object-left-top rounded-2xl"
              src={imgvision1}
              alt=""
              width={0}
              height={0}
              //sizes="20vmax"
            />
            <div className="flex w-full h-full lg:p-8 lg:bg-design-light rounded-2xl">
              <div className="m-auto">
                <h1 className="text-5xl text-design-green font-[Inter] font-semibold pb-8">
                  Our mission
                </h1>
                <p className="text-base text-design-dark  font-[Avenir] min-w-[40ch]">
                  The Digital Democracy Institute of the Americas (DIA) is
                  bringing together insights and actors across the hemisphere to
                  shape a more participatory, inclusive, and resilient digital
                  democracy. We apply research at the intersection of
                  information integrity, belief, and behavior to build trust,
                  connection, and capacity with Latino communities and to shape
                  policy interventions that bridge-build and depolarize shared
                  information spaces for healthier democracies in the Americas.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-6 pb-10">
            <div className="flex w-full h-full lg:p-8 lg:bg-design-light rounded-2xl">
              <div className="m-auto">
                <h1 className="text-5xl text-design-green font-[Inter] font-semibold pb-8">
                  Our vision
                </h1>
                <p className="text-base text-design-dark font-[Avenir] min-w-[40ch]">
                  We envision a world where Latinos are surrounded by
                  fact-based, reputable information that empowers them to make
                  their voices heard across the ocean of content that is today’s
                  Internet. Communities in the Americas deserve an information
                  environment free of fear and repression, one that rewards
                  connection, security, and fair participation in democracy.
                </p>
              </div>
            </div>
            <Image
              className="w-full object-cover object-center rounded-2xl"
              src={imgvision2}
              alt=""
              width={0}
              height={0}
              //sizes="20vmax"
            />
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 my-20 p-12 bg-[#fee9d7] rounded-2xl">
          <Image
            className="object-cover object-center max-w-[50%] grow-0 shrink-[3]"
            src={imgapproach}
            alt=""
            width={0}
            height={0}
            sizes="50rem"
          />
          <div className="basis-1/2 grow shrink-0">
            <h1 className="text-5xl text-design-green font-[Inter] font-semibold pb-8">
              Our Approach
            </h1>
            <p className="text-base text-design-dark font-[Avenir] max-w-[41ch]">
              DIA is bringing together public opinion research, narrative
              analysis, capacity building and policy to help Latinos live a
              healthy digital life. We foster research and an exchange of ideas
              across disciplines, leaders, and countries; guide interventions
              that serve our communities in the US and across the Americas; and
              center Latinos and Latin Americans in policy conversations about
              the future of the digital information ecosystem.
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center max-w-[790px] mx-auto mb-12">
          <h1 className="text-5xl text-design-green font-[Inter] font-semibold pb-8">
            Core strategies
          </h1>
          <p className="text-base text-design-dark text-center font-[Avenir] mb-16 max-w-[66ch]">
            In our effort to foster an online information environment that is
            trustworthy, welcoming, and conducive to stronger democracies and
            societies, we are moving beyond a focus on content to:
          </p>

          <div className="lg:grid lg:grid-cols-2 lg:h-[16.4rem] mb-12 bg-[#fee9d7] rounded-2xl">
            <div className="relative">
              <Image
                className="object-cover h-full object-center rounded-2xl"
                src={imgfakeNews}
                alt=""
                width={0}
                height={0}
                sizes="30rem"
              />
              <h1 className="block absolute text-white right-[15%] top-[40%] text-5xl w-[4ch] rotate-[-15deg] font-[Bakbak One]">
                Fake news
              </h1>
            </div>

            <div className="flex relative ml-12 h-64 lg:h-full">
              <svg
                className="absolute top-[1.9rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.97117 17.8042L17.9414 8.90137L8.97117 -0.00149975L0.000941627 8.90137L8.97117 17.8042Z"
                  fill="#EBB785"
                />
              </svg>
              <p className="text-xl text-design-dark font-[Avenir] max-w-[27ch] mt-16">
                Shape understanding of the systemic, social and behavioral
                factors that contribute to the spread of false, misleading, and
                hate-fueled information in Latino spaces online 
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:h-[16.4rem] mb-12 bg-[#fee9d7] rounded-2xl">
            <Image
              className="object-cover h-full object-center rounded-2xl"
              src={imghandsCircle}
              alt=""
              width={0}
              height={0}
              sizes="30rem"
            />
            <div className="flex relative ml-12 h-64 lg:h-full">
              <svg
                className="absolute top-[1.9rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.97117 17.8042L17.9414 8.90137L8.97117 -0.00149975L0.000941627 8.90137L8.97117 17.8042Z"
                  fill="#EBB785"
                />
              </svg>
              <p className="text-xl text-design-dark font-[Avenir] max-w-[27ch] mt-20">
                Incubate and adapt proven-effective interventions and approaches
                in service of Latino communities
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:h-[16.4rem] mb-12 bg-[#fee9d7] rounded-2xl">
            <Image
              className="object-cover h-full object-center rounded-2xl"
              src={imgholdingWorld}
              alt=""
              width={0}
              height={0}
              sizes="30rem"
            />
            <div className="flex relative ml-12 h-64 lg:h-full">
              <svg
                className="absolute top-[1.9rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.97117 17.8042L17.9414 8.90137L8.97117 -0.00149975L0.000941627 8.90137L8.97117 17.8042Z"
                  fill="#EBB785"
                />
              </svg>
              <p className="text-xl text-design-dark font-[Avenir] max-w-[27ch] mt-16">
                Center Latinos’ perspectives and experiences in policy
                discussions and decisions made about the future of the Internet
                and online world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
