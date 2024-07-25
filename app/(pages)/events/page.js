import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import Image from "next/image"
import { eventsList } from "@/lib/eventList"
import { MainEvent } from "@/components/JSONld"
import braveOnes from "@/public/brave-ones-event.jpg"
import Link from "next/link"


export const metadata = {
    title: "Events",
    alternates: {
        canonical: "https://tedxgeorge.com/events",
    },
    openGraph: {
        title: 'TEDxGeorge',
        description: "The Brave Ones is an attempt to celebrate the local heroes and heroines that have continuously taken brave steps in their respective fields",
        url: 'https://tedxgeorge.com/events',
        siteName: 'TEDxGeorge',
        images: [
            {
                url: braveOnes.src,
                width: 400,
                height: 400,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}


async function Events(){
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
                    {eventsList.map((event) => {
                        return(
                            <Link 
                                href={event.href}
                                title={`More on ${event.title}`}
                                className={clsx("col-12 col-lg-3 border-0 mb-5 p-2")} 
                                key={event.title}
                            >
                                <Image 
                                    src={event.src}
                                    alt={event.title}
                                    width={400} 
                                    height={400} 
                                    placeholder="blur"
                                    blurDataURL="https://dummyimage.com/1x1/777/fff"
                                    className={clsx(Utils.w_100, Utils.h_auto, "object-fit-contain")}
                                />

                                <div className="btn btn-danger btn-lg mt-3">
                                    Read more &rarr;
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>

            <MainEvent />
        </>
    )
}

export default Events;