import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import Image from "next/image"


export const metadata = {
    title: "Events"
}


function Events(){
    return(
        <>
             <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_5, "fw-light")}>
                       Events
                    </h1>

                    <article>
                        <p className={Utils.fs_3}>
                            TEDxGeorge embodies the essence of TED's mission: spreading ideas worth sharing. Our program aims to cultivate meaningful conversations within our community by providing TED-like experiences at the grassroots level.
                        </p>
                        <p>As a local iteration of this global movement, TEDxGeorge serves as a platform for inquisitive and forward-thinking individuals in the George area. We are a collective of thinkers and doers who are passionate about discovering and honoring local ideas across various disciplines and sharing them with the wider world.</p>
                    </article>
                </div>
            </section>

            <section className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <Image 
                            src="https://dummyimage.com/400x400/111/fff&text=Announcing+Soon" 
                            alt="Event 1" 
                            width={400} 
                            height={400} 
                            className={clsx(Utils.w_100, Utils.h_auto, "object-fit-contain")}
                        />
                    </div>
                    <div className="col-12 col-lg-3">
                        <Image 
                            src="https://dummyimage.com/400x400/111/fff&text=Announcing+Soon" 
                            alt="Event 1" 
                            width={400} 
                            height={400} 
                            className={clsx(Utils.w_100, Utils.h_auto, "object-fit-contain")}
                        />
                    </div>
                    <div className="col-12 col-lg-3">
                        <Image 
                            src="https://dummyimage.com/400x400/111/fff&text=Announcing+Soon" 
                            alt="Event 1" 
                            width={400} 
                            height={400} 
                            className={clsx(Utils.w_100, Utils.h_auto, "object-fit-contain")}
                        />
                    </div>

                    <div className="col-12 col-lg-3">
                        <Image 
                            src="https://dummyimage.com/400x400/111/fff&text=Announcing+Soon" 
                            alt="Event 1" 
                            width={400} 
                            height={400} 
                            className={clsx(Utils.w_100, Utils.h_auto, "object-fit-contain")}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events;