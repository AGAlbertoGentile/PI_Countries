import { GET_ALL_COUNTRIES, FILTER_COUNTRIES, FILTER_COUNTRY_NAME, ORDER_COUNTRIES, RESET_PAGE, INCREASE_PAGE, DECREASE_PAGE, RESET_FILTER, GET_COUNTRY_NAME, SEARCH_FLAG, FILTER_COUNTRIES_BY_ACTIVITY, ADD_ACTIVITY } from './actionsTypes'



const initialState = {
    allCountries: [],
    firstFilteredCountries: [],
    filteredCountries: [],
    formCountries: [],
    activitiesCreated: [],
    searchFlag: "",
    currentPage: 1
}

const rootReducer = (state= initialState, action)=>{
    const {payload, type} = action;

    switch(type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries:payload,
                firstFilteredCountries:payload,
                filteredCountries:payload,
            }
        case GET_COUNTRY_NAME:
            return{
                ...state,
                allCountries: payload,
                filteredCountries: payload
            }
        case ADD_ACTIVITY:
            return{
                ...state,
                activitiesCreated: payload
            }
        case RESET_PAGE:
            return{
                ...state,
                currentPage: 1
            }
        case INCREASE_PAGE:
            return{
                ...state,
                currentPage: state.currentPage + 1
            }
        case DECREASE_PAGE:
            return{
                ...state,
                currentPage: state.currentPage - 1
            }
        case ORDER_COUNTRIES:
            let orderArray = [...state.filteredCountries];
            
            if(action.payload === "A-Z"){
                orderArray.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
                // se podria cambiar y hacer por nombre, el 1 y -1 indican si es verdadero lo deja primero sino lo pone delante con el -1.
            }else if(action.payload === "Z-A"){
                orderArray.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1));
            }else if(action.payload === "Most populated"){
                orderArray.sort((a, b) => (b.population > a.population ? 1 : -1));
            }else if(action.payload === "Least populated"){
                orderArray.sort((a, b) => (a.population > b.population ? 1 : -1));
            }
            return {
                ...state,
                filteredCountries: [...orderArray],
            }
        case FILTER_COUNTRIES:
            let countries = [...state.filteredCountries];
            const continents = ["All", "Europe", "Asia", "Africa", "Oceania", "Antarctica", "North America", "South America"]

            if(action.payload === 'All'){
                countries =  [...state.firstFilteredCountries];

            }else if(continents.includes(action.payload)){
                countries = state.firstFilteredCountries.filter(country => country.continents === payload)
            }
            return{
                ...state,
                filteredCountries: countries,
                // currentPage: 1
            }
        case FILTER_COUNTRIES_BY_ACTIVITY:
            let countryWithActivity = [...state.filteredCountries]
            const allCountries = [...state.allCountries];

            if(allCountries.some(action.payload)){
                countryWithActivity = state.firstFilteredCountries.filter(country => country.activity === payload)
            }
            return{
                ...state,
                filteredCountries: countryWithActivity,
                // currentPage: 1
            }
        case RESET_FILTER:
            return{
                ...state,
                filteredCountries: [...state.allCountries],
                firstFilteredCountries: [...state.allCountries]
            }
        case SEARCH_FLAG:
            return{
                ...state,
                searchFlag: payload
            }   
    default: 
        return state
    }
};
export default rootReducer;