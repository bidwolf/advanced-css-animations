import { FC, Key, ReactNode } from "react";
import { Link } from "react-router-dom";
interface ICardProps{
    title:string
    children:ReactNode
}
const Card:FC<ICardProps>=({children,title}:ICardProps) =>{
 
    return (
        <Link to={`lesson/${title}`}>
        <div className="card" >
            <h1 className='card-title'>{title}</h1>
            {children}
        </div>
        </Link>
    );
}

export default Card;