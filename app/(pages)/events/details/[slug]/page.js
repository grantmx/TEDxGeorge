import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import { eventsList } from "@/lib/eventList"
import Image from "next/image"
import Salon from "@/components/events/Salon"
import Live from "@/components/events/Live"

export const dynamic = 'force-static'


function EventDetail({ params }){
    const event = eventsList.find((event) => event.slug === params.slug)

    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <p className={clsx(Utils.fs_5, "fw-light")}>
                       {event.type}
                    </p>

                    <article>
                        <h1 className={Utils.fs_1}>
                            {event.title}
                        </h1>
                        <p></p>
                    </article>
                </div>
            </section>


            <section className="container">
                <div className="row">
                    <article 
                        className="col-lg-8 col-12 pe-5" 
                        dangerouslySetInnerHTML={{ __html: event.text }} 
                    />

                    <figure className="col-lg-4 col-12">
                        <Image
                            src={event.src}
                            alt={`${event.type}: ${event.title}`}
                            width={400}
                            height={400}
                            unoptimized={true}
                        />

                        <figcaption className="mt-5">
                            Date: <strong>{event.date}</strong><br/>
                            Time: <strong>{event.time}</strong><br />
                            Location: <strong>{event.location}</strong>
                        </figcaption>
                    </figure>
                </div>

                {event.type.includes("Salon") && (
                    <Salon />
                )}

                {event.type.includes("Live") && (
                    <Live />
                )}


            </section>
        </>
    )
}

export default EventDetail;



export async function generateMetadata({ params }){
    const event = eventsList.find((event) => event.slug === params.slug)

    return{
        title: `${event.type}: ${event.title}`,
        alternates: {
            canonical: "https://tedxgeorge.com/events/details/" + event.slug,
        },
        description: event.text.replace(/(<([^>]+)>)/ig, '').substring(0, 120),
        openGraph: {
            title: `${event.type}: ${event.title}`,
            url: "https://tedxgeorge.com/events/details/" + event.slug,
            siteName: 'TEDxGeorge',
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: event.src,
                    width: 400,
                    height: 400,
                },
            ],
        }
    }
}