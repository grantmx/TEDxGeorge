"use client"

import Card from "@/components/display/Card";
import Style from "./CartItem.module.scss";
import Image from "next/image";
import { IconTrash } from "@/icons/IconTrash";
import Price from "@/components/Price";
import Quantity from "@/components/Quantity";
import streamingImg from "@/public/streaming-ticket.png"
import vipImg from "@/public/vip-ticket.png";
import generalImg from "@/public/general-ticket.png";
import generalPlusImg from "@/public/general-plus.png";
import { useContext, useMemo } from "react";
import { LocalStorage } from "@/services/LocalStorage.service";
import { GlobalContext } from "@/contexts/GlobalContext";


function Item({ type, price, quantity }){
    const [ state, dispatch ] = useContext(GlobalContext);


    function removeItem(item){
        LocalStorage.removeFromStorage("TXG_cart", item)

        const newCart = { ...state.cart }

        newCart.total -= item.price;
        newCart.lineItems = newCart.lineItems.filter(i => i.type !== item.type)

        dispatch({
            type: "setCart",
            data: newCart
        })
    }



    const imgUrl = useMemo(() => {
        switch(type){
            case "General":
                return generalImg
            case "General +":
                return generalPlusImg
            case "VIP":
                return vipImg
            case "Streaming":
                return streamingImg
            default:
                return generalImg
        }
    })


    return(
        <Card className={Style.block}>
            <Image 
                src={imgUrl} 
                width={100} 
                height={100} 
                alt={type} 
                className={Style.image}
            />

            <div className={Style.details}>
                <p className={Style.title}>
                    Ticket type: {type}
                </p>

                <div className={Style.priceRow}>
                    <Quantity 
                        qty={quantity} 
                        size="sm"
                        onChange={(qty) => console.log(qty)}
                    />

                    <Price value={price} size="sm" />

                    <button 
                        type="button" 
                        className={Style.removeBtn}
                        onClick={() => removeItem({ type, price, quantity })}
                    >
                        <IconTrash width="25" height="25" fill="#fff" />
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default Item;