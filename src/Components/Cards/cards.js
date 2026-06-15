import React, { useState } from 'react';
import video from '../../Pages/images/CastawayDiva.mp4'
import './Cards.css'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { firebaseAuth } from '../../Pages/Utils/firebase.confg';
import { useDispatch } from 'react-redux';
import { removeFromLikedMovies } from '../../Pages/Store';

export default React.memo( function Cards({movieData, isLiked = false}) {
    const[isHovered, setIsHovered] = useState(false);
    const[email, setEmail] = useState(undefined)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(currentUser){
            setEmail(currentUser.email);
        } else{
            navigate("/signin")
        }
    })

    const addToList = async ()=>{
        try{
            await axios.post("https://netflix-api-9k8a.onrender.com/api/user/add", {
                email,
                data:movieData,
            })
        } catch(err){
            console.log(err)
        }
    }

    

    return (
        <div className='cards-container' onMouseMove={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>
           <img onClick={()=> navigate("/player")} className='cards-image' src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='movie'/>
           { isHovered && (
            <div className='hover'>
                <div className='image-video-container'>
                <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='movie'
                onClick={()=> navigate("/player")}/>
                <video src={video} autoPlay loop/>
                </div>
                <div className='info-container flex column'>
                <div className='name' onClick={()=> navigate("/player")}>
                    {movieData.name}
                </div>
                <div className='icon flex j-between'>
                    <div className='controls flex '>
                        <i class="fa-solid fa-circle-play" title='Play' onClick={()=> navigate("/player")}></i>
                        {
                            isLiked? (<i class="fa-solid fa-circle-check" title='Remove From List' onClick={()=> 
                                dispatch(removeFromLikedMovies({ movieId: movieData.id, email}))}></i>):
                            (<i class="fa-solid fa-circle-plus" title='Add To My List' onClick={addToList}></i>)
                        }

                    <i class="fa-solid fa-thumbs-up" title='Like'></i>
                    </div>
                    <div className='info'>
                        <i class="fa-solid fa-circle-chevron-down" title='More Info'></i>
                    </div>
                </div>
                <div className='genres flex'>
                    <ul className='flex'>{movieData.genres.map((genre)=>{
                       return <li key={genre.id}> {genre} </li>
                    })}
                    </ul>
                </div>
                </div>
            </div>
           )}
        </div>
    );
}
);

