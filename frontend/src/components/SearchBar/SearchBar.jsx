import React from "react";
import './SearchBar.css'
import { GoHome,GoHomeFill  } from "react-icons/go";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SearchBar = () =>{

    const path = useLocation();
    const isOnMainPage = path.pathname == '/';
    console.log(isOnMainPage);

    return(
        <>
        <div className="search-bar-container">
            
                <div className="logo-container">
                    <Link to={`/`}>
                        <img src="/images/logo.png" alt="" />   
                    </Link>
                </div>
           
            
            <div className="center-of-sbc">
                <Link to={`/`}>
                    <button className="go-home-button" title="Go to Home">
                        {isOnMainPage? <GoHomeFill size={30}/> : <GoHome size={30}/> }
                    </button>
                </Link>

            <input type="text" className="search-input" placeholder="Search for songs, artists, albums..." />
            </div>
            
        </div>
        
        </>
    );
}

export default SearchBar