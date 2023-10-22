import imgapproach from "@/lib/assets/approach-11.png";
import imgfakeNews from "@/lib/assets/fake-news.png";
import imgholdingWorld from "@/lib/assets/hombre-negocios-mundo-mano-1.png";
import imghandsCircle from "@/lib/assets/manos-circulo.png";
import imgvision1 from "@/lib/assets/vision-1.png";
import imgvision2 from "@/lib/assets/vision-2.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="">
      <section className="gradient-green-page pt-[120px]">
        <div className="page-container mt-10">
          <div className="grid grid-cols-[1fr_2fr] gap-6 pb-10">
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
                <h1 className="text-5xl text-design-green font-avenir font-semibold pb-8">
                  Our mission
                </h1>
                <p className="text-base text-design-dark  font-avenir min-w-prose">
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
                <h1 className="text-5xl text-design-green font-avenir font-semibold pb-8">
                  Our vision
                </h1>
                <p className="text-base text-design-dark font-avenir min-w-prose">
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
        </div>
      </section>

      <section className="">
        <div className="page-container my-20">
          <div className="flex items-center justify-center gap-8 p-12 bg-design-light-yellow rounded-2xl">
            <Image
              className="object-cover object-center max-w-[50%] grow-0 shrink-[3]"
              src={imgapproach}
              alt=""
              sizes="50vw"
            />
            <div className="basis-1/2 grow shrink-0">
              <h1 className="text-5xl text-design-green font-semibold pb-8">
                Our Approach
              </h1>
              <p className="text-base text-design-dark font-avenir max-w-prose">
                DIA is bringing together public opinion research, narrative
                analysis, capacity building and policy to help Latinos live a
                healthy digital life. We foster research and an exchange of ideas
                across disciplines, leaders, and countries; guide interventions
                that serve our communities in the US and across the Americas; and
                center Latinos and Latin Americans in policy conversations about
                the future of the digital information ecosystem.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="">
        <div className="page-container">
          <div className="flex flex-col items-center mx-auto pb-footer mb-12 max-w-[80%]">
            <h1 className="text-5xl text-design-green font-semibold pb-8">
              Core strategies
            </h1>
            <p className="text-base text-design-dark text-center font-avenir mb-16 max-w-prose">
              In our effort to foster an online information environment that is
              trustworthy, welcoming, and conducive to stronger democracies and
              societies, we are moving beyond a focus on content to:
            </p>

            <div className="grid grid-cols-2 mb-12 bg-design-light-yellow rounded-2xl">
              <div className="relative">
                <Image
                  className="object-cover h-full w-full object-center rounded-2xl"
                  src={imgfakeNews}
                  alt=""
                  sizes="30vw"
                />
                <h1 className="block absolute text-white right-[15%] top-[40%] text-5xl w-[4ch] rotate-[-15deg] font-[Bakbak One]">
                  Fake news
                </h1>
              </div>

              <div className="flex relative ml-12 mr-8 h-full">
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
                <p className="text-xl text-design-dark font-avenir max-w-prose mt-16">
                  Shape understanding of the systemic, social and behavioral
                  factors that contribute to the spread of false, misleading, and
                  hate-fueled information in Latino spaces online
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 h-[16.4rem] mb-12 bg-design-light-yellow rounded-2xl">
              <Image
                className="object-cover h-full object-center rounded-2xl"
                src={imghandsCircle}
                alt=""
                sizes="30vw"
              />
              <div className="flex relative ml-12 mr-8 h-full">
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
                <p className="text-xl text-design-dark font-avenir max-w-prose mt-20">
                  Incubate and adapt proven-effective interventions and approaches
                  in service of Latino communities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 h-[16.4rem] mb-12 bg-[#fee9d7] rounded-2xl">
              <Image
                className="object-cover h-full object-center rounded-2xl"
                src={imgholdingWorld}
                alt=""
                sizes="30vw"
              />
              <div className="flex relative ml-12 mr-8 h-full">
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
                <p className="text-xl text-design-dark font-avenir max-w-prose mt-16">
                  Center Latinos’ perspectives and experiences in policy
                  discussions and decisions made about the future of the Internet
                  and online world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
