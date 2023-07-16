import React from 'react';
import Card from '../card/Card'
import style from './cards.module.css';
import { useSelector } from 'react-redux';


export default function Cards ({currentView}){

    const countries = currentView;

    return(
        <div className={style.cardsContainer}>
            {countries?.map((country)=> (
                <Card key={country.id} country={country} />
            ))}
        </div>
    );
};