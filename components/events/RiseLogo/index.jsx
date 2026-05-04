import tedxwomen from "@/public/assets/TEDx_Logo_George_women_white.png"
import Style from "./RiseLogo.module.scss"
import Image from "next/image"
import clsx from "clsx";



function RiseLogo({ horizontal }){

    return(
        <div className={clsx(Style.block, horizontal && Style.block__horizontal )}>
            <h1 className={Style.riseLogo}>
                R<span>IS</span>E
            </h1>	

            <figure>
                <Image src={tedxwomen} className={Style.logo} alt="TEDxGeorge Women Logo" width={900} priority />

                <figcaption className={Style.lead}>
                    August 8, 2026 &nbsp;&nbsp;&nbsp; Fancourt, South Africa
                </figcaption>
            </figure>
        </div>
    )
}

export default RiseLogo;