import Card from "@/components/display/Card";
import Style from "./CartWidget.module.scss";
import Button from "@/components/forms/Button";
import { IconLock } from "@/icons/IconLock";
import formatPrice from "@/lib/utils/formatPrice";


function Actions({ cartData }){
   

    return(
        <>
            {cartData?.total && (
                <Card className={Style.actions}>
                    
                        <ul className={Style.subtotal}>
                            {/* <li className={Style.totalItem}>
                                <span>Shipping</span>
                                <span>R 0.00</span>
                            </li> */}
                            
                            <li className={Style.totalItem}>
                                <strong>Subtotal</strong>
                                <strong>{formatPrice(cartData.total)}</strong>
                            </li>
                        </ul>
                    
                    

                    <div className={Style.buttonRow}>
                        {/* <Button 
                            variant="outline" 
                            type="link" 
                            href="/cart" 
                            size="full"
                        >
                            Review Cart
                        </Button> */}

                        <Button 
                            size="full"
                            onClick={() => window.location.href = ""}
                        >
                            <IconLock width="20" height="20" fill="#fff" />
                            Secure Checkout
                        </Button>
                    </div>
                </Card>
            )}
        </>
    )
}

export default Actions;