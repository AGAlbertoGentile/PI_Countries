import { Link } from "react-router-dom";
import style from './card.module.css';


export default function Card({country}) {
    const {id, name, flags} = country;
    return(
        <div className={style.cardContainer}>
            <Link to={`/detail/${id}`}>
            <img className={style.img} src={flags} alt='country flag'/>
            <h1 className={style.cardTitle}>{name}</h1>
            </Link>
        </div>
    )
}