import { useEffect, useState } from 'react';
import style from '../detail/detail.module.css';
import { useParams } from 'react-router-dom';
import { setCountryById } from '../../utils/apiFuctions';
import { useDispatch, useSelector } from 'react-redux';



export default function Detail() {

    const dispatch = useDispatch();

    const allActivities = useSelector((state) => state.allActivities)

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
        return () => {
            setCountry({});
            setActivity([]);
        };
    }, []);


    return (
        <div className={style.detailContainer}>
            <label className={style.countryTitle}>{country.name}</label>
            <div className={style.infoContainer}>
                <div className={style.Info}>
                    <img className={style.countryFlag} src={country.flags} alt='country flag' />
                    <h2 className={style.countryInfoMap}><a href={country.maps} target="_blank">View in google maps</a></h2>
                </div>
                <div className={style.InfoCenter}>
                    <h2 className={style.countryInfo}>ID: {country.id}</h2>
                    <h2 className={style.countryInfo}>Capital: {country.capital}</h2>
                    <h2 className={style.countryInfo}>Continent: {country.continents}</h2>
                    <h2 className={style.countryInfo}>Population: {country.population}</h2>
                    <h2 className={style.countryInfo}>Subregion: {country.subRegion}</h2>
                    <h2 className={style.countryInfo}>Area: {country.area}</h2>
                </div>
                <div className={style.Info}>
                    <h2 className={style.countryInfo}>{activity?.map((activity) => (
                        <div className={style.activity}key={activity.id}>
                            <h2 className={style.countryInfo}>Name: {activity.name}</h2>
                            <h2 className={style.countryInfo}>Difficulty: grade {activity.difficulty}</h2>
                            <h2 className={style.countryInfo}>Duration: {activity.duration}  hrs</h2>
                            <h2 className={style.countryInfo}>Season: {activity.season}</h2>
                        </div>
                    ))}
                        {!activity.length && <p className={style.activity}>No activities found</p>}
                    </h2>
                </div>
            </div>
        </div>
    )
};