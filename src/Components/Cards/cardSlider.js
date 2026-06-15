import React, { useRef, useState } from 'react';
import Cards from './cards';
import './CardSlider.css'
// import { Link } from 'react-router-dom';

export default React.memo(function CardSlider({data, title}) {

    const[showControls, setShowControls] = useState(false);
    const[sliderPosition, setSliderPosition] = useState(0);
    const listRef = useRef();

    const handleDirection = (direction)=> {
        let distance = listRef.current.getBoundingClientRect().x - 70;
        if(direction === "left" && sliderPosition > 0){
            listRef.current.style.transform = `translateX(${270 + distance}px)`;
            setSliderPosition(sliderPosition - 1)
        }
        if(direction === "right" && sliderPosition < 4){
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSliderPosition(sliderPosition + 1)
        }   
    }


    return (
        <div className='flex column cardslider-container'
        onMouseEnter={()=> setShowControls(true)} 
        onMouseLeave={()=> setShowControls(false)}>

            <div className='cardslider-title'>{title}</div>

            <div className='wrapper'>
                <div className={`slider-action left-arrow ${!showControls ? "none" : ""} flex j-center a-center`}>
                <i class="fa-solid fa-chevron-left" 
                onClick={()=> handleDirection("left")}></i>
                </div>

                <div className='flex slider' ref={listRef}>
                {
                    data.map((movie, index)=>{
                    return <Cards movieData={movie} index={index} key={movie.id}/>   
                    })
                }
                </div>
                <div className={`slider-action right-arrow ${!showControls ? "none" : ""} flex j-center a-center`}>
                <i class="fa-solid fa-chevron-right" 
                onClick={()=> handleDirection("right")}></i>
                </div>
            </div>
        </div>
    );
}
);


