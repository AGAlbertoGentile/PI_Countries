import { Link } from "react-router-dom";
import style from './card.module.css';


export default function Card({country}) {
    const {id, name, flags, continents, capital} = country;
    return(
        <div className={style.cardContainer}>
            <Link to={`/detail/${id}`}>
            <h1>{name}</h1>
            <img src={flags} alt='country flag'/>
            <h2>{capital}</h2>
            <span>{continents}</span>
            </Link>
        </div>
    )
}