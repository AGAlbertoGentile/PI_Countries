import React from 'react';
import style from './home.module.css';
import Cards from '../../components/cards/Cards';



export default function Home (){
    return(
        <div className={style.container}>
            <Cards/>
        </div>
    );
};