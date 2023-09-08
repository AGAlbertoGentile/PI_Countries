import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentPage } from '../redux/actions';
import * as actions from '../redux/actions';


export default function usePagination(){

    const dispatch = useDispatch();

    const filteredCountries = useSelector((state) => state.filteredCountries);
    const currentPage = useSelector((state) => state.currentPage);

    const countriesPerPages = 10;
    const maxIndex = currentPage * countriesPerPages;
    const minIndex = maxIndex - countriesPerPages;
    const currentView = filteredCountries?.slice(minIndex, maxIndex);
    const maxNumOfPages = Math.ceil(filteredCountries.length / countriesPerPages);

    
    useEffect(() => {
        dispatch(actions.searchFlag(""));
    }, [dispatch])


    function onClick(e) {
        if (e.target.name === 'previous')
            if (currentPage > 1) {
                dispatch(setCurrentPage(currentPage - 1));
            }
        if (e.target.name === 'next')
            if (currentPage < maxNumOfPages) {
                dispatch(setCurrentPage(currentPage + 1));
            }
    };

    
    return{
        onClick,
        currentPage,
        maxNumOfPages,
        currentView
    }
};