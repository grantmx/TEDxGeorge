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
                            Register

                            <svg id="icon-arrow_right_alt" viewBox="0 0 24 24" width={50} height={50} fill="#fff">
                                <path d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                            </svg>
                        </Button>
                    </div>
                </Card>
            ):null}
        </>
    )
}

export default Actions;