import Accordion from "@/lib/components/accordion";
import Link from "next/link";

export default function FAQ() {
  return (
    <main>
      <section className="Rectangle198 min-h-screen bg-gradient-to-b from-design-light-green to-white pt-[120px]">
        <h1>Frequently Asked questions</h1>
        <Link href="#">Contact us</Link>
        <div className="bg-gray-100">
          <div className="w-[55vw] mx-auto">
            <Accordion title="What’s the best thing about Switzerland?">
              <p>
                {`I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`}
              </p>
            </Accordion>
            <Accordion title="How do you make holy water?">{""}</Accordion>
            <Accordion title="What do you call someone with no body and no nose?">
              {""}
            </Accordion>
            <Accordion title="Why do you never see elephants hiding in trees?">
              {""}
            </Accordion>
            <Accordion title="Why can’t you hear a pterodactyl go to the bathroom?">
              {""}
            </Accordion>
            <Accordion title="Why did the invisible man turn down the job offer?">
              {""}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
