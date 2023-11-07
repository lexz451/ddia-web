/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['api-ddla.datalis.dev'],
    },
    webpack: (config, { isServer }) => {
        // Add SVGR Loader
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            // disable plugins
                                            removeViewBox: false,
                                        },
                                    },
                                }
                            ]
                        },
                    },
                },
            ],
        });

        if (!isServer) {
            // Add your client-side only config here
        }

        return config;
    },
}

module.exports = nextConfig
