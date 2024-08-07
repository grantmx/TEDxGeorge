import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import { eventsList } from "@/lib/eventList"
import Image from "next/image"
import salonImg from "@/public/TEDx_Logo_George_Salon.png"


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
                                <Image 
                                    {...salonImg} 
                                    alt="TEDxGeorge Salon" 
                                    width="500" 
                                    height="62" 
                                    className={Style.salonImg}
                                />
                                
                                <small>Salon events are small events that keeps our TEDxGeorge community engaged between regular TEDx events. It's a unique kind of gathering that TEDx we hold which allows the conversation to continue, up close and in person.</small>                       
                            </heading>
                            
                            <article className="col-lg-8 col-12 ps-5">
                                <h2 className={Utils.fs_2}>
                                    Three reasons why you'll love TEDx salons:
                                </h2>

                                <ol className="m-0">
                                    <li className="mb-4"><strong>The discussion:</strong> A critical element of salon is lively discussions, allowing attendees to actively participate in the event. With much smaller audiences than a standard TEDx event, salons bring attendees together in more intimate spaces, and with more chances to get know and exchange ideas as with each other.</li>
                                    <li className="mb-4"><strong>The single subject:</strong> Having the ability to focus on only one subject creates focused audience and atmosphere.</li>
                                    <li><strong>Frequency:</strong> TEDxGeorge Salons are recurring events that offer a way stay engaged with the latest ideas. Salons can happen between larger standard events, providing a regular touch point for you and TEDxGeorge.</li>
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