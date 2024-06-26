import Utils from "@/styles/globals/utils.module.scss"
import Style from "../../../Page.module.scss"
import clsx from "clsx"
import Image from "next/image"
import { speakerList } from "@/lib/speakerList"


function SpeakerDetails({ params }){
    const speaker = speakerList.find((speaker) => speaker.slug === params.slug)

    console.log(speaker)

    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <p className={clsx(Utils.fs_5, "fw-light")}>
                        {speaker.event} Speaker
                    </p>

                    <article>
                        <h1 className={Utils.fs_1}>
                            {speaker.first_name} {speaker.last_name}
                        </h1>
                    </article>
                </div>
            </section>


            <section className="container">
                <div className="row">
                    <article 
                        className="col-lg-8 col-12 pe-5" 
                        dangerouslySetInnerHTML={{ __html: speaker.bio }} 
                    />

                    <figure className="col-lg-4 col-12">
                        <Image
                            src={speaker.image}
                            width={400}
                            height={400}
                        />

                        <figcaption className="mt-5">
                            
                        </figcaption>
                    </figure>
                </div>
            </section>
        </>
    )
}


export default SpeakerDetails;



export async function generateMetadata({ params }){
    const speaker = speakerList.find((event) => event.slug === params.slug)

    return{
        title: speaker.name,
        alternates: {
            canonical: "https://tedxgeorge.com/speakers/details/" + speaker.slug,
        },
        description: speaker.bio.replace(/(<([^>]+)>)/ig, '').substring(0, 120),
        openGraph: {
            title: speaker.name,
            url: "https://tedxgeorge.com/speaker/details/" + speaker.slug,
            siteName: 'TEDxGeorge',
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: speaker.image,
                    width: 400,
                    height: 400,
                },
            ],
        }
    }
}