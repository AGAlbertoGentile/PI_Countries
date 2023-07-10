import React from 'react';
import style from './landing.module.css';
import { Link } from 'react-router-dom';



export default function Landing (){
    return(
        <div className={style.container}>
            {/* <h1>Landing</h1> */}
            <Link to={"/home"}>
                <button>Welcome!</button>
            </Link>
        </div>
    );
};