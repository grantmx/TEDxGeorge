import Item from "@/components/cart/CartWidget/Item";
import Style from "@/components/registration/RegisterForm/RegisterForm.module.scss"
import clsx from "clsx";


function LookUp(){
    return(
        <section className="container d-flex flex-column align-items-center justify-content-center my-5 py-5">
            <form className="col-6 p-5">
                <p className={clsx(Style.controlGroup, "mb-2")}>
                    <input 
                        placeholder="Enter the ticket ID"
                        id="ticket_id"
                        name="ticket_id"
                        required
                        type="text" 
                        className={Style.control}
                    />
                </p>

                <button type="submit" className={clsx(Style.btn, "btn btn-danger mt-0")}>
                    Submit
                </button>
            </form>

            <aside className="col-6 p-5">
                <Item 
                    type="" 
                    canRemove={false} 
                    canEdit={false} 
                    showPrice={false}
                    {...{
                        options: []
                    }}
                />
            </aside>
        </section>
    )
}


export default LookUp;