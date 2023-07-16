import React from 'react';
import style from './searchBar.module.css';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';


export default function SearchBar() {

    const dispatch = useDispatch();

    function inputHandler(e) {
        e.preventDefault();
        const input = e.target.value;
        dispatch(actions.findCountryByName(input.trim()));
        dispatch(actions.searchFlag(input.trim()));
    };

    
    return (
        <div className={style.container}>
            <input type='text'
                placeholder='Search Country'
                onChange={inputHandler} />
        </div>
    );
};