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


const initialState = {
    // COUNTRIES STATES
    allCountries: [],
    firstFilteredCountries: [],
    filteredCountries: [],

    // FORM STATES
    formCountries: [],

    // ACTIVITIES STATES
    allActivities: [],

    //SEARCH STATE
    searchFlag: "",

    //PAGINATION STATE
    currentPage: 1,

    // FILTERS STATES
    filtersChosen: { continentChosen: "", activityChosen: "Select activity" },
    orderChosen: ""
}

const rootReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
                firstFilteredCountries: payload,
                filteredCountries: payload,
            }
        case GET_COUNTRY_NAME:
            return {
                ...state,
                allCountries: payload,
                filteredCountries: payload
            }
        case GET_ALL_ACTIVITIES:
            if (!payload.length) console.log('No activity created in db')
            return {
                ...state,
                allActivities: payload
            }
        case RESET_PAGE:
            return {
                ...state,
                currentPage: 1
            }
        case INCREASE_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        case DECREASE_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        case SEARCH_FLAG:
            return {
                ...state,
                searchFlag: payload
            }
        case SET_FILTER:
            let countries = [...state.allCountries];

            if (payload.continentChosen !== 'All') {
                countries = state.firstFilteredCountries.filter(country => country.continents === payload.continentChosen)
            }
            if (payload.activityChosen !== "Select activity") {
                countries = countries.filter(country => country.Activities.some(activity => activity.name === payload.activityChosen))
            }
            return {
                ...state,
                filtersChosen: payload,
                filteredCountries: countries
            }
        case SET_ORDER:
            let orderArray = [...state.filteredCountries];

            if (payload === "A-Z") {
                orderArray.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
                // se podria cambiar y hacer por nombre, el 1 y -1 indican si es verdadero lo deja primero sino lo pone delante con el -1.
            } else if (payload === "Z-A") {
                orderArray.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1));

            } else if (payload === "Most populated") {
                orderArray.sort((a, b) => (b.population > a.population ? 1 : -1));
                
            } else if (payload === "Least populated") {
                orderArray.sort((a, b) => (a.population > b.population ? 1 : -1));
            }
            return {
                ...state,
                filteredCountries: orderArray,
                orderChosen: payload
            }
        // case ORDER_COUNTRIES:
        //     let orderArray = [...state.filteredCountries];

        //     if(payload === "A-Z"){
        //         orderArray.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
        //         // se podria cambiar y hacer por nombre, el 1 y -1 indican si es verdadero lo deja primero sino lo pone delante con el -1.
        //     }else if(payload === "Z-A"){
        //         orderArray.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1));
        //     }else if(payload === "Most populated"){
        //         orderArray.sort((a, b) => (b.population > a.population ? 1 : -1));
        //     }else if(payload === "Least populated"){
        //         orderArray.sort((a, b) => (a.population > b.population ? 1 : -1));
        //     }
        //     return {
        //         ...state,
        //         filteredCountries: [...orderArray],
        //     }
        // case FILTER_COUNTRIES:
        //     let countries = [...state.filteredCountries];
        //     const continents = ["All", "Europe", "Asia", "Africa", "Oceania", "Antarctica", "North America", "South America"]

        //     if(payload === 'All'){
        //         countries =  [...state.firstFilteredCountries];

        //     }else if(continents.includes(payload)){
        //         countries = state.firstFilteredCountries.filter(country => country.continents === payload)
        //     }
        //     return{
        //         ...state,
        //         filteredCountries: countries,
        //         // currentPage: 1
        //     }
        // case FILTER_COUNTRIES_BY_ACTIVITY:
        //     let allCountries = [...state.filteredCountries];

        //     let selectorActivities = ['Select activity'];

        //     state.allActivities.map((activity) => {if(!selectorActivities.includes(activity.name)){
        //         selectorActivities.push(activity.name);
        //     }});

        //     if(payload === 'Select activity'){
        //         allCountries =  [...state.firstFilteredCountries];

        //     }else if(selectorActivities.includes(payload)){
        //         allCountries = state.firstFilteredCountries.filter(country => country.Activities.some(activity => activity.name === payload))
        //     }
        //     return{
        //         ...state,
        //         filteredCountries: allCountries
        //         // currentPage: 1
        //     }
        // case RESET_FILTER:
        //     return{
        //         ...state,
        //         filteredCountries: [...state.allCountries],
        //         firstFilteredCountries: [...state.allCountries],
        //         // filtersChosen: {continentChosen: "", activityChosen: "Select activity"},
        //     }
        default:
            return state
    }
};
export default rootReducer;