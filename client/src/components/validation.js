// import useForm from "../hooks/useForm";

//que el nombre de la actividad no pueda contener números, o que la duración no pueda exceder determinado valor '120'


// export default function validate(activity){
    
//     const errors = {};
//     const hasNumbers = /^\D*$/

//     if(hasNumbers.test(activity.name)){
//         errors.name = "You can not add numbers in this field";
//     }
//     if(!activity.name){
//         errors.name = "This field is required";
//     }
//     if(!activity.difficulty){
//         errors.name = "This field is required";
//     }
//     if(!activity.duration){
//         errors.name = "This field is required";
//     }
//     if(activity.duration <= 200){
//         errors.name = "The duration of the activity cannot exceed 200 minutes";
//     }
//     // if(selectedOption === ""){
//     //     errors.name = "This field is required";
//     // }
//     if(!activity.countries){
//         errors.name = "This field is required";
//     }
//     return errors;
// };