"use client"


import Image from "next/image";
import logo from "@/public/TEDx_Logo_Short_George-white.svg"
import Style from "./YourTicket.module.scss"
import { useContext } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import { QRCode } from "react-qrcode-logo";


function YourTicket(){
    const [ global, _ ] = useContext(GlobalContext)

    return(
        <div className={Style.row}>
            {global.cart.lineItems.map((item) => {
                return <Ticket key={item.id} {...{ item }} />
            })}
        </div>
    )
}


export function Ticket({ item}){
    return(
        <article className={Style.block}>
            <header className={Style.header}>
                <Image 
                    src={logo} 
                    alt="TEDxGeorge Logo" 
                    width={300} 
                    height={75}
                />
            </header>

            <div className={Style.body}>
                <h2 className={Style.name}>
                    {item.options.first_name} {item.options.last_name}
                </h2>

                <QRCode 
                    className={Style.qr}
                    value={item.id}
                />

                <h2 className={Style.type}>
                    {item.type}
                </h2>
            </div>
        </article>
    )
}


export default YourTicket;