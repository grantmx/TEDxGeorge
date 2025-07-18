import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import Image from "next/image";
import hero from "@/public/quicket-shift-tedx.png"
import mobileHero from "@/public/shift-concept-design.png"
import clsx from "clsx";


export const metadata = {
    title: "Shift",
    alternates: {
        canonical: "https://tedxgeorge.com/events/shift",
    },
    openGraph: {
		title: 'Shift - 2025 : TEDxGeorge',
    }
}



function Shift(){

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

               
			</section>

            

            <section className="container text-center d-flex justify-content-center mt-5 pt-5">
                <div className={Style.heading}>
                    <h2 className={clsx(Utils.fs_5, "fw-light")}>
                        About Shift 2025
                    </h2>

                    <article>
                        <p className={clsx(Utils.fs_3, Utils.mb_1)}>
                            October 11, 2025 &nbsp;&nbsp;|&nbsp;&nbsp; George Arts Theater
                        </p>

                        <p className={clsx(Utils.fs_5, Utils.mb_2)}>
                            An inspirational one day event propelling you to be challenged at every level.
                        </p>
                    </article>
                </div>
            </section>
            
        </>
    )
}

export default Shift;