import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Digital Democracy Institute of the Americas',
    short_name: 'DdIA',
    description: 'Digital Democracy Institute of the Americas website',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#00aba9',
    icons: [
        {
            src: '/favicon.ico',
            sizes: '16x16',
            type: 'image/x-icon',
        },
        {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
        },
    ],
  }
}