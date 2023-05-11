import "@styles/_menuButton.scss"
import { ButtonHTMLAttributes, FunctionComponent } from "react";

type MenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
 
const MenuButton: FunctionComponent<MenuButtonProps> = (props:MenuButtonProps) => {
    return ( 
        <button
                {...props}
                className={`${props.className?props.className:""} menu-icon`}
                
                >
                <span className="menu-icon-bar"></span>
                <span className="menu-icon-bar"></span>
                <span className="menu-icon-bar"></span>
            </button>
     );
}
 
export default MenuButton;