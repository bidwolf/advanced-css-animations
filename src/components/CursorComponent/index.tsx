import "@styles/_aula-05.scss"
import { forwardRef } from "react";
interface ICursorComponentProps{
    isVisible:boolean
}
const CursorComponent=forwardRef<HTMLDivElement,ICursorComponentProps>(({isVisible}:ICursorComponentProps,ref) =>{
    return ( <div id="cursor" className={!isVisible?"invisible":""} ref={ref}></div> );
})

export default CursorComponent;