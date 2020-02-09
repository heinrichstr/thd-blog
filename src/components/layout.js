import React from "react"
import { Link } from "gatsby"
import Sidebar from "./Sidebar"
import Logo from "../../content/assets/logo.svg"

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
        header = (
            <h1>
                <Link to={`/`}>{title}</Link>
            </h1>
        )
    } else {
        header = (
            <h3>
                <Link to={`/`}>{title}</Link>
            </h3>
        )
    }
    return (
        <div className="mainContainer">
            <header className="headerContainer">
                <Link to="/">
                    <Logo className="headerLogo" />
                </Link>
            </header>
            <div className="bodyContainer">
                <main className="contentContainer">{children}</main>
                <Sidebar />
            </div>
        </div>
    )
}

export default Layout
