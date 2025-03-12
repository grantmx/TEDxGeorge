
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
})


const NextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	images: {
        localPatterns: [
            {
                pathname: '/assets/**',
                search: '',
            },
            {
                pathname: '/**',
                search: '',
            },
        ],
		remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.ytimg.com"
            },
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
    async redirects() {
        return [
            {
                source: '/events/details/:slug',
                destination: '/events/:slug',
                permanent: true,
            },
        ]
    }
};

module.exports = withPWA(NextConfig)