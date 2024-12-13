import React from "react";
import './SearchBar.css'

const SearchBar = () =>{
    return(
        <>
        <div className="search-bar-container">
            <div className="logo-container">
                <img src="/images/logo.png" alt="" />   
            </div>

            <input type="text" className="search-input" placeholder="Search for songs, artists, albums..." />

            
        </div>
        
        </>
    );
}

export default SearchBar