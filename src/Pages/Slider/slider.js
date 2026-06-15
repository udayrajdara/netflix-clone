import React from 'react';
import CardSlider from '../../Components/Cards/cardSlider';
import './Slider.css'

export default React.memo(function Slider({movies}) {

    const getMoviesFromRange = (from, to)=>{
        return movies.slice(from, to)
    }
    return (
        <div className='slider-container'>
            <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)}/>
            <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)}/>
            <CardSlider title="Up Coming" data={getMoviesFromRange(20, 30)}/>
            <CardSlider title="Popular On Netflix" data={getMoviesFromRange(30, 40)}/>
            <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)}/>
            <CardSlider title="Epics" data={getMoviesFromRange(50, 60)}/>

        </div>
    );
});     
