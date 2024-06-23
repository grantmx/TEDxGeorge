import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import TicketTable from "@/components/TicketTable"



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

            <TicketTable />
        </>
    )
}

export default Tickets;