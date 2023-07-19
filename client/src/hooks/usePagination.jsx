import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { decreasePage, increasePage } from '../redux/actions';
import * as actions from '../redux/actions';



export default function usePagination(){

    const dispatch = useDispatch();

    const filteredCountries = useSelector((state) => state.filteredCountries);
    const currentPage = useSelector((state) => state.currentPage);
    const countriesPerPages = 10;
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(10);
    const [currentView, setCurrentView] = useState([]);
    const [maxNumOfPages, setMaxNumOfPages] = useState(1);

    useEffect(() => {
        setMinIndex((currentPage - 1) * countriesPerPages);
        setMaxIndex(currentPage * countriesPerPages);
        // dispatch(actions.findCountryByName(""));
        dispatch(actions.searchFlag(""));
    }, [])

    
    useEffect(() => {
        setCurrentView(filteredCountries?.slice(minIndex, maxIndex));
        setMaxNumOfPages(Math.ceil(filteredCountries.length / countriesPerPages));
    }, [filteredCountries, currentPage]);


    function onClick(e) {
        if (e.target.name === 'previous')
            if (currentPage > 1) {
                dispatch(decreasePage());
                setMinIndex(minIndex - countriesPerPages);
                setMaxIndex(maxIndex - countriesPerPages);
            }
        if (e.target.name === 'next')
            if (currentPage < maxNumOfPages) {
                dispatch(increasePage());
                setMinIndex(minIndex + countriesPerPages);
                setMaxIndex(maxIndex + countriesPerPages);
            }
    };

    
    return{
        onClick,
        currentPage,
        maxNumOfPages,
        currentView
    }
};