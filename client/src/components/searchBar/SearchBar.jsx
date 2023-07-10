import React from 'react';
import style from './searchBar.module.css';



export default function SearchBar (){
    return(
        <div className={style.container}>
            <input type='text' name='input' placeholder='Search Country'/>
            <button>Search</button>
        </div>
    );
};