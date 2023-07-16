import { useDispatch } from 'react-redux';
import { createNewActivity } from '../utils/apiFuctions';
import { useState } from 'react';
import * as actions from '../redux/actions';




function validate(activity){
    
    const errors = {};
    const hasNumbers = /^\D*$/

    if(!hasNumbers.test(activity.name)){
        errors.name = "You can not add numbers in this field";
    }
    if(!activity.name){
        // errors.name = "This field is required";
    }
    if(!activity.difficulty){
        // errors.difficulty = "This field is required";
    }
    if(!activity.duration){
        // errors.duration = "This field is required";
    }
    if(activity.duration > 200){
        errors.duration = "The duration of the activity cannot exceed 200 minutes";
    }
    if(!activity.season){
        // errors.season = "This field is required";
    }
    if(activity.countries.length === 0){
        errors.countries = "This field is required";
    }
    return errors;
};


export default function useForm() {

    const dispatch = useDispatch();

    const [activity, setActivity] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries:[]
    });

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate({
              ...activity,
              [e.target.name]: e.target.value
            }));
    };


    function handleSubmit(event) {
        event.preventDefault();
        createNewActivity(activity);
        //aca tengo que mandar mi nueva actividad al selector filter.
        dispatch(actions.addActivity(activity.name))
        dispatch(actions.findCountryByName(""));
        dispatch(actions.searchFlag(""));
        alert('The activity was created successfully');
    };

    function handleClick(id){
        if(!activity.countries.includes(id)){
            setActivity(
                {...activity,
                countries: [...activity.countries, id]});
        }
        
    };

    return{
        handleSubmit,
        handleChange,
        handleClick,
        activity,
        errors
    }
};

