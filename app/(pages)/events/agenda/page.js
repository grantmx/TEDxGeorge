import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import { agenda } from "@/lib/agenda";
import React from "react";

export const dynamic = 'force-static'


function EventAgenda(){
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_1)}>
                       Agenda
                    </h1>
                </div>
            </section>
        
            <section className="container d-flex flex-column align-items-center">
                {agenda.map(item => {
                    return(
                        <div className="col-lg-10 col-12" key={item.title}>
                            <div className="row px-4 mt-5 pb-5">
                                <header className="col-lg-6 col-12">
                                    <h2 className={clsx(Utils.fs_2, "mb-0")}>
                                        {item.title}
                                    </h2>
                                    
                                    <p>
                                        {item.start} - {item.end} CAT
                                    </p>
                                </header>
                                
                                <article className="col-lg-6 col-12">
                                    <p>
                                        {item.description}
                                    </p>
                                </article>


                                {item.speakers && (
                                    <aside className="row g-4 mt-0">
                                        {item.speakers.map(speaker => {
                                            return(
                                                <div className="col-lg-4 col-6" key={speaker?.slug}>
                                                    <p className={Style.speakerBox}>
                                                        <strong>{speaker?.first_name} {speaker?.last_name}</strong><br/>
                                                        <small>{speaker?.organization}</small>
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </aside>
                                )}
                            </div>

                            <hr className="my-5" />
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default EventAgenda;