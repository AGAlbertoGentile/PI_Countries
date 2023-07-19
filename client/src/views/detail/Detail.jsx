import { useEffect, useState } from 'react';
import style from '../detail/detail.module.css';
import { useParams } from 'react-router-dom';
import { setCountryById } from '../../utils/apiFuctions';
import { useDispatch, useSelector } from 'react-redux';



export default function Detail() {

    const dispatch = useDispatch();

    const allActivities = useSelector((state)=> state.allActivities)

    const { idPais } = useParams();

    const [country, setCountry] = useState({});
    const [activity, setActivity] = useState([]);

    let matchActivities = allActivities.filter(element => element.countries.includes(idPais)); 

    useEffect(() => {
        const countryData = async () => {
            const country = await setCountryById(idPais);
            setCountry(country);
            setActivity(matchActivities);
        };
        countryData();
    }, []);


    return (
        <div className={style.detailContainer}>
            <h2 className={style.countryTitle}>{country.name}</h2>
            <img className={style.countryFlag} src={country.flags} alt='country flag' />
            <h2 className={style.countryInfo}>Continent: {country.continents}</h2>
            <h2 className={style.countryInfo}>Capital: {country.capital}</h2>
            <h2 className={style.countryInfo}>Population: {country.population}</h2>
            <h2 className={style.countryInfo}>Google Maps: {country.maps}</h2>
            <h2 className={style.countryInfo}>Activities:{activity?.map((activity) => (
                <div key={activity.id}>
                  <h2 className={style.countryInfo}>Name: {activity.name}</h2>
                  <h2 className={style.countryInfo}>Difficulty: grade {activity.difficulty}</h2>
                  <h2 className={style.countryInfo}>Duration: {activity.duration}  minutes</h2>
                  <h2 className={style.countryInfo}>Season: {activity.season}</h2>
                </div>
                ))}
                {!activity.length && <p>No activities found</p>}
            </h2>
        </div>
    )
};