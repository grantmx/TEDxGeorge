import Utils from "@/styles/globals/utils.module.scss"
import Style from "@/app/(pages)/Page.module.scss"
import clsx from "clsx"
import { agenda } from "@/lib/agenda";
import React from "react";



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
        
            <section className="container">
            {agenda.map(item => {
                return(
                    <React.Fragment key={item.title}>
                        <div className="row">
                            <heading className="col-lg-4 col-12">
                                <h2 className={Utils.fs_2}>
                                    {item.title}
                                </h2>
                            </heading>
                            
                            <article className="col-lg-8 col-12">
                                <p>
                                    {item.description}
                                </p>
                            </article>
                        </div>

                        <hr className="my-5" />
                    </React.Fragment>
                )
            })}
            </section>
        </>
    )
}

export default EventAgenda;