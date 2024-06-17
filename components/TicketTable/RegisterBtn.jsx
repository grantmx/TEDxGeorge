"use client"

import Price from "@/components/Price";
import useCartWidget from "@/components/cart/_hooks/useCartWidget";
import { GlobalContext } from "@/contexts/GlobalContext";
import { LocalStorage } from "@/services/LocalStorage.service";
import { useContext } from "react";
import Style from "./TicketTable.module.scss"
import generateID from "@/lib/utils/generateID";



function RegisterBtn({ price, type, quantity = 1 }){
    const [ _, dispatch ] = useContext(GlobalContext);
    const cart = useCartWidget()

    function register(){
        const id = generateID()

        LocalStorage.addToStorage("TXG_cart", { type, price, quantity, id })

        dispatch({
            type: "addToCart",
            data: {
                type,
                price,
                quantity,
                id
            }
        })

        cart.open()
    }


    return(
        <div 
            className="py-4 d-flex align-items-center flex-column" 
            style={{ borderTop: "5px double #555"}}
        >
            <span className={Style.price}>
                <Price value={price} />
            </span>

            <button 
                type="button" 
                className="btn btn-success py-2 px-4 fs-2"
                onClick={register}
            >
                Register Now
            </button>
        </div>
    )
}

export default RegisterBtn;