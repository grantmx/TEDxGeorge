import Utils from "@/styles/globals/utils.module.scss"
import Style from "../../../Page.module.scss"
import clsx from "clsx"
import { eventsList } from "@/lib/eventList"
import Image from "next/image"



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
                        />

                        <figcaption className="mt-5">
                            Date: <strong>{event.date}</strong><br/>
                            Time: <strong>{event.time}</strong><br />
                            Location: <strong>{event.location}</strong>
                        </figcaption>
                    </figure>
                </div>

                {event.type === "TEDxGeorge Salon" && (
                    <>
                        <hr className="my-5" />

                        <div className="row">
                            <heading className="col-lg-4 col-12 pe-5">
                                <h2 className={Utils.fs_2}>
                                    About TEDxGeorge Salon Events
                                </h2>
                            </heading>
                            
                            <article className="col-lg-8 col-12">
                                <p>Salon events are small events that keeps our TEDxGeorge community engaged between regular TEDx events. It's a unique kind of gathering that TEDx we hold which allows the conversation to continue, up close and in person.</p>                       
                            
                                <h3 className={Utils.fs_4}>
                                    Two reasons why you'll love TEDx salons:
                                </h3>

                                <ol className="m-0">
                                    <li className="mb-4"><strong>The discussion:</strong> A critical element of salon is lively discussions, allowing attendees to actively participate in the event. With much smaller audiences than a standard TEDx event, salons bring attendees together in more intimate spaces, and with more chances to get know and exchange ideas as with each other.</li>
                                    <li><strong>The single subject:</strong> Having the ability to focus on only one subject creates focused audience and atmosphere.</li>
                                </ol>
                            </article>
                        </div>
                    </>
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