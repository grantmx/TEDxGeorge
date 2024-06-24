"use client"

import { useContext, useEffect } from "react"
import { celebrationTime } from "@/lib/celebrationTime";
import { GlobalContext } from "@/contexts/GlobalContext";
import axios from "axios";


function ConfirmationHeader({ status }){
    const [ global, _ ] = useContext(GlobalContext)

    useEffect(() => {
        if( status === "success" ) celebrationTime()

        if( Array.isArray(global.cart.lineItems) && global.cart.lineItems.length > 0 ){
            global.cart.lineItems.map((item) => {
                axios.post("/api/sendEmail", {
                    subject: `🎉 Your TEDxGeorge ticket is enclosed, ${item?.options?.first_name}!`,
                    to: item?.options?.email,
                    heading: `Hey, ${item?.options?.first_name}! 👋`,
                    first_name: item?.options?.first_name,
                    last_name: item?.options?.last_name,
                    id: item.id,
                    message: `
                        <p>
                            Your ticket is below.  We are excited to see you soon! 🎉
                        </p>
                        <p>
							<strong>Date:</strong> October 5, 2024<br />
							<strong>Venue:</strong> George Arts Theater<br />
							<strong>Time:</strong> 9am - 4pm
						</p>

                        <p>Please present your QR code and Ticket ID <strong>(${item.id})</strong> when you check-in.
                    `
                })  
            })
        }

    }, [ 
        status, 
        global.cart.lineItems 
    ])


    return null

}

export default ConfirmationHeader