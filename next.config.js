
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
        localPatterns: [
            {
                pathname: '/assets/**',
                search: '',
            },
            {
              pathname: '/assets/images/**',
              search: '',
            },
            {
                pathname: '/assets/icons/**',
                search: '',
            }
        ],
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