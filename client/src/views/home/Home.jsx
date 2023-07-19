import React from 'react';
import style from './home.module.css';
import Cards from '../../components/cards/Cards';
import usePagination from '../../hooks/usePagination';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries, orderCountries, resetFilters, filterCountriesByActivity, setFilter, setOrder } from '../../redux/actions';
import * as actions from '../../redux/actions';
import { useEffect, useState } from 'react';



export default function Home() {

    const dispatch = useDispatch();
    
    const allActivities = useSelector((state)=>state.allActivities);

    const filtersChosen = useSelector((state)=> state.filtersChosen);

    const orderChosen = useSelector((state)=> state.orderChosen);
    
    const [order, setLocalOrder] = useState("");

    const [filterChosenLocal, setFilterChosenLocal] = useState({continentChosen: "", activityChosen: "Select activity"});

    const {
        onClick,
        currentPage,
        maxNumOfPages,
        currentView
    } = usePagination();
    
    useEffect(()=>{
        setFilterChosenLocal(filtersChosen);
        setLocalOrder(orderChosen);
    },[filtersChosen, orderChosen])

    function handleSort(event){
        let selectorFilter = event.target.value;
        setLocalOrder(selectorFilter);
        dispatch(setOrder(selectorFilter));
    };

    function handleFilterByContinent(event){
        let selectorFilter = event.target.value;
        setFilterChosenLocal({
            ...filterChosenLocal,
            continentChosen: selectorFilter,
        })
        dispatch(setFilter({
            ...filtersChosen,
            continentChosen: selectorFilter,
        }))
        dispatch(setOrder(order)); // ACTION
    };

    function handleFilterByActivity(event){
        let selectorFilter = event.target.value;
        setFilterChosenLocal({
            ...filterChosenLocal,
            activityChosen: selectorFilter,
        })
        dispatch(setFilter({
            ...filtersChosen,
            activityChosen: selectorFilter,
        }))
        dispatch(setOrder(order)); // ACTION
    };

    function handleReset(){
        dispatch(setFilter({
            continentChosen: "All",
            activityChosen: "Select activity"
        }));
        dispatch(setOrder("Select order"))
    };

    // function handleFilters(event){
    //     setFilterChosenLocal({
    //         ...filterChosenLocal,
    //         [event.target.name]: event.target.value,
    //     })
    //     dispatch(setFilter({
    //         ...filterChosen,
    //         [event.target.name]: event.target.value,
    //     }))
    // };

    let selectorActivities = ['Select activity'];
    
    allActivities.map((activity) => {if(!selectorActivities.includes(activity.name)){
        selectorActivities.push(activity.name);
    }});


    return (
        <div>
            <div className={style.filterContainer}>
                <select value={filterChosenLocal.continentChosen} onChange={handleFilterByContinent}>
                    {["All", "Europe", "Asia", "Africa", "Oceania", "Antarctica", "North America", "South America"].map((continents) =>
                        (<option  value={continents}>{continents}</option>))};
                </select>
                <select value={filterChosenLocal.activityChosen} onChange={handleFilterByActivity}>
                    {selectorActivities?.map((activity) =>
                        (<option value={activity}>{activity}</option>))};
                </select>
                <select value={order} onChange={handleSort}>
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