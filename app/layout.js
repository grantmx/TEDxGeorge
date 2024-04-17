import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals/global.scss'
import { Inter } from "next/font/google";
import braveOnes from "@/public/brave-ones-event.jpg"


const inter = Inter({ 
	subsets: ["latin"],
	variable: '--font-inter',
});


export const metadata = {
	metadataBase: "https://tedxgeorge.com",
	title: {
		template: '%s : TEDxGeorge',
		default: 'TEDxGeorge',
	},
	alternates: {
		canonical: 'https://tedxgeorge.com',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
	},
	openGraph: {
		title: 'TEDxGeorge',
		url: "https://tedxgeorge.com",
		siteName: 'TEDxGeorge',
		locale: 'en_US',
		type: 'website',
		images: [
            {
                url: braveOnes.src,
                width: 400,
                height: 400,
            },
        ],
	},
	description: "A licensed TEDx event dedicated to the George community, independently curated to ignite conversations that inspire insightful and thought-provoking engagement and change.",
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link href="/favicon.ico" rel="shortcut icon" />
			</head>
			<body className={inter.variable}>
				{children}
			</body>
		</html>
	);
}
