import Style from "./Footer.module.scss"
import logo from "@/public/TEDx_Logo_Short_George-white.svg"
import Image from "next/image";
import Link from "next/link";


function Footer(){
    return(
        <footer className={Style.block}>
            <section className="container d-flex flex-column flex-lg-row">

                <div className="col d-flex flex-column mb-5 mb-lg-0">
                    <Link href="/" className={Style.linkCntr}>
                        <Image src={logo} alt="TEDxGeorge Logo" width={200} height={50} />
                    </Link>

                    <small className="lead lh-2">
                        This independent TEDx event is operated under license from TED.
                    </small>
                </div>

                <nav className="col align-items-end d-flex flex-column">
                    <menu className="list-inline d-flex justify-content-end mb-3 w-100">
                        <li className="me-4">
                            <a title="find us on facebook" href="https://www.facebook.com/profile.php?id=61556394653005" className={Style.iconLink}>
                                <svg id="icon-facebook2" viewBox="0 0 32 32" className={Style.icon}>
                                    <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
                                </svg>
                            </a>
                        </li>

                        <li className="me-4">
                            <a title="find us on instagram" href="https://www.instagram.com/tedxgeorge/" className={Style.iconLink}>
                                <svg id="icon-instagram" viewBox="0 0 32 32" className={Style.icon}>
                                    <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                                    <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                                    <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a title="find us on linked-in" href="https://www.linkedin.com/company/tedxgeorge/mycompany/?viewAsMember=true" className={Style.iconLink}>
                                <svg id="icon-linkedin" viewBox="0 0 32 32" className={Style.icon}>
                                    <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
                                </svg>
                            </a>
                        </li>
                    </menu>


                    <menu className="list-inline d-flex h3 justify-content-end w-100">
                        <li>
                            <Link href="/events" className="me-4">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/speakers" className="me-4">
                                Speakers
                            </Link>
                        </li>
                        <li>
                            <Link href="/partners" className="me-4">
                                Partners
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/tickets">
                                Tickets
                            </Link>
                        </li> */}
                    </menu>
                    
                </nav>
            </section>
        </footer>
    )
}

export default Footer;