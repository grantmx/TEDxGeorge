import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import Image from "next/image";
import hero from "@/public/temp-backdrop-womenevent.webp"
import mobileHero from "@/public/shift-concept-design.png"
import clsx from "clsx";
import { speakerList } from "@/lib/speakerList"
import sortBy from "@/lib/utils/sortBy"
import SpeakerCard from "@/components/speakers/SpeakerCard"
import HostCard from "@/components/speakers/HostCard"


export const metadata = {
    title: "Rise",
    alternates: {
        canonical: "https://tedxgeorge.com/events/rise",
    },
    openGraph: {
        title: 'Rise - 2026: TEDxGeorge',
    }
}



async function Rise(){    
    const speakers = sortBy(Object.values(speakerList), "last_name")
        .filter((speaker) => speaker.active.some((activeYear) => activeYear === 2026));

    const hosts = sortBy(Object.values(speakerList), "last_name")
        .filter((speaker) =>  speaker?.presenter && speaker.presenter.some((presenterYear) => presenterYear === 2026));
        

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
                    <h1 className={clsx(Utils.fs_5, "fw-light")}>
                        Rise 2026 &nbsp;&nbsp;|&nbsp;&nbsp; August 8, 2026 &nbsp;&nbsp;|&nbsp;&nbsp; Fancourt
                    </h1>

                    <article>
                        <p className={clsx(Utils.fs_3, Utils.mb_2)}>
                            This year’s event celebrates women who refuse to be defined by circumstance, limitation, or inherited narratives. These are the women who rise — again and again — not by accident, but by intention.
                        </p>

                        <p>This gathering is for the thinkers, makers, disruptors, storytellers, healers, builders, and everyday heroes whose courage stretches far beyond their own lives. Through bold ideas, untold stories, and lived experiences, our speakers will explore what rising looks like across identity, leadership, culture, innovation, wellness, justice, and community.
                            Join us as we reimagine.As we rebuild.As we rise.</p>
                    </article>
                </div>
            </section>

            <section className="container mb-5">                
                <div className="row mt-4">
                    {speakers.map((speaker) => {
                        return <SpeakerCard {...speaker} key={speaker?.slug} />
                    })}
                </div>
            </section>


            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h2 className={Style.header}>
                        Session Hosts
                    </h2>
                </div>
            </section>

            <section className="container mb-5">                
                <div className="row mt-4">
                    {hosts.map((host) => {
                        return <HostCard {...host} key={host?.slug} />
                    })}
                </div>
            </section>


            
        </>
    )
}

export default Rise;