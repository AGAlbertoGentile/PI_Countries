import { Link } from "react-router-dom";
import style from './card.module.css';


export default function Card({country}) {
    const {id, name, flags, continents} = country;
    return(
        <div className={style.cardContainer}>
            <Link to={`/detail/${id}`}>
            <h1 className={style.cardTitle}>{name}</h1>
            <img className={style.img} src={flags} alt='country flag'/>
            <span className={style.cardInformation}>{continents}</span>
            </Link>
        </div>
    )
}