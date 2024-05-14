import { parse, HTMLElement } from "node-html-parser";

export function parsePostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function parseReadTime(content: string): string {
  const wordsPerMinute = 238; // https://scholarwithin.com/average-reading-speed#:~:text=read%2020%20pages.-,Adult%20Average%20Reading%20Speed,of%20300%20words%20per%20minute.;
  const textLength = content.split(" ").length;
  const value = Math.ceil(textLength / wordsPerMinute);
  return `${value} min read`;
}

export function parsePostContent(content: string): string {
  const root = parse(content);

  const iframes = root.querySelectorAll("iframe");
  iframes.forEach((iframe: HTMLElement) => {
    const src = iframe.getAttribute("src");
    if (src && src.indexOf(".pdf") !== -1) {
      iframe.classList.add("pdf-doc");
      iframe.insertAdjacentHTML(
        "afterend",
        `<a href="${src}" download target="_blank" rel="noopener noreferrer" class="mt-8 inline-block no-underline text-white bg-design-green border-none font-normal leading-none r-btn">
                    Download
                </a>`,
      );
    }
  });

  const images = root.querySelectorAll("img");
  images.forEach((image: HTMLElement) => {
    image.classList.add("h-auto");
    image.setAttribute("loading", "lazy");
    if (image.getAttribute("alt") === "") {
      image.setAttribute("alt", "Image");
    }
    if (image.getAttribute("caption") !== null) {
      // create a figure element
      const figure = parse(
        `<figure>
                    ${image.outerHTML}
                    <figcaption>${image.getAttribute("caption") || ""}</figcaption>
                </figure>`,
      );
      // replace image with figure
      image.replaceWith(figure);
    }
  });

  const p = root.querySelectorAll("p");
  p.forEach((paragraph: HTMLElement) => {
    // remove empty paragraphs
    if (paragraph.innerHTML === "") {
      paragraph.remove();
    }
    if (paragraph.innerHTML === "<br>") {
      paragraph.remove();
    }
    // remove style attributes
    paragraph.removeAttribute("style");
  });

  const h3 = root.querySelectorAll("h3");
  h3.forEach((heading: HTMLElement) => {
    // remove style attributes
    heading.removeAttribute("style");
  });

  const htmlEmbed = root.querySelectorAll(".tai-prose-html");
  htmlEmbed.forEach((html) => {
    const inner = html.getAttribute("inner");
    if (inner) {
      let _inner = Buffer.from(inner, "base64").toString("utf-8");
      _inner = decodeURIComponent(_inner);
      html.appendChild(parse(_inner));
    }
  });

  // fixes
  return root.toString();
}
