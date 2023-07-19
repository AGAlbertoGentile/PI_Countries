import { getAllActivities, getAllCountries, setCountryByName } from '../utils/apiFuctions';
import {
    GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    FILTER_COUNTRIES,
    ORDER_COUNTRIES,
    RESET_PAGE, DECREASE_PAGE,
    INCREASE_PAGE, RESET_FILTER,
    GET_COUNTRY_NAME, SEARCH_FLAG,
    FILTER_COUNTRIES_BY_ACTIVITY,
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

// export const orderCountries = (order) => {
//     return {
//         type: ORDER_COUNTRIES,
//         payload: order
//     };
// };

// export const filterCountries = (continents) => {
//     return {
//         type: FILTER_COUNTRIES,
//         payload: continents
//     };
// };

// export const filterCountriesByActivity = (activity) => {
//     return {
//         type: FILTER_COUNTRIES_BY_ACTIVITY,
//         payload: activity
//     };
// };

// export const resetFilters = () => {
//     return {
//         type: RESET_FILTER
//     }
// };

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
