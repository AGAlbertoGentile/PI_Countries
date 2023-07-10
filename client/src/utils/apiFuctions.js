import axios from 'axios';


export async function setAllCountries(){
    const endpoint = 'http://localhost:3001/countries';

    const countries = (await axios (endpoint)).data;
    if(!countries) throw Error ('Error bringing countries from server');
    return countries;
}