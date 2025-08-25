/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    experimental: {
        serverComponentsExternalPackages: [],
    },
    images: {
        formats: ['image/webp'],
        // domains: ['api-ddla.datalis.dev'],
        remotePatterns: [
            {
                hostname: 'api-ddla.datalis.dev'
            },
            {
                hostname: 'api.ddia.org',
            }
        ]
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
