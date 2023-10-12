import Link from "next/link";

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
      </div>
    </main>
  );
}
