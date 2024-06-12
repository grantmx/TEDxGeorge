"use client"

import Price from "@/components/Price";
import useCartWidget from "@/components/cart/_hooks/useCartWidget";
import { GlobalContext } from "@/contexts/GlobalContext";
import { LocalStorage } from "@/services/LocalStorage.service";
import Utils from "@/styles/globals/Utils.module.scss"
import { useContext } from "react";



function RegisterBtn({ price, type, quantity = 1 }){
    const [ state, dispatch ] = useContext(GlobalContext);
    const cart = useCartWidget()

    function register(){
        LocalStorage.addToStorage("TXG_cart", { type, price, quantity })

        dispatch({
            type: "addToCart",
            data: {
                type,
                price,
                quantity
            }
        })

        cart.open()
    }


    return(
        <div 
            className="py-4 d-flex align-items-center flex-column" 
            style={{ borderTop: "5px double #555"}}
        >
            <span className={Utils.fs_2}>
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