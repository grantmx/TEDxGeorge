import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TEDxGeorge",
	description: "A licensed TEDx event dedicated to the George community, independently curated to ignite conversations that inspire insightful and thought-provoking engagement and change.",
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
