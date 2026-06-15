import React, { useEffect } from 'react';
import video from '../images/Aquaman.mp4'
import { useNavigate } from 'react-router-dom';
import './Player.css'
import { useSelector } from 'react-redux';

export default function Player () {

    const navigate = useNavigate()
    const movies = useSelector((state)=> state.netflix.movies);
    console.log(movies)

  
    useEffect(()=>{
        document.title = 'Netflix';
    }, [])

    return (
        <div className='netflix-player-container'>
            <div className='netflix-player'>
                <div className='player-back-button'>
                    <i class="fa-solid fa-arrow-left-long" onClick={()=> navigate(-1)}></i>
                </div>
                    <video src={video} autoPlay loop controls></video>
            </div>

            <div className="movie-details">
                <div className="title"></div>
            </div>
        </div>
    );
};
