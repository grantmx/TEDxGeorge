import { features, ticketList } from "@/lib/ticketList"
import Checkmark from "@/icons/Checkmark"
import Cross from "@/icons/Cross"
import Utils from "@/styles/globals/Utils.module.scss"
import clsx from "clsx"
import Style from "./TicketTable.module.scss"
import RegisterBtn from "./RegisterBtn"


function FullWidth(){
    return(
        <div className={Style.full}>
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
        </div> 
    )
}

export default FullWidth;