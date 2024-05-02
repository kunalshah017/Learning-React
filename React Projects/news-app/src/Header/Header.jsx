import React from 'react';
import { useState } from 'react';
import "./Header.css";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

const Header = ({ FetchNews }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchQuery.trim() === "") {
            alert("Please enter a search query");
            return;
        }
        FetchNews(searchQuery);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit();
        }
    };

    return (
        <header id="nav">
            <h1 className="logo">
                <HiOutlineNewspaper />
                NewsBox
            </h1>
            <div className="search">
                <input type="text" placeholder="Search for news" id='News-Search' value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} />
                <button onClick={handleSearchSubmit}><FaSearch /></button>
            </div>
        </header >
    );
};

export default Header;
