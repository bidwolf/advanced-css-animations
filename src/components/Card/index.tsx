import { FC, MouseEventHandler, ReactNode, useCallback, useRef, useState } from "react";
import CursorComponent from "../CursorComponent";
interface ICardProps{
    title:string
    children:ReactNode
}
const Card:FC<ICardProps>=({children,title}:ICardProps) =>{
 
    return (
        <div className="card" >
            <h1 className='card-title'>{title}</h1>
            {children}
        </div>
    );
}

export default Card;