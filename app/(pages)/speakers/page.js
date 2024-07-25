import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import Image from "next/image"
import { speakerList } from "@/lib/speakerList"
import sortBy from "@/lib/utils/sortBy"


export const metadata = {
    title: "Speakers",
    alternates: {
        canonical: "https://tedxgeorge.com/speakers",
    }
}


function Speakers(){
    const speakers = sortBy(speakerList, "last_name")

    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_5, "fw-light")}>
                        Speakers
                    </h1>

                    <article>
                        <p className={Utils.fs_1}>
                            Our speaker's ideas will inspire you to seek your highest potential.
                        </p>
                    </article>
                </div>
            </section>


            <section className="container mb-5">
                <div className="row mt-4">
                    {speakers.map((speaker) => {
                        return(
                            <div className="col-12 col-lg-3 mb-4" key={speaker.slug}>
                                <Image 
                                    src={`https://dummyimage.com/400x400/111/fff&text=Announcing+Soon`}
                                    alt="Event 1" 
                                    width={400} 
                                    height={400} 
                                    className={clsx(Utils.w_100, Utils.h_auto, "object-fit-contain")}
                                />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Speakers;