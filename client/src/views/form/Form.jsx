import style from './form.module.css';
import useForm from '../../hooks/useForm';
import SearchBar from '../../components/searchBar/SearchBar';
import { useSelector } from 'react-redux';


export default function Form() {

    const {
        handleSubmit,
        handleChange,
        handleClick,
        handleDeleteClick,
        activity,
        errors
    } = useForm();

    const countries = useSelector((state) => state.allCountries);
    
    const flag = useSelector((state) => state.searchFlag);
    
    return (
        <form className={style.formContainer} onSubmit={handleSubmit}>
            <div className={style.filtersContainer}>
                <span className={style.spanValidation}>* Required fields</span>
                <label className={style.label}>Name *</label>
                <input className={style.inputForm}
                    name="name"
                    value={activity.name}
                    placeholder={"Name of the activity"}
                    type="text"
                    onChange={handleChange}
                />
                <p className={style.validations}>{errors.name}</p>

                <label className={style.label}>Difficulty *</label>
                <input className={style.inputForm}
                    name="difficulty"
                    value={activity.difficulty}
                    placeholder={"Set difficulty"}
                    type="number"
                    onChange={handleChange}
                />
                <p className={style.validations}>{errors.difficulty}</p>

                <label className={style.label}>Duration *</label>
                <input className={style.inputForm}
                    name="duration"
                    value={activity.duration}
                    placeholder={'Set duration (hours)'}
                    type="number"
                    onChange={handleChange}
                />
                <p className={style.validations}>{errors.duration}</p>

                <label className={style.label}>Season *</label>
                <select className={style.selectForm}name='season' value={activity.season} onChange={handleChange} >
                    {['Choose season', 'Winter', 'Summer', 'Spring', 'Autumn'].map((season, index) =>
                        (<option key={index} value={season}>{season}</option>))};
                </select>
                {/* <p>{errors.season}</p> */}

                <label className={style.label}>Countries *</label>
                <button className={style.button} type="submit" disabled={Object.keys(errors).length}>Add activity</button>

                <label className={style.label}>Choosen countries</label>
                {activity.countries?.map((country, index) => <div key={index}><button  type='button' className={style.countriesChoosen}onClick={() => handleDeleteClick(country)}>{country}</button></div>)}

                {/* <p>{activity.countries.join(" - ")}</p> */}
                <p>{errors.countries}</p>

            </div>
            
            <div className={style.optionsCountriesContainer}>
                <label className={style.label}>Choose countries</label>
                <SearchBar />
                {flag && countries?.map((country) => <div key={country.id}><button  type='button' className={style.countriesOptions} onClick={() => handleClick(country.name)}>{country.name}</button></div>)}
                
            </div>
        </form>
    )
};