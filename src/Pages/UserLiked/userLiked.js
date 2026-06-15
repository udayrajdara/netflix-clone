import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import { getUserLikedMovies } from '../Store';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseAuth } from '../Utils/firebase.confg';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Cards from '../../Components/Cards/cards';
import './UserLiked.css'

export default function UserLiked() {
    const movies = useSelector((state)=> state.netflix.movies);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const[email, setEmail] = useState(undefined);

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth, (currentUser)=>{
            if(currentUser) setEmail(currentUser.email);
            else navigate("/signin")
    });
    },[])
    

    useEffect(()=>{
        if(email){
            dispatch(getUserLikedMovies(email))
        }
    },[email])

    const[isScrolled, setIsScrolled] = useState(false)

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=> (window.onscroll = null);
    }


    useEffect(()=>{
        document.title = 'Netflix';

        document.querySelector('meta[name="description"]')
        .setAttribute('content', 'List of Netflix original programming · 1 Drama · 2 Comedy · 3 Kids & family · 4 Animation. 4.1 Adult animation; 4.2 Anime; 4.3 Kids & family · 5 Non-English language ...');
    },[])


    return (
        <div className='userliked-container'>
            <div>
                <Navbar isScrolled={isScrolled}/>
            </div>

            <div className='content flex column'>
                <div className='userliked-title'>My List</div>
                <div className='grid-style flex'>
                    {movies.map((movie, index)=> {
                        return (
                        <Cards 
                        movieData={movie} 
                        index={index} 
                        key={movie.id} 
                        isLiked={true}/>)
                    })}
                </div>
            </div>
        </div>
    );
};
