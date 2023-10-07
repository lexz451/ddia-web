import imgvision1 from "@/lib/assets/vision-1.png";
import imgvision2 from "@/lib/assets/vision-2.png";
import imgapproach from "@/lib/assets/approach-11.png";
import imgfakeNews from "@/lib/assets/fake-news.png";
import imghandsCircle from "@/lib/assets/manos-circulo.png";
import imgholdingWorld from "@/lib/assets/hombre-negocios-mundo-mano-1.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="Rectangle198 min-h-screen bg-gradient-to-b from-design-light-green to-white pt-[120px]">
      <section className="w-[87%] max-w-[1520px] mx-auto">
        <section className="w-full mx-auto">
          <div className="flex flex-row w-full gap-[2%] pb-8 justify-center">
            <Image
              className="basis-[21rem] object-cover object-left-top rounded-2xl"
              src={imgvision1}
              alt=""
              width={0}
              height={0}
              sizes="21rem"
            />
            <div className="box-content flex flex-col justify-center w-auto px-[4%] py-[0.5rem] bg-design-light rounded-2xl">
              <h1 className="text-5xl text-design-green font-[Inter] font-semibold pb-8">
                Our mission
              </h1>
              <p className="text-base text-design-dark  font-[Avenir] max-w-[70ch]">
                The Digital Democracy Institute of the Americas (DIA) is
                bringing together insights and actors across the hemisphere to
                shape a more participatory, inclusive, and resilient digital
                democracy. We apply research at the intersection of information
                integrity, belief, and behavior to build trust, connection, and
                capacity with Latino communities and to shape policy
                interventions that bridge-build and depolarize shared
                information spaces for healthier democracies in the Americas.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full gap-[2%] pb-8 justify-center">
            <div className="box-content flex flex-col justify-center w-auto px-[4%] py-[0.5rem] bg-design-light rounded-2xl">
              <h1 className="text-5xl text-design-green font-[Inter] font-semibold pb-8">
                Our vision
              </h1>
              <p className="text-base text-design-dark font-[Avenir] max-w-[70ch]">
                We envision a world where Latinos are surrounded by fact-based,
                reputable information that empowers them to make their voices
                heard across the ocean of content that is today’s Internet.
                Communities in the Americas deserve an information environment
                free of fear and repression, one that rewards connection,
                security, and fair participation in democracy.
              </p>
            </div>
            <Image
              className="basis-[21rem] object-cover object-center rounded-2xl"
              src={imgvision2}
              alt=""
              width={0}
              height={0}
              sizes="21rem"
            />
          </div>
        </section>

        <h1>Our Approach</h1>
        <p>
          DIA is bringing together public opinion research, narrative analysis,
          capacity building and policy to help Latinos live a healthy digital
          life. We foster research and an exchange of ideas across disciplines,
          leaders, and countries; guide interventions that serve our communities
          in the US and across the Americas; and center Latinos and Latin
          Americans in policy conversations about the future of the digital
          information ecosystem.
        </p>

        <h1>Core strategies</h1>
        <p>
          In our effort to foster an online information environment that is
          trustworthy, welcoming, and conducive to stronger democracies and
          societies, we are moving beyond a focus on content to:
        </p>

        <p>
          Shape understanding of the systemic, social and behavioral factors
          that contribute to the spread of false, misleading, and hate-fueled
          information in Latino spaces online 
        </p>

        <p>
          Incubate and adapt proven-effective interventions and approaches in
          service of Latino communities
        </p>

        <p>
          Center Latinos’ perspectives and experiences in policy discussions and
          decisions made about the future of the Internet and online world.
        </p>
      </section>
    </main>
  );
}
