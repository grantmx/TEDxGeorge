import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">	
			<picture>
				<source
					media="(max-width: 768px)"
					srcSet="/tedxgeorge-background-mobile.jpg"
					type="image/jpg"
				/>
				<source
					media="(min-width: 767px)"
					srcSet="/tedxgeorge-background.jpg"
					type="image/jpg"
				/>

				<Image
					src="/tedxgeorge-background.jpg"
					alt="TEDxGeorge"
					fill
					placeholder="blur"
					blurDataURL="/background-placeholder.jpg"
					style={{ objectFit: "cover" }}
				/>	
			</picture>
			
		</main>
	);
}
