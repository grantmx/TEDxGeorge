import Utils from "@/styles/globals/utils.module.scss"
import Style from "../Page.module.scss"
import clsx from "clsx"

export const metadata = {
    title: "Tickets"
}


function Tickets(){
    return(
        <>
            <section className="container text-center d-flex justify-content-center">
                <div className={Style.heading}>
                    <h1 className={clsx(Utils.fs_5, "fw-light")}>
                        Tickets
                    </h1>

                    <article>
                        <p className={clsx(Utils.fs_1)}>
                            We in the TEDx Community view our sponsors as partners who are joining us on a journey. This is a project that we're investing in together. 
                        </p>
                        <p>
                            <a href="/TEDxGeorge_Sponsors_Welcome_Guide.pdf" download={true} className="btn btn-danger fs-1 px-5">
                                Download Sponsorship Guide
                            </a>
                        </p>
                    </article>
                </div>
            </section>


            <section className={clsx("container", Utils.mb_8)}>
                <hr className={Utils.my_6} />

                <article className="text-center d-flex flex-column align-items-center">
                    <h3 className={Utils.fs_1}>
                        In-Kind Donations
                    </h3>

                    <p className="w-75 fs-1">
                        For information on how to support TEDxGeorge through in-kind donations of products or services, email <a href="mailto:info@tedxgeorge.com">info@tedxgeorge.com</a>
                    </p>
                </article>
            </section>


           
        </>
    )
}

export default Tickets;