import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>DLibrary, short for Digital Library, is a virtual treasure trove of knowledge and information that's just a click away. It's like having a world of resources at your fingertips, accessible through your devices and the internet.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header