import style from './form.module.css';
import useForm from '../../hooks/useForm';
import { useState, useEffect } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import { useSelector } from 'react-redux';
// import validate from '../../components/validation';


export default function Form() {

    const {
        handleSubmit,
        handleChange,
        handleClick,
        activity,
        errors
    } = useForm();

    const countries = useSelector((state) => state.allCountries);

    const flag = useSelector((state) => state.searchFlag);

    return (
        <form className={style.formContainer} onSubmit={handleSubmit}>
            <span className={style.spanValidation}>* Required fields</span>
            <label className={style.label}>Name *</label>
            <input className={style.placeholder}
                name="name"
                placeholder={"Name of the activity"}
                type="text"
                onChange={handleChange}
            />
            <p className={style.validations}>{errors.name}</p>


            <label className={style.label}>Difficulty *</label>
            <input className={style.placeholder}
                name="difficulty"
                placeholder={"Set difficulty"}
                type="number"
                onChange={handleChange}
            />
            {/* <p>{errors.difficulty}</p> */}


            <label className={style.label}>Duration *</label>
            <input className={style.placeholder}
                name="duration"
                placeholder={"Set duration"}
                type="number"
                onChange={handleChange}
            />
            <p className={style.validations}>{errors.duration}</p>


            <label className={style.label}>Season *</label>
            <select name='season' onChange={handleChange} >
                {['', 'Winter', 'Summer', 'Spring', 'Autumn'].map((season, index) =>
                    (<option key={index} value={season}>{season}</option>))};
            </select>
            {/* <p>{errors.season}</p> */}


            <label className={style.label}>Countries *</label>
            <SearchBar />

            {flag && countries?.map((country) => <div className={style.countriesOptions} key={country.id}><button className={style.buttonsCountry} type='button' onClick={() => handleClick(country.id)}>{country.name}</button></div>)}
            <p>Added countries: </p>
            <p>{activity.countries.join(" - ")}</p>
            {/* <p>{errors.countries}</p> */}
            <button className={style.button} type="submit" disabled={!activity.name ||
                !activity.difficulty ||
                !activity.duration ||
                !activity.season ||
                !activity.countries.length === 0}>Add activity</button>

        </form>
    )
};