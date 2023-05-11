import "@styles/_navbar.scss"
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuButton from "../MenuButton";

function Navbar() {
    const [isHidden,setHidden]=useState(false)
    const ulRef = useRef<HTMLUListElement>(null)
    const toggleMenuHandler:MouseEventHandler<HTMLButtonElement>=()=>{
        const toggleButton = document.getElementById("navbar-toggle")
        setHidden(!isHidden)
        toggleButton?.setAttribute("aria-expanded",isHidden?"false":"true")
    }
    const onClickOutside=(el:MouseEvent)=>{
        const isOutsideClick = ulRef.current && !ulRef.current.contains(el.target as Node) && (ulRef.current.getAttribute("id")!==(el.target as Element).getAttribute("aria-controls") )
        if(isOutsideClick){
                setHidden(false)
            }
    }
    useEffect(() => {
        const target= ulRef.current
        if(!target)return
        document.addEventListener("mousedown",onClickOutside)
        return () => {
            document.removeEventListener("mousedown",onClickOutside)
        }
    }, [ulRef]);
    return ( 
        <header>
        <nav className="navbar">
            <Link to={"/"} ><div className="navbar-logo"></div></Link>
            <MenuButton
                type="button"
                id="navbar-toggle"
                aria-controls="navbar-menu"
                aria-label="Toggle-menu"
                aria-expanded={isHidden}
                onClick={toggleMenuHandler}
            />
            
            <ul className="navbar-menu" role="menubar" id="navbar-menu"aria-hidden={isHidden} ref={ulRef}>
                <li className="navbar-menu-item">
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
                <li className="navbar-menu-item">
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
                <li className="navbar-menu-item">
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
                <li className="navbar-menu-item">
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
     );
}

export default Navbar;