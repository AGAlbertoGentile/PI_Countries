import { useEffect, useState } from 'react';
import style from '../detail/detail.module.css';
import { useParams } from 'react-router-dom';
import { setCountryById } from '../../utils/apiFuctions';



export default function Detail() {

    const {idPais} = useParams();

    const[country, setCountry] = useState({});
    
    useEffect(() => {
        const countryData = async () => {
          const country = await setCountryById(idPais);
          setCountry(country);
      };
      countryData();
    }, []);

    
    return (
        <div className={style.detailContainer}> 
            <h2 className={style.countryTitle}>{country.name}</h2>
            <img className={style.countryFlag}src={country.flags} alt='country flag'/>
            <h2 className={style.countryInfo}>Continent: {country.continents}</h2>
            <h2 className={style.countryInfo}>Capital: {country.capital}</h2>
            <h2 className={style.countryInfo}>Population: {country.population}</h2>
            {/* <h2 className={style.countryInfo}>Activities: {country.Activities?.maps((activity)=> activity.name)}</h2> */}
            <h2 className={style.countryInfo}>Google Maps: {country.maps}</h2>
        </div>
    )
};