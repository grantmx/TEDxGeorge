/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
})


const NextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mjml"],
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            },
			{
                protocol: 'https',
                hostname: '**.googleapis.com',
            },
			{
                protocol: 'https',
                hostname: '**.youtube.com',
            },
		]
	},
};

module.exports = withPWA(NextConfig)