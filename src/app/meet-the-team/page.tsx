import Link from "next/link";

import DrLisa from "src/lib/assets/team/Dr. Lisa Fazio.webp";
import Eduardo from "src/lib/assets/team/Eduardo A. Gamarra.webp";
import Eugene from "src/lib/assets/team/Eugene Kondratov.webp";
import Jacobo from "src/lib/assets/team/Jacobo Licona.webp";
import Luiza from "src/lib/assets/team/Luiza Bandeira.webp";
import Maritza from "src/lib/assets/team/Maritza L. Félix.webp";
import Nora from "src/lib/assets/team/Nora Benavidez.webp";
import Olga from "src/lib/assets/team/Olga Belogolova.webp";
import Ricardo from "src/lib/assets/team/Ricardo Zuniga.webp";
import Roberta from "src/lib/assets/team/Roberta Braga.webp";
import Zuraya from "src/lib/assets/team/Zuraya Tapia-Hadley.webp";
import Cristina from "src/lib/assets/team/Cristina Tardaguila.webp";
import TeamAccordion from "@/lib/components/team-accordion";

const members = [
  [
    {
      img: Roberta,
      member: "Roberta Braga",
      role: "founder and executive director",
      description: `Roberta Braga is founder and executive director of the Digital
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
    and English-speaker, and fluent in Spanish.`,
    },
    {
      img: Jacobo,
      member: "Jacobo Licona",
      role: "research consultant",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
    {
      img: Cristina,
      member: "Cristina Tardaguila",
      role: "research consultant",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
    {
      img: Eugene,
      member: "Eugene Kondratov",
      role: "research consultant",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
  ],
  [
    {
      img: Ricardo,
      member: "Ricardo Zuniga",
      role: "founding partner, ",
      prime: "Dinamica Americas",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
    {
      img: Olga,
      member: "Olga Belogolova",
      role: "adjunct professor, alperovitch institute for cybersecurity studies, sais, ",
      prime: "Johns Hopkins University",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
  ],
  [
    {
      img: DrLisa,
      member: "Dr. Lisa Fazio",
      role: "Associate Professor, Psychology and human development, ",
      prime: "Vanderbilt University",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
    {
      img: Maritza,
      member: "Maritza L. Felix",
      role: "Founder, ",
      prime: "Conecta Arizona",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
    {
      img: Zuraya,
      member: "Zuraya Tapia-Hadley",
      role: "senior director of Government Affairs",
      prime: "for Televisa Univision(TU)",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
    {
      img: Luiza,
      member: "Luiza Bandeira",
      role: "disinformation research consultant, ",
      prime: "Dinamica Americas",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
    {
      img: Eduardo,
      member: "Eduardo A. Gamarra",
      role: "Professor, Politics and international relations, ",
      prime: "Florida International University",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
    {
      img: Nora,
      member: "Nora Benavidez",
      role: "senior counsel and director of digital justice and civil rights, free press",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus provident maiores officiis labore molestiae nam modi dolorem incidunt magnam, consequuntur, enim reprehenderit sint sapiente ea, animi quam voluptatibus? Similique, repellat!`,
    },
  ],
];

const categories = ["", "Board of Directors", "Advisory Council"];

export default function MeetTheTeam() {
  return (
    <main className="bg-gradient-to-b from-design-light-green via-white to-white">
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

        <section className="mb-16">
          {members.map((sec, index) => {
            return (
              <>
                {categories[index] == "" ? null : (
                  <>
                    <div
                      className="block w-full"
                      style={{
                        height: "1px",
                        backgroundColor: "rgba(90,100,100, 0.6)",
                        marginBlock: "2rem 1.25rem",
                      }}
                    ></div>
                    <h2 className="text-design-green mb-5 font-avenir font-semibold text-4xl">
                      {categories[index]}
                    </h2>
                  </>
                )}
                {sec.map((member) => {
                  return <TeamAccordion {...member} key={member.member} />;
                })}
              </>
            );
          })}
        </section>
      </div>
    </main>
  );
}
