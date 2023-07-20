import React from 'react';
import style from './landing.module.css';
import { Link } from 'react-router-dom';



export default function Landing (){
    return(
        <div className={style.container}>
            <Link to={"/home"}>
                <button className={style.landingButton}>Welcome</button>
            </Link>
        </div>
    );
};