import Card from "@/components/display/Card";
import Style from "./CartWidget.module.scss";
import Button from "@/components/forms/Button";
import formatPrice from "@/lib/utils/formatPrice";


function Actions({ cartData }){
    return(
        <>
            {cartData?.total ? (
                <Card className={Style.actions}>
                    <ul className={Style.subtotal}> 
                        <li className={Style.totalItem}>
                            <strong>Subtotal</strong>
                            <strong>{formatPrice(cartData.total)}</strong>
                        </li>
                    </ul>
                    

                    <div className={Style.buttonRow}>
                        <Button 
                            size="full"
                            onClick={() => window.location.href = "/tickets/register"}
                        >
                            Go to registration
                        </Button>
                    </div>
                </Card>
            ):null}
        </>
    )
}

export default Actions;