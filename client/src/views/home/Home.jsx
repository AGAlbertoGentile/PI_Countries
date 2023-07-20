import React from 'react';
import style from './home.module.css';
import Cards from '../../components/cards/Cards';
import usePagination from '../../hooks/usePagination';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setOrder, setCurrentPage } from '../../redux/actions';
import * as actions from '../../redux/actions';
import { useEffect, useState } from 'react';


export default function Home() {

    const dispatch = useDispatch();
    
    const allActivities = useSelector((state)=>state.allActivities);

    const filtersChosen = useSelector((state)=> state.filtersChosen);

    const orderChosen = useSelector((state)=> state.orderChosen);
    
    const [order, setLocalOrder] = useState("");

    const [filterChosenLocal, setFilterChosenLocal] = useState({continentChosen: "", activityChosen: "All activities"});

    const {
        onClick,
        currentPage,
        maxNumOfPages,
        currentView
    } = usePagination();
    

    useEffect(() => {
        dispatch(actions.setAllCountries())
        .then(()=> dispatch(setFilter(filtersChosen)))
        .then(()=> dispatch(setOrder(orderChosen)));
        dispatch(actions.setAllActivities());
    }, []);

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
        dispatch(setOrder(order));
        dispatch(setCurrentPage(1));
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
        dispatch(setOrder(order));
        dispatch(setCurrentPage(1));
    };

    function handleReset(){
        dispatch(setFilter({
            continentChosen: "All",
            activityChosen: "All activities"
        }));
        dispatch(setOrder("Select order"))
    };


    let selectorActivities = ['All activities'];
    
    allActivities.forEach((activity) => {if(!selectorActivities.includes(activity.name)){
        selectorActivities.push(activity.name);
    }});


    return (
        <div>
            <div className={style.filterContainer}>
                <div className={style.selectComponents}>
                    <select className={style.selectFilters} value={filterChosenLocal.continentChosen} onChange={handleFilterByContinent}>
                        {["All", "Europe", "Asia", "Africa", "Oceania", "Antarctica", "North America", "South America"].map((continents) =>
                            (<option  value={continents}>{continents}</option>))};
                    </select>
                </div>
                <div className={style.selectComponents}>
                <select className={style.selectFilters} value={filterChosenLocal.activityChosen} onChange={handleFilterByActivity}>
                    {selectorActivities?.map((activity) =>
                        (<option value={activity}>{activity}</option>))};
                </select>
                </div>
                <div className={style.selectComponents}>
                <select className={style.selectFilters} value={order} onChange={handleSort}>
                    {['Select order', 'A-Z', 'Z-A', 'Most populated', 'Least populated'].map((order) =>
                        (<option value={order}>{order}</option>))};
                </select>
                </div>
                <button className={style.buttonReset} onClick={handleReset}>Reset filters</button>
            </div>
            <div className={style.homeContainer}>
                <Cards currentView={currentView} />
            </div>
            <div className={style.paginationContainer}>
                <button name='previous' className={style.pageButtons}onClick={onClick}>Prev</button>
                <label className={style.pageNumbers}> {currentPage} / {maxNumOfPages} </label>
                <button name='next' className={style.pageButtons} onClick={onClick}>Next</button>
            </div>
            
        </div>

    );
};