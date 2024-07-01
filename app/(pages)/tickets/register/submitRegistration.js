"use server"

import { doc } from "@/services/google/googleSheets"
import { redirect } from "next/navigation";


async function submitRegistration(registration = []){
    if(!Array.isArray(registration) && registration.length){ 
        console.error("No registration data provided")
        redirect("/404")        
    }

    try{
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        registration.forEach(async (item) => {
            const registrationItem = {}

            Object.keys(item).forEach((key) => {
                if( 
                    key !== "price" ||
                    key !== "quantity" ||
                    key !== "isDone"
                ){
                    if( key === "options" ){
                        return Object.keys(item[key]).forEach((optionKey) => {
                            registrationItem[optionKey] = item[key][optionKey]
                        })

                    }else{
                        registrationItem[key] = item[key]
                    }
                }
            })

            await sheet.addRow(registrationItem)

            console.log("Added registration")
        })


    }catch(err){
        console.error(err)
        redirect("/404") 
    }

}

export default submitRegistration