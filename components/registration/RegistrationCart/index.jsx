"use client"

import Item from "@/components/cart/CartWidget/Item";
import Style from "./RegistrationCart.module.scss"
import { useContext, useEffect, useMemo } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";
import sortBy from "lodash/sortBy";
import clsx from "clsx";
import { registrationOptions } from "@/lib/constants";
import scrollToLocation from "@/lib/utils/scrollToLocation";
import Status from "./Status";
import { IconLock } from "@/icons/IconLock";



function RegistrationCart(){
    const [ global, dispatch ] = useContext(GlobalContext)

    
    const canCheckout = useMemo(() => {
        return global.cart.lineItems.every(item => item.isDone)
    }, [ global.cart.lineItems ])



    useEffect(() => {
        if( global.cart && !global.cart.lineItems?.[0]?.options ){
            dispatch({
                type: "editTicket",
                data: {
                    ...global.cart.lineItems[0],
                    options: {
                        ...registrationOptions
                    }
                }
            })
        }

    }, [ global.cart.lineItems[0]?.id ])



    const lineItems = useMemo(() => {
        return sortBy(global?.cart.lineItems, ["type"])
        
    }, [global?.cart.lineItems])




    function editTicket(item){
        scrollToLocation(0, 0)

        dispatch({
            type: "editTicket",
            data: {
                ...item,
                options: item.options ?? registrationOptions
            }
        })
    }


    return(
        <section className={Style.block}>
            <h2 className={Style.heading}>
                Review your ticket registration.
            </h2>

            <article className={Style.cart}>
                {Array.isArray(lineItems) && lineItems.length ? (
                    <>
                        {lineItems.map((item, index) => {
                            const { type, price, quantity, listPrice, options, id, isDone } = item;

                            return(
                                <button 
                                    type="button" 
                                    key={item.id}
                                    className={clsx(Style.editBtn, global.cart?.editTicket?.id !== id ? Style.inActive : "")}
                                    onClick={() => editTicket(item)}
                                >
                                    <Status {...{ isDone }} />

                                    <Item 
                                        canEdit={false} 
                                        canRemove={false}
                                        {...{ 
                                            type,
                                            price,
                                            quantity,
                                            listPrice,
                                            options: global.cart?.editTicket?.id === id ? global.cart?.editTicket?.options : options,
                                            id
                                        }}
                                    />
                                </button>
                            )
                        })}


                        <button 
                            type="submit" 
                            className={clsx(Style.submit, "btn btn-success")}
                            disabled={!canCheckout}
                        >
                            <IconLock width="20" height="20" fill="#fff" />
                            Continue to Payment
                        </button>
                    </>
                ):null}                
            </article>
        </section>
    )
}

export default RegistrationCart;