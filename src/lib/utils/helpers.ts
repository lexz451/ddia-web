import { parse, HTMLElement } from 'node-html-parser';

export function parsePostContent(content: string): string {
    const root = parse(content);

    const iframes = root.querySelectorAll('iframe');
    iframes.forEach((iframe: HTMLElement) => {
        const src = iframe.getAttribute('src');
        if (src && src.indexOf('.pdf') !== -1) {
            iframe.classList.add('pdf-doc');
            iframe.insertAdjacentHTML(
                'afterend',
                `<a href="${src}" download target="_blank" rel="noopener noreferrer" class="mt-8 inline-block no-underline text-white bg-design-green border-none font-normal leading-none r-btn">
                    Download
                </a>`    
            )
        }

        

    });

    // fixes
    return root.toString();
}