import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"
import TicketTable from "@/components/TicketTable"
import getTicketCount from "./getTicketCount"
import RiseLogo from "@/components/events/RiseLogo"
import Divider from "@/components/display/Divider"


export const dynamic = 'force-dynamic'


export const metadata = {
    title: "Purchase Tickets",
    alternates: {
        canonical: "https://tedxgeorge.com/tickets",
    }
}


async function Tickets(){
    const sold =  await getTicketCount()

    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={clsx(Style.heading, "p-0")}>
                    <RiseLogo horizontal />
                </div>
            </section>

            <section className="container text-center d-flex justify-content-center my-5">
                <Divider />
            </section>
            
            <TicketTable {...{ sold }} />
        </>
    )
}

export default Tickets;