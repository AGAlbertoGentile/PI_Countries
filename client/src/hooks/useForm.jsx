import { useDispatch } from 'react-redux';
import { createNewActivity } from '../utils/apiFuctions';
import { useEffect, useState } from 'react';
import * as actions from '../redux/actions';




function validate(activity) {

    const errors = {};
    const hasNumbers = /^\D*$/

    if (!hasNumbers.test(activity.name)) {
        errors.name = "You can not add numbers in this field";
    }
    if (!activity.name) {
        errors.fieldInput = "This field is required";
    }
    if (!activity.difficulty) {
        errors.fieldInput = "This field is required";
    }
    if (activity.difficulty !== "" && (activity.difficulty < 1 || activity.difficulty > 5)){
        errors.difficulty = "Grades must be between 1 and 5"
    }
    if (!activity.duration) {
        errors.fieldInput = "This field is required";
    }
    if (activity.duration > 24) {
        errors.duration = "The duration of the activity cannot exceed 24 hours";
    }
    if (!activity.season || activity.season === 'Choose season') {
        errors.fieldInput = "This field is required";
    }
    if (activity.countries.length === 0) {
        errors.fieldInput = "This field is required";
    }
    return errors;
};


export default function useForm() {

    const dispatch = useDispatch();

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "Choose season",
        countries: [],
    });

    const [errors, setErrors] = useState({})

    useEffect(()=>{
        setErrors(validate(activity));
    },[activity]);


    function handleChange(e) {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        })
    };

    function handleSubmit(event) {
        event.preventDefault();
        const formatNameActivity = activity.name.charAt(0).toUpperCase() + activity.name.slice(1);
        const outputActivity = {
            ...activity,
            name: formatNameActivity
        }
        createNewActivity(outputActivity)
        setActivity({
            name: "",
            difficulty: "",
            duration: "",
            season: "Choose season",
            countries: [],
        });
        dispatch(actions.findCountryByName(""));
        dispatch(actions.searchFlag(""));
    };

    function handleClick(name) {
        if (!activity.countries.includes(name)) {
            setActivity(
                {
                    ...activity,
                    countries: [...activity.countries, name]
                });
        } else {
            window.alert('Country is allready selected')
        }
    };

    function handleDeleteClick(country) {
        let filterChooseCountries = activity.countries.filter((element) => element !== country)
        
        setActivity({
            ...activity,
            countries: filterChooseCountries
        })
    };

    return {
        handleSubmit,
        handleChange,
        handleClick,
        handleDeleteClick,
        activity,
        errors
    }
};

