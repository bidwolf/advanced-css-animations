import "@styles/_aula-05.scss"
import { forwardRef } from "react";
const CursorComponent=forwardRef<HTMLDivElement>((_props,ref) =>{
    
    return ( <div id="cursor" ref={ref}></div> );
})

export default CursorComponent;