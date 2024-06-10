import Image from 'next/image';
import Style from "./Header.module.scss"
import logo from "@/public/TEDx_Logo_Short_George-white.svg"
import Link from "next/link";
import clsx from 'clsx';

function Header(){
    return(
        <header className={clsx(Style.block, "container")}>
            <Link href="/" className={Style.logoCntr}>
                <Image 
                    src={logo} 
                    alt="TEDxGeorge Logo" 
                    width={350} 
                    height={75}
                    className={Style.logo}
                />
            </Link>
            

            <nav className={Style.nav}>
                <menu className="list-inline d-flex h3 align-items-center mb-0 justify-content-between w-100">
                    <li className="me-4 me-lg-5">
                        <Link href="/events" className="p-1">
                            Events
                        </Link>
                    </li>
                    <li className="me-4 me-lg-5">
                        <Link href="/speakers" className="p-1">
                            Speakers
                        </Link>
                    </li>
                    <li className="me-4 me-lg-5">
                        <Link href="/partners" className="py-1">
                            Partners
                        </Link>
                    </li>
                    <li className="me-4 me-lg-5">
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/tickets" className="btn btn-danger px-4 py-3">
                            <span className="h3">
                                Tickets
                            </span>
                        </Link>
                    </li>
                </menu>
            </nav>
        </header>
    )
}

export default Header;