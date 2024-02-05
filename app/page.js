import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">	
			<Image
				src="/tedxgeorge-background.jpg"
				alt="TEDxGeorge"
				fill
				placeholder="blur"
				blurDataURL="/background-placeholder.jpg"
				style={{ objectFit: "cover" }}
			/>	
		</main>
	);
}
