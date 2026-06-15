import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../Store';
import Slider from '../Slider/slider';
import NotAvailable from '../../Components/NotAvailable/notAvailable';
import SelectGenres from '../../Components/SelectGenres/selectGenres';
import './Movies.css'

export default function Movies() {

    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=> state.netflix.movies);
    const genres = useSelector((state)=> state.netflix.genres);
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getGenres())
    },[])

    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type: "movies" }))
    }, [genresLoaded])

    const[isScrolled, setIsScrolled] = useState(false)

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=> (window.onscroll = null);
    }


    useEffect(()=>{
        document.title = 'Movies - Netflix';

        document.querySelector('meta[name="description"]')
        .setAttribute('content', 'Action Comedy Movies · The Adam Project · The Man from Toronto · Murder Mystery 2 · The Out-Laws · Thunder Force · Shazam! Fury of the Gods · Birds of Prey (And ...');
    },[])


    return (
        <div className='movies-container'>
            <div className='movies-navbar'>
                <Navbar isScrolled={isScrolled}/>
            </div>

            <div className='movies-data'>
            <div className='movies-title-section flex a-center'>
                <div className='movies-title'>Movies</div>
                <SelectGenres genres={genres} type="movie"/>
            </div>

                {
                    movies.length ? <Slider movies={movies}/> : <NotAvailable/>
                }
            </div>
        </div>
    );
};
