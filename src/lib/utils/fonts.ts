import localFont from "next/font/local";


// export const avenirCondensed = localFont({
//     display: 'fallback',
//     variable: '--font-avenir-condensed',
//     src: "../assets/fonts/Avenir-Condensed/AvenirNextLTPro-Condensed.otf"
// });
export const avenir = localFont({
    display: 'fallback',
    variable: '--font-avenir',
    src: [
        { 
            path: '../assets/fonts/Avenir/AvenirLTProLight.otf',
            weight: '300',
        },
        { 
            path: '../assets/fonts/Avenir/AvenirLTProMedium.otf',
            weight: '500',
        },
        { 
            path: '../assets/fonts/Avenir/AvenirLTProRoman.otf',
            weight: 'normal',
        },
        { 
            path: '../assets/fonts/Avenir/AvenirLTProHeavy.otf',
            weight: '800',
        },
        { 
            path: '../assets/fonts/Avenir/AvenirLTProBlack.otf',
            weight: '900',
        },
    ]
  });