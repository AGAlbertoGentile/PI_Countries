import axios from 'axios';


export async function getAllCountries(){
    try{
        const endpoint = 'http://localhost:3001/countries';
        const countries = (await axios (endpoint)).data;
        return countries;
    } catch (error){
        return error.response.data;
    }
};


export async function getAllActivities(){
    try{
        const endpoint = 'http://localhost:3001/activity/'
        const activities = (await axios (endpoint)).data;
        return activities;
    } catch (error){
        return error.response.data;
    }
};


export async function createNewActivity(activity){
    try{
        const endpoint = 'http://localhost:3001/activity/';
        const newActivity = (await axios.post(endpoint, activity)).data;
        return newActivity;
    } catch (error){
        return error.response.data;
    }
};


export async function setCountryByName(name){
    try{
        const endpoint = `http://localhost:3001/countries/?name=${name}`;
        const country = (await axios (endpoint)).data;
        return country;
    } catch (error){
        return error.response.data;
    }
};


export async function setCountryById(id){
    try{
        const endpoint = `http://localhost:3001/countries/${id}`;
        const country = (await axios (endpoint)).data;
        return country;
    } catch (error){
        return error.response.data;
    }
};