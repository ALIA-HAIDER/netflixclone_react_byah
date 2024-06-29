import React from 'react';
import '../../../src/App.scss';
import logo from '../../../src/netflix_logo.png';
import {Link}  from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />
        <div>
          <Link to="/myList">MY List</Link>
          <Link to="/tvShows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recenyt">Recently Added</Link>
        </div>
        <IoMdSearch />



    </nav>
  )
}

export default Header
