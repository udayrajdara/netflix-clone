import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../Store';
import Slider from '../Slider/slider';
import NotAvailable from '../../Components/NotAvailable/notAvailable';
import SelectGenres from '../../Components/SelectGenres/selectGenres';
import './TVShows.css'

export default function TVShows() {

    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=> state.netflix.movies);
    const genres = useSelector((state)=> state.netflix.genres);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGenres())
    },[])

    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({ type: "movies" }))
    },[genresLoaded])


    const[isScrolled, setIsScrolled] = useState(false)

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=> (window.onscroll = null);
    }


    useEffect(()=>{
        document.title = 'TV Shows - Netflix UI Clone | React Project';

        document.querySelector('meta[name="description"]')
        .setAttribute('content', 'TV Sci-Fi & Horror · Stranger Things · Supernatural · Manifest · All of Us Are Dead · Chilling Adventures of Sabrina · Dracula · Black Lightning · Supergirl ...');
    },[])

    return (
        <div className='tvshows-container'>
            <div className='tvshows-navbar'>
                <Navbar isScrolled={isScrolled}/>
            </div>

            <div className='tvshows-data'>
                <div className='tvshows-title-section flex a-center'>
                <div className='tvshows-title'>TV Shows</div>
                <SelectGenres genres={genres} type="movie"/>
                </div>
                {
                    movies.length ? <Slider movies={movies}/> : <NotAvailable/>
                }
            </div>
        </div>
    );
};
