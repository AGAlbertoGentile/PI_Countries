import { setAllCountries } from '../utils/apiFuctions';
import { GET_ALL_COUNTRIES, FILTER_COUNTRIES, ORDER_COUNTRIES } from './actionsTypes'


export const getAllCountries = () => {
    try{
        return async (dispatch) => {
            const countries = await setAllCountries();
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: countries,
            });
        };
    } catch (error){
        console.log('Server error');
    };
};