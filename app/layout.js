import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals/global.scss'
import { Inter } from "next/font/google";

const inter = Inter({ 
	subsets: ["latin"],
	variable: '--font-inter',
});


export const metadata = {
	title: {
		template: '%s : TEDxGeorge',
		default: 'TEDxGeorge',
	},
	openGraph: {
		title: 'TEDxGeorge',
		url: "https://tedxgeorge.com",
		siteName: 'TEDxGeorge',
		locale: 'en_US',
		type: 'website',
	},
	description: "A licensed TEDx event dedicated to the George community, independently curated to ignite conversations that inspire insightful and thought-provoking engagement and change.",
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			
			<body className={inter.variable}>
				{children}
			</body>
		</html>
	);
}
