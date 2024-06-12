import Item from "./Item";
import Actions from "./Actions";
import WidgetBody from "@/components/display/WidgetBody";
import Style from "./CartWidget.module.scss";
import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";
import Card from "@/components/display/Card";

function CartWidget(){
    const [ global, _ ] = useContext(GlobalContext)

    return(
        <WidgetBody actions={<Actions cartData={global?.cart} />} noCard className={Style.content}>
            {Array.isArray(global?.cart.lineItems) && global?.cart.lineItems.length ? (
                <>
                    {global.cart.lineItems.map((item, index) => {
                        const { type, price, quantity } = item;

                        return(
                            <Item 
                                key={item.type +"_"+ index}
                                {...{ 
                                    type,
                                    price,
                                    quantity
                                }}
                            />
                        )
                    })}
                </>
            ):(
                <Card className={Style.empty}>
                    <h3>No tickets in your cart</h3>
                </Card>
            )}          
        </WidgetBody>
    )
}

export default CartWidget;