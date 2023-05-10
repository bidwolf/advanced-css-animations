import "@styles/_home.scss"
import { Outlet, Link, NavLink } from "react-router-dom";

function Root() {
    return (
        <>
        <header>
        <nav className="navbar">
            <h1 id="course"><Link to={"/"} >Awesome-css-animation-course</Link></h1>
            <ul className="navbar-list">
                <li className="navbar-list-item">
                    <NavLink
                        to={"section/1"} 
                        className={({ isActive, isPending }) =>
                            `btn btn-link ${
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                        `
                    }>Section 1
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink to={"section/2"} 
                        className={({ isActive, isPending }) =>
                            `btn btn-link ${
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                        `
                    }>Section 2
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink to={"section/3"} 
                        className={({ isActive, isPending }) =>
                            `btn btn-link ${
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                        `
                    }>Section 3
                    </NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink to={"section/4"} 
                        className={({ isActive, isPending }) =>
                            `btn btn-link ${
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                        `
                    }>Section 4
                    </NavLink>
                </li>
            </ul>
        </nav>
        </header>
        <main id="main">
            <Outlet/>
        </main>
        <footer id="footer">
            <h3>Created with &#128154; by Henrique de Paula Rodrigues</h3>
        </footer>
        </>
     );
}

export default Root;