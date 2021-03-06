import React from "react"
import { Link } from "gatsby"

export default props => {
    return (
        <aside className="sidebarContainer">
            <h2>Useful Links</h2>
            <section>
                <Link to="./drawing-leaves/">Featured Article--Drawing Leaves</Link>
            </section>
            <section>
                <a href="#">
                    Recommended Reading <br />
                    <span>(COMING SOON)</span>
                </a>
            </section>
            <section>
                <a href="#">
                    What I Use to Draw and Paint<br />
                    <span>(COMING SOON)</span>
                </a>
            </section>
            {/* <hr />
            <section>
                <i>Email Signup Placeholder</i>
            </section> */}
        </aside>
    )
}
