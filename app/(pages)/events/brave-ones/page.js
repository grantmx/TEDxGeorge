import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import { MainEvent } from "@/components/JSONld"
import hero from "@/public/about-hero.jpg"
import mobileHero from "@/public/background-mobile.jpg"
import Image from "next/image"
import braveOnes from "@/public/The_Brave_Ones.png"

export const dynamic = 'force-static'


export const metadata = {
    title: "About",
    alternates: {
        canonical: "https://tedxgeorge.com/about",
    }
}


function AboutUs(){
    return(
        <>
            <section className={Style.hero}>
				<picture className={Style.heroImg}>
					<source srcSet={hero.src} type="image/webp" media="(min-width: 600px)"/>
					<source srcSet={mobileHero.src} type="image/webp" media="(max-width: 600px)" />

					<Image 
						src={hero.src} 
						alt="TEDxGeorge Hero" 
						layout="responsive"
						width={1920}
						height={1080}
                         
					/>
				</picture>

                <div className={Style.heroInner}>
                    <div className={Style.heroSpacer} />

                    <div className={Style.heroText}>
                        <Image 
                            {...braveOnes} 
                            className={Style.eventLogo}
                            alt="the brave ones"
                             
                        />
                        
                        <p className={clsx(Utils.fs_3, Utils.mb_1)}>
                            October 5, 2024 &nbsp;&nbsp;|&nbsp;&nbsp; George Arts Theater
                        </p>

                        <p className={clsx(Utils.fs_5, Utils.mb_2)}>
                            An inspirational one day event propelling you to be challenged at every level.
                        </p>
                    </div>
                </div>
			</section>



            <section className="container text-center d-flex justify-content-center mt-5 pt-5">
                <div className={Style.heading}>
                    <h2 className={clsx(Utils.fs_5, "fw-light")}>
                        About TEDxGeorge
                    </h2>

                    <article>
                        <p className={Utils.fs_3}><strong>“The Brave Ones”</strong> is an attempt to celebrate the local heroes and heroines that have continuously taken brave steps in their respective fields. These individuals may not be the most recognised and acknowledged, but <strong>the impact and weight of their ideas are the centre of our attention.</strong></p>
                        <p>By creating an environment that allows them to offer us insight into their history, activities, and future aspirations through their ideas – we hope to further inspire and empower other individuals to seek their highest potential – regardless of the internal and external challenges that one continuously faces.</p>
                    
                        <p>
							<a href="https://chat.whatsapp.com/HGProtkIBL15I4K1ILAS71" className="btn btn-success fs-1 px-5">
                                <svg id="icon-whatsapp" viewBox="0 0 32 32" fill="#fff" width={45} height={45} className="pe-4">
                                    <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
                                </svg>

								Join the Community Group &rsaquo;
							</a>
						</p>
                    </article>
                </div>
            </section>
            


            <section className="container">
                
                <hr className="my-5" />

                <div className="row">
                    <heading className="col-lg-4 col-12">
                        <h2 className={Utils.fs_2}>
                            TEDx, x = independently organized event
                        </h2>
                    </heading>

                    <article className="col-lg-8 col-12">
                        <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
                    </article>
                </div>
                    
            </section>

            <MainEvent />
        </>
    )
}

export default AboutUs;