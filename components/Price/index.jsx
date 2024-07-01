
import formatPrice from "@/lib/utils/formatPrice";
import Style from './Price.module.scss';
import Badge from "@/components/display/Badge";
import clsx from "clsx";


function Price({ value, listPrice, size, showSaleFlag = false }){
    return(
        <span itemProp="price" className={Style.block} suppressHydrationWarning>
            <div className={Style.priceRow}>
                <span className={clsx(Style[size], Style.price)}>
                    {formatPrice(value)}
                </span>

                {showSaleFlag && (
                    <Badge variant="square" className={Style.badge} color="red">
                        -{Math.round((value/listPrice)*100)}% Off
                    </Badge>
                )}
            </div>
            

            {listPrice ? (
                <span className={Style.listPrice}>
                    List price: <strike>{formatPrice(listPrice)}</strike>
                </span>
            ):null}
        </span>
    )
}

export default Price;