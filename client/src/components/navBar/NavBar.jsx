import React from 'react';
import style from './navBar.module.css';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import { useLocation } from 'react-router-dom';


export default function NavBar (){

    const location = useLocation();
    return(
        <div className={style.container}>
            <Link to={"/home"}>
                <button>Home</button>
            </Link>
            <Link to={"/form"}>
                <button>Create Activity</button>
            </Link>
            <Link to={"/"}>
                <button>Log Out</button>
            </Link>
            {location.pathname === "/home" && <SearchBar />}
        </div>
    );
};