import React from 'react';
import './SearchMovie.css'

const SearchList = ({results}) => {
    return (
        <div className='search-list-bar'>
            <img className='search-list-image' src={`https://image.tmdb.org/t/p/w500${results.image}`} alt={results.name} />
            <div className="search-list-title">{results.name}</div>
        </div>
    );
};

export default SearchList;