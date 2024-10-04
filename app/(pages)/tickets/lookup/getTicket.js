"use server"
import { doc } from "@/services/google/googleSheets"


async function getTicket(formData){
    try{
        await doc.loadInfo();

        const id = formData.get("ticket_id")
        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows()

        rows.map(row => {
            if(row.get("id") === id || row.get("first_name") === id || `${row.get("first_name")} ${row.get("last_name")}` === id  ){
                return{
                    id: row.get("id"),
                    type: row.get("type"),
                    title: row.get("title"),
                    first_name: row.get("first_name"),
                    last_name: row.get("last_name"),
                    email: row.get("email"),
                    phone: row.get("phone"),
                    city: row.get("city"),
                    makes_me_happy: row.get("makes_me_happy"),
                    kids_zone: row.get("kids_zone"),
                }
            }
        })

        


    }catch(err){
        console.error(err)
        return 0
    }
}

export default getTicket