import { getAllActivities, getAllCountries, setCountryByName } from '../utils/apiFuctions';
import {
    GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    SET_PAGE,
    GET_COUNTRY_NAME, SEARCH_FLAG,
    SET_FILTER,
    SET_ORDER
} from './actionsTypes'


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

export const setAllActivities = () => {
    return async (dispatch) => {
        try {
            const activities = await getAllActivities();
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: activities
            })
        } catch (error) {
            console.log('Server error')
        }
    }
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

export const setCurrentPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
};

export const searchFlag = (value) => {
    return {
        type: SEARCH_FLAG,
        payload: value
    }
};

export const setFilter = (allFilters) => {
    return {
        type: SET_FILTER,
        payload: allFilters
    }
};

export const setOrder = (order) => {
    return {
        type: SET_ORDER,
        payload: order
    }
};
