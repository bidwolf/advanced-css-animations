import { FC, MouseEventHandler, ReactNode, useCallback, useRef } from "react";
import CursorComponent from "../CursorComponent";
interface ICardProps{
    title:string
    children:ReactNode
}
const Card:FC<ICardProps>=({children,title}:ICardProps) =>{
    const cursorRef = useRef<HTMLDivElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
    
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
        <div className="card" onMouseMove={mouseMoveHandler} ref={divRef}>
            <CursorComponent ref={cursorRef}/>
            <h1 className='card-title'>{title}</h1>
            {children}
        </div>
    );
}

export default Card;