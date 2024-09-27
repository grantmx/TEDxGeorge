"use client"

import Price from "@/components/Price";
import useCartWidget from "@/components/cart/_hooks/useCartWidget";
import { GlobalContext } from "@/contexts/GlobalContext";
import { LocalStorage } from "@/services/LocalStorage.service";
import { useContext } from "react";
import Style from "./TicketTable.module.scss"
import generateID from "@/lib/utils/generateID";
import { IconPlus } from "@/icons/IconPlus";
import clsx from "clsx";


// check to lookup how many types of tickets are currently in Google Sheets
// if it exceeds the amount allocated then disable the button

function RegisterBtn({ 
    price, 
    type, 
    quantity = 1, 
    discount = null,
    sold = 0, 
    isSoldOut = false 
}){
    const [ _, dispatch ] = useContext(GlobalContext);
    const cart = useCartWidget()


    function register(){
        const id = generateID()

        LocalStorage.addToStorage("TXG_cart", { 
            type, 
            price: discount ? price * discount : price, 
            quantity, 
            id 
        })

        dispatch({
            type: "addToCart",
            data: {
                type,
                price: discount ? price * discount : price,
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
                <Price 
                    showSaleFlag={!!discount}
                    listPrice={price}
                    value={discount ? Math.floor(price * discount) : price} 
                />
            </span>

            <button 
                type="button" 
                className={clsx(isSoldOut ? "btn-secondary" : "btn-success", "btn  py-2 px-4 fs-2 d-flex align-items-center justify-content-center")}
                onClick={register}
                disabled={isSoldOut}
            >
                {isSoldOut ? "Sold Out" : (
                    <>
                        <IconPlus width={24} height={24} fill="#fff" />
                        Add Ticket
                    </>
                )}
            </button>
        </div>
    )
}

export default RegisterBtn;