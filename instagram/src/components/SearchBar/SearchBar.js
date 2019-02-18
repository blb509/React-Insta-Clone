import React from 'react';
import './SearchBar.css';
import Form from 'react-bootstrap/Form';

function SearchBar() {

    return(
        <div className= "SearchBar">
            <div className="logo">
                <i class="fab fa-instagram  fa-2x"></i>
                <div className="line"></div>
                <img className= "instaName" src= {require(`./IGname.png`)} alt="insta"/>
            </div>
            <div className='form'>
                <Form>
                    <Form.Control  placeholder="Search" />
                </Form>
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