import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"


export const metadata = {
    title: "About",
    alternates: {
        canonical: "https://www.tedxgeorge.com/about",
    }
}


function AboutUs(){
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_5, "fw-light")}>
                        About
                    </h1>

                    <article>
                        <p className={Utils.fs_3}><strong>“The Brave Ones”</strong> is an attempt to celebrate the local heroes and heroines that have continuously taken brave steps in their respective fields. These individuals may not be the most recognised and acknowledged, but <strong>the impact and weight of their ideas are the centre of our attention.</strong></p>
                        <p>By creating an environment that allows them to offer us insight into their history, activities, and future aspirations through their ideas – we hope to further inspire and empower other individuals to seek their highest potential – regardless of the internal and external challenges that one continuously faces.</p>
                    </article>
                </div>
            </section>
            


            <section className="container">
                
                <hr className="my-5" />

                <div className="row">
                    <heading className="col-lg-4 col-12">
                        <h2 className={Utils.fs_2}>
                            TEDx, x = independently organized event
                        </h2>
                    </heading>

                    <article className="col-lg-8 col-12">
                        <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
                    </article>
                </div>

                <hr className="my-5" />
                 
                <div className="row">
                    <heading className="col-lg-4 col-12">
                        <h2 className={Utils.fs_2}>
                            About TED
                        </h2>
                    </heading>
                    
                    <article className="col-lg-8 col-12">
                        <p>TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.</p>

                        <p>TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the hundreds of TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, <a href="https://ed.ted.com/">animated educational lessons (TED-Ed)</a>  and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, more than 3,000 independently run <a href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx events</a> bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future. View a full list of <a href="https://www.ted.com/about/programs-initiatives">TED’s many programs and initiatives</a>.</p>

                        <p>TED is owned by a nonprofit, nonpartisan foundation. Our aim is to help create a future worth pursuing for all.</p>

                        <p>Follow TED on <a href="http://twitter.com/TEDTalks">Twitter</a>, <a href="http://www.facebook.com/TED">Facebook</a>, <a href="https://instagram.com/ted">Instagram</a>, <a href="https://www.tiktok.com/@tedtoks?lang=en">TikTok</a> and on <a href="https://www.linkedin.com/company/ted-conferences">LinkedIn</a>.</p>
                    </article>
                </div>
               
            </section>
        </>
    )
}

export default AboutUs;