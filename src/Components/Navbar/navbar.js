import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { firebaseAuth } from '../../Pages/Utiles/firebase.confg';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../../Pages/Store';
import SearchMovie from '../../Pages/SearchMovie/searchMovie';

export default function Navbar({isScrolled}) {

    const[selected, setSelected] = useState(false);
    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=> state.netflix.movies);
    const[input, setInput] = useState("");
    const[results, setResults] = useState([]);
    // console.log(movies);
    const searchList = (value) =>{
        
        const movieData = movies.filter((user)=>{
            return value && user.name && user.name.toLowerCase().includes(value)
        });
        setResults(movieData);
        console.log(movieData);
    }

    const handleChange = (value)=> {
        setInput(value);
        searchList(value);
    }

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getGenres())
    },[])
    
    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type : "all"}))
    },[genresLoaded])


    const navigate = useNavigate()

    const links = [
        {
            name: "Home",
            path: "/browser",
            icon: <i class="fa-solid fa-house"></i>
        },
        {
            name: "TV Shows",
            path: "/browser/TvShows",
            icon: <i class="fa-solid fa-tv"></i>
        },
        {
            name: "Movies",
            path: "/browser/Movies",
            icon: <i class="fa-solid fa-clapperboard"></i>
        },
        {
            name: "My List",
            path: "/browser/my-list",
            icon: <i class="fa-regular fa-rectangle-list"></i>
        },
    ]

    const[isHovered, setIsHovered] = useState(false)
    const[showSearch, setShowSearch] = useState(false)
    const[inputHover, setInputHover] = useState(false)

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(!currentUser){
            navigate("/signin")
        }
    });
    const navRef = useRef();

    const showNavbar = ()=> {
        navRef.current.classList.toggle("responsive_nav")
    }


    
    return (
        <div className='navbar-container' >
            <div className={`nav flex ${isScrolled ? "scrolled" : "unscrolled"}`}>
                <div className='left'>
                    <div className='brand'>
                        <div className='menu-bar'><i onClick={showNavbar} className="fa-solid fa-bars navbar-btn-open"></i></div>
                        <NavLink to="/browser"><img src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" alt='logo'/></NavLink>
                    </div>
                    <div className='side-menu' ref={navRef}>
                        <ul className='links'>
                        {
                            links.map(({name,path})=>{
                               return <li key={name}>
                                <Link to={path}>{name}</Link>
                                </li>
                            })
                        }
                    </ul>
                        <div className='sign-out'>
                            <div className='sign-out-profile cur-pot' onMouseOver={()=> setSelected(true)} onMouseOut={()=> setSelected(false)}>
                            <img src='https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229' alt='profile'/>
                            {selected ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}
                            </div>

                            <div className="tooltip-text" onMouseOver={()=> setSelected(true)} onMouseOut={()=> setSelected(false)}>
                            <div><i class="fa-solid fa-sort-up"></i></div>
                            <div className='signout-backdround'>
                            <div className="profile-link"><NavLink to={"/profiles/manage"}><img src='https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229' alt='profile'/></NavLink></div>
                            <div className="signout-text cur-pot" onClick={()=> signOut(firebaseAuth)}>Sign out of Netflix</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='right flex a-center'> 
                    <div className={`search ${showSearch ? "show-search" : ""}`}>
                        <button onFocus={()=> setShowSearch(true)} onBlur={()=>
                         {if(!inputHover) setInputHover(false)}}>
                            <i className="fa-solid fa-magnifying-glass cur-pot"></i>
                        </button>

                         <input type='text' onChange={(e)=> handleChange(e.target.value)} value={input} placeholder='Titles, people, genres'
                         onMouseEnter={()=> setInputHover(true)}
                         onMouseLeave={()=> setInputHover(false)}
                         onBlur={()=> {
                         setShowSearch(false);
                         setInputHover(false)}}
                         autoComplete='off'/>
                    </div> 
                </div>
            </div>
            <div className="search-input-section">
                <SearchMovie results={results}/>
            </div>
        </div>
    );
};
