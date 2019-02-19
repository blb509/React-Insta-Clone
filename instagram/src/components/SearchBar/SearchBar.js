import React from 'react';
import './SearchBar.css';

function SearchBar() {

    return(
        <div className= "SearchBar">
            <div className="logo">
                <i class="fab fa-instagram  fa-2x"></i>
                <div className="line"></div>
                <img className= "instaName" src= {require(`./IGname.png`)} alt="insta"/>
            </div>
            <div className='form'>
                <input type ="text" name="Search" placeholder="Search"></input>
            </div>
            <div className="icons">
                <i class="far fa-compass fa-lg"></i>
                <i class="far fa-heart fa-lg"></i>
                <i class="far fa-user fa-lg"></i>
            </div>
        </div>
    );
}


export default SearchBar;