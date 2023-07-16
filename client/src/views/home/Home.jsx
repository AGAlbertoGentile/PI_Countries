import React from 'react';
import style from './home.module.css';
import Cards from '../../components/cards/Cards';
import usePagination from '../../hooks/usePagination';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries, orderCountries, resetFilters } from '../../redux/actions';


export default function Home() {

    const {
        onClick,
        currentPage,
        maxNumOfPages,
        currentView
    } = usePagination();

    const dispatch = useDispatch();

    function handleFilter(event){
        dispatch(filterCountries(event.target.value))
    };

    function handleSort(event){
        dispatch(orderCountries(event.target.value))
    };

    function handleReset(){
        dispatch(resetFilters());
    };

    const activities = useSelector((state)=> state.activitiesCreated);

    return (
        <div>
            <div className={style.filterContainer}>
                <select onChange={handleFilter}>
                    {["All", "Europe", "Asia", "Africa", "Oceania", "Antarctica", "North America", "South America"].map((continents) =>
                        (<option value={continents}>{continents}</option>))};
                </select>
                <select onChange={handleSort}>
                    {activities?.map((activity) =>
                        (<option value={activity}>{activity}</option>))};
                </select>
                <select onChange={handleSort}>
                    {['Select order', 'A-Z', 'Z-A', 'Most populated', 'Least populated'].map((order) =>
                        (<option value={order}>{order}</option>))};
                </select>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className={style.homeContainer}>
                <Cards currentView={currentView} />
            </div>
            <div className={style.filterContainer}>
                <button name='previous' onClick={onClick}>Prev</button>
                <span> {currentPage} / {maxNumOfPages} </span>
                <button name='next' onClick={onClick}>Next</button>
            </div>
            
        </div>

    );
};