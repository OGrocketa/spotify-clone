import React from "react";
import './SearchBar.css'
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";


const SearchBar = () =>{
    return(
        <>
        <div className="search-bar-container">
            <div className="logo-container">
                <img src="/images/logo.png" alt="" />   
            </div>

            <Link to={`/`}>
                <button className='go-home-button'>
                    <GoHome size={30}/>
                </button>
            </Link>
            

            <input type="text" className="search-input" placeholder="Search for songs, artists, albums..." />

            
        </div>
        
        </>
    );
}

export default SearchBar