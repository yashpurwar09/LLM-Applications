import header from '../css/header.module.css'
import { Outlet, Link, NavLink } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header className={header.header}>
                <nav className={header.nav}>
                    <ul className={header.ul}>
                        <li className={header.li}><NavLink to="/chatbot" className={header.a} href='#'>Chat Bot</NavLink></li>
                        <li className={header.li}><Link to="/rag" className={header.a} href='#'>RAG Application</Link></li>
                        <li className={header.li}><Link to="/LangConverter" className={header.a} href='#'>Language Converter</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}