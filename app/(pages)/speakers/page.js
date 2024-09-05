import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import { speakerList } from "@/lib/speakerList"
import sortBy from "@/lib/utils/sortBy"
import SpeakerCard from "@/components/speakers/SpeakerCard"


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

                        <p>
                            TEDxGeorge is guided by the broader TED mission to uncover and share ideas that inspire, challenge, and create impact. As we navigate a world with growing divides, our goal is to bring together a wide range of voices, encouraging dialogue and deeper understanding among our community. We believe that valuable lessons can be learned from every speaker, even when their perspectives differ from our own. Our platform is dedicated to fostering meaningful conversations between people with diverse viewpoints.
                        </p>
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


            <section className="container">
                <hr className={Utils.my_6} />

                <article className="text-center d-flex flex-column align-items-center">
                    <h3 className={Utils.fs_1}>
                        Our curation approach at TEDxGeorge
                    </h3>

                    <p className="fs-1 w-75">
                        We welcome individuals from all backgrounds, disciplines, and cultures who seek to explore new ideas and connect with others. We understand that not every curation decision will resonate with everyone, but our selections are rooted in principles that reflect our commitment to inclusively and thoughtful debate.
                    </p>              
                </article>


                <div className="row">
                    <hr className={Utils.my_6} />

                    <heading className="col-lg-4 col-12">
                        <h4 className={Utils.fs_2}>
                            We believe ideas can come from anyone
                        </h4>
                    </heading>

                    <article className="col-lg-8 col-12">
                        <p>
                            Ideas know no boundaries—they are not confined by geography, religion, politics, or culture. TEDxGeorge believes that ideas belong to everyone, regardless of skin-color, gender, identity, or social class. With a global perspective, we seek to source diverse ideas and ensure they are accessible to all. We know that powerful ideas, when shared with care, have the potential to unite different groups and build a collective vision for a better future.
                        </p>
                    </article>
                </div>      

                <div className="row">
                    <hr className={Utils.my_6} />

                    <heading className="col-lg-4 col-12">
                        <h4 className={Utils.fs_2}>
                            We value skepticism and debate
                        </h4>
                    </heading>

                    <article className="col-lg-8 col-12">
                        <p>Our talks are the beginning, not the conclusion, of discussions. TEDxGeorge values skepticism and the role it plays in refining ideas, revealing their strengths and areas for improvement. We encourage conversations after our talks as a way to gain clarity and explore how these ideas can be applied. Our commitment is to provide an open and respectful environment where vigorous debate can thrive. We reject bigotry and hate speech, instead promoting constructive conversations as a means to bridge gaps and build understanding.</p>
                        <p>By adhering to these guiding principles, TEDxGeorge remains true to TED's ethos, creating a platform where ideas can inspire, challenge, and drive positive change within our community.</p>
                            
                    </article>
                </div>                     
            </section>
        </>
    )
}

export default Speakers;