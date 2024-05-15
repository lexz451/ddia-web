"use client";
import { useEffect } from "react";


const runScriptTypes = [
  'application/javascript',
  'application/ecmascript',
  'application/x-ecmascript',
  'application/x-javascript',
  'text/ecmascript',
  'text/javascript',
  'text/javascript1.0',
  'text/javascript1.1',
  'text/javascript1.2',
  'text/javascript1.3',
  'text/javascript1.4',
  'text/javascript1.5',
  'text/jscript',
  'text/livescript',
  'text/x-ecmascript',
  'text/x-javascript'
]


export default function HtmlContent(
  { content }: {
    content: string
  }) {

  const sequense = (arr: any[], callback: () => void, index?: number) => {
    // first call, without an index
    if (!index) {
      index = 0
    }
    arr?.[index](function () {
      index!!++
      if (index === arr.length) {
        callback()
      } else {
        sequense(arr, callback, index)
      }
    })
  }

  const insertScript = ($script: HTMLScriptElement, callback: () => void) => {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    if ($script.src) {
      s.onload = callback
      s.onerror = callback
      s.src = $script.src
    } else {
      s.textContent = $script.innerText
    }
    // re-insert the script tag so it executes.
    document.head.appendChild(s)
    // clean-up
    $script?.parentNode?.removeChild($script)
    // run the callback immediately for inline scripts
    if (!$script.src) {
      callback()
    }
  }

  const scriptsDone = () => {
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
  }

  const runScripts = ($container: HTMLElement) => {
    const $scripts = $container.querySelectorAll('script');
    const runList: any[] = [];
    $scripts.forEach(($script) => {
      const attr = $script.getAttribute('type');
      if (!attr || runScriptTypes.indexOf(attr) !== -1) {
        runList.push(
          (callback: () => void) => {
            insertScript($script, callback)
          }
        )
      }
    });
    runList.length && sequense(runList, scriptsDone);
  }

  useEffect(() => {
    const _contentRoot = document.getElementById('content');
    if (_contentRoot) {
      runScripts(_contentRoot)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div id="content" suppressHydrationWarning={true} className="post-content"
    dangerouslySetInnerHTML={{
      __html: content
    }}></div>;
}
