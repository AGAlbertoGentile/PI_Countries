import { GET_ALL_COUNTRIES, FILTER_COUNTRIES, ORDER_COUNTRIES } from './actionsTypes'



const initialState = {
    allCountries: [],
    filteredCountries: [],
}

const rootReducer = (state= initialState, action)=>{
    const {payload, type} = action;

    switch(type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries:payload,
                filteredCountries:payload,
            }
    
    default: 
        return state
    }
}
export default rootReducer;