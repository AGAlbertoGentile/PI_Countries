import { getAllCountries, setCountryByName } from '../utils/apiFuctions';
import { GET_ALL_COUNTRIES, FILTER_COUNTRIES, FILTER_COUNTRY_NAME, ORDER_COUNTRIES, RESET_PAGE, DECREASE_PAGE, INCREASE_PAGE, RESET_FILTER, GET_COUNTRY_NAME, SEARCH_FLAG, FILTER_COUNTRIES_BY_ACTIVITY, ADD_ACTIVITY } from './actionsTypes'


export const setAllCountries = () => {
    return async (dispatch) => {
        try {
            const countries = await getAllCountries();
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: countries,
            });
        } catch (error) {
            console.log('Server error');
        }
    };
};

export const findCountryByName = (name) => {
    return async (dispatch) => {
        try {
            const country = await setCountryByName(name);
            return dispatch({
                type: GET_COUNTRY_NAME,
                payload: country,
            });
        } catch (error) {
            console.log('Server error');
        }
    };
};

export const addActivity = (activity) => {
    console.log(activity)
    return{
        type:ADD_ACTIVITY,
        payload: activity
    }
};

export const resetCurrentPage = () => {
    return {
        type: RESET_PAGE,
    }
};

export const increasePage = () => {
    return {
        type: INCREASE_PAGE,
    }
};

export const decreasePage = () => {
    return {
        type: DECREASE_PAGE,
    }
};

export const orderCountries = (order) => {
    return {
        type: ORDER_COUNTRIES,
        payload: order
    };
};

export const filterCountries = (continents) => {
    return {
        type: FILTER_COUNTRIES,
        payload: continents
    };
};

export const filterCountriesByActivity = (activity) => {
    return {
        type: FILTER_COUNTRIES_BY_ACTIVITY,
        payload: activity
    };
};

export const resetFilters = () => {
    return {
        type: RESET_FILTER
    }
};

export const searchFlag = (value) => {
    return {
        type: SEARCH_FLAG,
        payload: value
    }
};
