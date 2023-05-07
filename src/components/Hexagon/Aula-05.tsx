import "@styles/_aula-05.scss"
import { MouseEventHandler, useCallback, useRef, useState } from "react"
import CursorComponent from "../CursorComponent"
function Hexagon() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
    const [isVisible,setVisibility]=useState(false) 
    const handlerCursorVisibility:MouseEventHandler<HTMLDivElement>=useCallback((element)=>{
        element.preventDefault()
        setVisibility(!isVisible)
    },[isVisible])
    const mouseMoveHandler:MouseEventHandler<HTMLDivElement>=useCallback((element)=>{
        element.preventDefault()
        const cardRef = divRef.current
        const target=cursorRef.current
        if(!target||!cardRef)return
        const {x: cardX,y: cardY} = cardRef.getBoundingClientRect()
        target.style.left = `${element.clientX-cardX}px` // Move the cursorComponent to the same X position of the cursor
        target.style.top = `${element.clientY-cardY}px` // Move the cursorComponent to the same Y position of the cursor
    },[cursorRef])
    return ( 
        <div className="container" onMouseMove={mouseMoveHandler} onMouseEnter={handlerCursorVisibility} onMouseLeave={handlerCursorVisibility} ref={divRef}>
                        <CursorComponent ref={cursorRef} isVisible={isVisible}/>

            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
            <div className="row">
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
                <div className="hexagon"></div>
            </div>
           
        </div>
     )
}

export { Hexagon as StrokedBlurEffect }