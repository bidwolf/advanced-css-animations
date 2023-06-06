import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
interface ICardProps{
    lessonId:string
    title:string
    children:ReactNode
}
const Card:FC<ICardProps>=({children,title,lessonId}:ICardProps) =>{
 
    return (
        <Link to={`lesson/${lessonId}`}>
        <div className="card" >
            <h1 className='card-title'>{title}</h1>
            {children}
        </div>
        </Link>
    );
}

export default Card;