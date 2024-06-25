"use client"

import { useContext, useEffect } from "react"
import { celebrationTime } from "@/lib/celebrationTime";
import { GlobalContext } from "@/contexts/GlobalContext";
import axios from "axios";
import { LocalStorage } from "@/services/LocalStorage.service";


function ConfirmationHeader({ status }){
    const [ global, _ ] = useContext(GlobalContext)

    useEffect(() => {
        if( status === "success" ){
            celebrationTime()

            if( Array.isArray(global.cart.lineItems) && global.cart.lineItems.length > 0 ){
                global.cart.lineItems.map((item) => {
                    axios.post("/api/sendEmail", {
                        subject: `🎉 Your TEDxGeorge ticket is here, ${item?.options?.first_name}!`,
                        to: item?.options?.email,
                        heading: `Hey, ${item?.options?.first_name}! 👋`,
                        first_name: item?.options?.first_name,
                        last_name: item?.options?.last_name,
                        id: item.id,
                        type: item.type,
                        message: `
                            <p>
                                View your ticket below.  We are excited to see you in October! 🎉
                            </p>
                            <p>
                                <strong>Date:</strong> October 5, 2024<br />
                                <strong>Venue:</strong> George Arts Theater<br />
                                <strong>Time:</strong> 9am - 4pm
                            </p>

                            <p>Please present your ticket <a href=${process.env.NEXT_PUBLIC_URL}/tickets/your-ticket?id=${item.id}&first_name=${item?.options?.first_name}&last_name=${item?.options?.last_name}&type=${item.type}><strong>(${item.id})</strong></a> when you check-in.
                        `
                    })  
                })

                LocalStorage.remove("TXG_cart")
            }
        }

    }, [ 
        status, 
        global.cart.lineItems 
    ])


    return null

}

export default ConfirmationHeader