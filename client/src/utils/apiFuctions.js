import axios from 'axios';
import { URL } from './const';
axios.defaults.baseURL = URL;

export async function getAllCountries(){
    try{
        const endpoint = '/countries';
        const countries = (await axios (endpoint)).data;
        return countries;
    } catch (error){
        return error.response.data;
    }
};


export async function getAllActivities(){
    try{
        const endpoint = '/activity/'
        const activities = (await axios (endpoint)).data;
        return activities;
    } catch (error){
        return error.response.data;
    }
};


export async function createNewActivity(activity){
    try{
        const endpoint = '/activity/';
        const newActivity = (await axios.post(endpoint, activity)).data;
        return newActivity;
    } catch (error){
        return error.response.data;
    }
};


export async function setCountryByName(name){
    try{
        const endpoint = `/countries/?name=${name}`;
        const country = (await axios (endpoint)).data;
        return country;
    } catch (error){
        return error.response.data;
    }
};


export async function setCountryById(id){
    try{
        const endpoint = `/countries/${id}`;
        const country = (await axios (endpoint)).data;
        return country;
    } catch (error){
        return error.response.data;
    }
};