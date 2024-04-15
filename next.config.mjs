/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	images: {
		formats: [
			'image/avif',
			'image/webp'
		],
		remotePatterns: [
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

export default nextConfig;
