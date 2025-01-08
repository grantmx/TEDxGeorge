import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import Image from "next/image"
import { speakerList } from "@/lib/speakerList"
import { IconLink } from "@/icons/IconLink"


async function SpeakerDetails({ params }){
    const { slug } = await params
    const speaker = speakerList[slug];

    const speakerName = `${speaker?.first_name} ${speaker?.last_name}`

    console.log(speaker)

    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <p className={clsx(Utils.fs_5, "fw-light")}>
                        {speaker?.event} Speaker
                    </p>

                    <article>
                        <h1 className={clsx(Style.callout, "mb-0")}>
                            {speakerName}
                        </h1>

                        <ul className={Style.speakerSocials}>
                            {Object.keys(speaker?.social).map((social) => {
                                if(!speaker?.social[social]) return null;

                                return(
                                    <li key={social}>
                                        <a href={speaker?.social[social]} target="_blank" className={Style.socialLink}>
                                            <IconLink className={Style.linkIcon} width="20" height="20" />
                                            {speakerName}'s {social}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </article>
                </div>
            </section>


            <section className="container">
                <div className="row">
                    <article 
                        className="col-lg-8 col-12 pe-5" 
                        dangerouslySetInnerHTML={{ __html: speaker?.bio }} 
                    />

                    <figure className="col-lg-4 col-12">
                        <Image
                            src={speaker?.image.src}
                            width={400}
                            height={400}
                            alt={speakerName}
                            placeholder="blur"
                            blurDataURL={speaker?.image.blurDataURL}
                        />
                    </figure>
                </div>

                {(Array.isArray(speaker?.talks) && speaker?.talks.length) ? (
                    <>
                        <hr className="my-5" />

                        <h2 className={Utils.fs_2}>
                            {speakerName}'s TEDx Talks
                        </h2>

                        <div className="row">
                            {speaker?.talks.map((talk, index) => {
                                const videoId = talk.video.split("v=")[1]
                                const videoThumb = `https://i.ytimg.com/vi/${videoId}/hq720.jpg`

                                return(
                                    <article key={index} className="col-6 col-lg-3 col-12">
                                        <a href={talk.video} target="_blank" rel="noreferrer">
                                            <figure className={Style.talkThumb}>
                                                <Image 
                                                    src={videoThumb} 
                                                    width={480} 
                                                    height={360} 
                                                    alt={talk.title} 
                                                    className={Style.talkImage}
                                                />

                                                <figcaption className={Style.talkCaption}>
                                                    <cite className={Style.talkSpeaker}>
                                                        {speakerName}
                                                    </cite>

                                                    <strong className={Style.talkTitle}>
                                                        {talk.title}
                                                    </strong>

                                                    <small>
                                                        Posted: {talk.date}
                                                    </small>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </article>
                                )
                            })}
                        </div>
                    </>
                ):null}
                
            </section>
        </>
    )
}


export default SpeakerDetails;



export async function generateMetadata({ params }){
    const { slug } = await params
    const speaker = speakerList[slug];

    // return{
    //     title: speaker?.name,
    //     alternates: {
    //         canonical: "https://tedxgeorge.com/speakers/" + speaker?.slug,
    //     },
    //     // description: speaker.bio.replace(/(<([^>]+)>)/ig, '').substring(0, 120),
    //     openGraph: {
    //         title: speaker?.name,
    //         url: "https://tedxgeorge.com/speaker/" + speaker?.slug,
    //         siteName: 'TEDxGeorge',
    //         locale: 'en_US',
    //         type: 'website',
    //         images: [
    //             {
    //                 url: speaker?.image.src,
    //                 width: 400,
    //                 height: 400,
    //             },
    //         ],
    //     }
    // }
}