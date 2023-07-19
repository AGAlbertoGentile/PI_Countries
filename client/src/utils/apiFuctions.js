import axios from 'axios';


export async function getAllCountries(){
    const endpoint = 'http://localhost:3001/countries';

    const countries = (await axios (endpoint)).data;
    if(!countries) throw Error ('Error bringing countries from server');
    return countries;
};


export async function getAllActivities(){
    const endpoint = 'http://localhost:3001/activity/'

    const activities = (await axios (endpoint)).data;
    
    if(!activities) throw Error ('No activity created in db');
    return activities;
};


export async function createNewActivity(activity){

    const endpoint = 'http://localhost:3001/activity/';
    
    const newActivity = (await axios.post(endpoint, activity)).data;
    return newActivity;
};


export async function setCountryByName(name){
    const endpoint = `http://localhost:3001/countries/?name=${name}`;

    const country = (await axios (endpoint)).data;
    if(!country) throw Error ('Error bringing country from server');
    return country;
};


export async function setCountryById(id){
    const endpoint = `http://localhost:3001/countries/${id}`;

    const country = (await axios (endpoint)).data;
    if(!country) throw Error ('Error bringing country by id from server');
    return country;
};