import "@styles/_aula-05.scss"

import { useEffect, useRef, useCallback} from "react";
function CursorComponent() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const mouseMoveHandler=useCallback((element:MouseEvent)=>{
        element.preventDefault();
        const target=cursorRef.current
        if(!target)return
        target.style.left = `${element.clientX}px` // Move the cursorComponent to the same X position of the cursor
        target.style.top = `${element.clientY}px` // Move the cursorComponent to the same Y position of the cursor
    },[cursorRef])
    useEffect(() => {
        const target = cursorRef.current
        if(target){
            window.onmousemove=(mouseMoveHandler)
        }
        return ()=>{
            // cleanup function
            window.onmousemove=null
        }
    }, [cursorRef,mouseMoveHandler]);
    return ( <div id="cursor" ref={cursorRef}></div> );
}

export default CursorComponent;