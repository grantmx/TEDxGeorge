import Image from "next/image";
import hero from "@/public/hero.jpg"
import mobileHero from "@/public/mobile-hero.jpg"
import Header from "@/components/nav/Header";
import Utils from "@/styles/globals/utils.module.scss"
import logo from "@/public/TEDx_Logo_Short_George-white.svg"
import Footer from "@/components/nav/Footer";
import Link from "next/link";
import { MainEvent } from "@/components/JSONld";
import { eventsList } from "@/lib/eventList";
import EventItem from "@/components/events/EventItem";
import clsx from "clsx";



function Home() {
	return (
		<>
			<Header />

			<section className="w-100">
				<picture>
					<source srcSet={hero.src} type="image/webp" media="(min-width: 600px)"/>
					<source srcSet={mobileHero.src} type="image/webp" media="(max-width: 600px)" />

					<Image 
						src={hero.src} 
						alt="TEDxGeorge Hero" 
						layout="responsive"
						width={1920}
						height={1080}
						unoptimized={true}
					/>
				</picture>
			</section>


			


			<main className="container px-4">
				<section className="row my-5 py-5">
					<aside className="col col-lg-4">
						<h1 className={Utils.fs_1}>
							About <br/><Image src={logo} alt="TEDxGeorge Logo" width={300} height={75} />
						</h1>

						{/* <hr className="mb-5 w-50" />

						<p>
							<strong>Date:</strong> October 5, 2024<br />
							<strong>Venue:</strong> George Arts Theater<br />
							<strong>Time:</strong> 9am - 4pm
						</p>

						<p>
							<Link href="/tickets" className="btn btn-danger fs-1 px-5">
								Purchase Tickets
							</Link>
						</p> */}
					</aside>

					<article className="col col-lg-8">
						<h2 className={Utils.fs_4}>
							What is TEDx?
						</h2>
						<p>In the spirit of ideas worth spreading, TED has created a program called <a href="https://www.ted.com/tedx" target="_blank" rel="nofollow">TEDx</a>. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxGeorge, where x = independently organized TED event. At our TEDxGeorge event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>					
					</article>
				</section>


				<section className="container pb-5">
					<h3 className={Utils.fs_3}>
						Upcoming Events
					</h3>

					<div className="row">
						{eventsList.map((event, index) => {
							if( index > 3 ) return

							return <EventItem key={event.slug} event={event} />
						})}
					</div>

				</section>
			</main>

			<Footer />

			<MainEvent />
			
		</>
	);
}


export default Home;
