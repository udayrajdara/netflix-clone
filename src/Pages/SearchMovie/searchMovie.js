import React, { useEffect, useState } from 'react'

import './SearchMovie.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMovies, getGenres } from '../Store';
import SearchList from './searchlist';

export default function SearchMovie({results}) {
  // const[isHovered, setIsHovered] = useState(false);

    useEffect(()=>{
        document.title = 'Netflix UI Clone | React Project'
    },[])



  return (
      <div className='search-movie-container'>
          <div className="search-movie-flex">
          {
            results.map((results, id)=>{
              return <SearchList results={results} key={id}/>
            })
          }
          </div>
      </div>
  )
}
