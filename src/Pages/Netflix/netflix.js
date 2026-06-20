import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import './Netflix.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMovies, getGenres } from '../Store';
import Slider from '../Slider/slider';

export default function Netflix() {

    const navigate = useNavigate()

    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=> state.netflix.movies);
    const dispatch = useDispatch()



    useEffect(()=>{
        dispatch(getGenres())
    },[])



    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type: "all" }))
    },[genresLoaded])

    const[isScrolled, setIsScrolled] = useState(false)

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=> (window.onscroll = null);
    }

    useEffect(()=>{
        document.title = 'Home - Netflix UI Clone | React Project';

        document.querySelector('meta[name="description"]')
        .setAttribute('content', 'What is Netflix? Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of ...');
    }, [])

    
    return (
        <div className='netflix-container-bar'>
            <div className='netflix-navbar'>
            <Navbar isScrolled={isScrolled}/>
            </div>

            <div className='netflix-header-section'>
                <img src='https://pbs.twimg.com/media/DtlnBv6W0AIZVk6.jpg' 
                alt='background'
                className='background-image'/>

                <div className='netflix-header-container'>
                    <div className='logo'>
                        <img src='https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQcM1EQpxGhYngt8xSKJbCMv1rykMJc0vpjIp9Uxyd5K75OhUtt14pt8yzAH_JIbkRnstFCxOtPajO0bDp1BdkXYqSY2wjuKNIujKPbZ-pU.webp?r=aea'
                        alt='movie-logo'/>

                        <div className='netflix-buttons'>
                            <button className='netflix-btn1' onClick={()=> navigate("/Player")}><i class="fa-solid fa-play"></i> Play</button>
                            <button className='netflix-btn2'><i class="fa-solid fa-circle-info"></i> More info</button>
                        </div>
                    </div>
                </div>

            </div>
            

            <div className="slider-section">
            <Slider movies={movies}/>
            </div>
        </div>
    );
};

