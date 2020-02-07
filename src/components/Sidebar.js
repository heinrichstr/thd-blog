import React from 'react';
import { Link } from "gatsby";

export default (props) => {
    return(
        <aside className="sidebarContainer">
            <h2>Useful Links</h2>
            <section>
                <Link to="/">
                    Featured Article
                </Link>
            </section>
            <section>
                <Link to="/">
                    Recommended Reading <br/>
                    <span>(get your art book recommendations here)</span>
                </Link>
            </section>
            <section>
                <Link to="">
                    What I Use to Draw and Paint
                </Link>
            </section>
        </aside>
    )
}