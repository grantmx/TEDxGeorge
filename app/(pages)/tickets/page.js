import Utils from "@/styles/globals/Utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import { features, ticketList } from "@/lib/ticketList"
import Checkmark from "@/icons/Checkmark"
import Cross from "@/icons/Cross"
import RegisterBtn from "@/components/registration/RegisterBtn"


export const metadata = {
    title: "Purchase Tickets",
    alternates: {
        canonical: "https://www.tedxgeorge.com/tickets",
    }
}


function Tickets(){
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_5, "fw-light")}>
                        Purchase Tickets
                    </h1>

                    <article>
                        <p className={clsx(Utils.fs_1)}>
                            "The Brave Ones" Event Registration
                        </p>
                    </article>
                </div>
            </section>

            <section className="container">
                <div className="row align-items-start">
                    <div className="col-3">
                        <h2 className={clsx(Utils.fs_2)}>
                            Ticket Comparison
                        </h2>
                    </div>

                    {ticketList.map((ticket) => {
                        return(
                            <div className="col text-center" key={ticket.type}>
                                <h2 className={clsx(Utils.fs_4, "mb-0")}>
                                    {ticket.type}
                                </h2>
                                <small>
                                    {ticket.description}
                                </small>
                            </div>
                        )
                    })}
                </div>


                <div className="row">
                    <div className="col-3 p-0">
                        {Object.keys(features).map((feature, i) => {
                            return (
                                <div className={clsx("col p-4", (i % 2) && Style.zebraStripe, Style.cell)} key={feature}>
                                    {features[feature].title}
                                    {features[feature]?.toolTip}
                                </div>
                            )
                        })}

                        <div className={clsx(Utils.fs_2, "col p-4 m-0")} style={{ borderTop: "5px double #555"}}>
                            Ticket Price:
                        </div>
                    </div>

                    {ticketList.map((ticket) => {
                        return(
                            <div className="col p-0" key={ticket.price}>
                                {ticket.features.map((feature, i) => {
                                    return (
                                        <div 
                                            className={clsx("py-4 d-flex justify-content-center", (i % 2) && Style.zebraStripe, Style.cell)} 
                                            key={feature.title}
                                        >
                                            {feature.included ? <Checkmark /> : <Cross />}
                                        </div>
                                    )
                                })}

                                <RegisterBtn 
                                    price={ticket.priceRaw} 
                                    type={ticket.type}
                                />
                            </div>
                        )
                    })}
                </div>
            </section> 
        </>
    )
}

export default Tickets;