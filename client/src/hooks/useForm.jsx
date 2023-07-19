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
    if (activity.duration > 200) {
        errors.duration = "The duration of the activity cannot exceed 200 minutes";
    }
    if (!activity.season) {
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
        season: "",
        countries: []
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
        console.log(formatNameActivity)
        const outputActivity = {
            ...activity,
            name: formatNameActivity
        }
        createNewActivity(outputActivity)
            .then(() => dispatch(actions.setAllActivities()));

        dispatch(actions.findCountryByName(""));
        dispatch(actions.searchFlag(""));
        setActivity({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        });
    };

    function handleClick(id) {
        if (!activity.countries.includes(id)) {
            setActivity(
                {
                    ...activity,
                    countries: [...activity.countries, id]
                });
        } else {
            window.alert('Country is allready selected')
        }
    };

    return {
        handleSubmit,
        handleChange,
        handleClick,
        activity,
        errors
    }
};

