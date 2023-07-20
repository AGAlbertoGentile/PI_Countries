import {
    GET_ALL_COUNTRIES,
    GET_ALL_ACTIVITIES,
    SET_PAGE,
    GET_COUNTRY_NAME, SEARCH_FLAG,
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
    filtersChosen: { continentChosen: "", activityChosen: "All activities" },
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
        case SET_PAGE:
            return {
                ...state,
                currentPage: payload
            }
        case SEARCH_FLAG:
            return {
                ...state,
                searchFlag: payload
            }
        case SET_FILTER:
            let countries = [...state.allCountries];

            if (payload.continentChosen !== 'All' && payload.continentChosen !== '') {
                countries = state.firstFilteredCountries.filter(country => country.continents === payload.continentChosen)
            }
            if (payload.activityChosen !== "All activities" && payload.activityChosen !== '') {
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
        default:
            return state
    }
};
export default rootReducer;