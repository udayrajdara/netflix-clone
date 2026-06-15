import React from 'react';
import './SelectGenres.css';
import { fetchDataByGenre } from '../../Pages/Store';
import { useDispatch } from 'react-redux';

export default function SelectGenres({genres, type}) {

    const dispatch = useDispatch();

    return (
        <div className='select-genres-container'>
            <div className='select-genres-field flex a-center al-center'>


            <select onChange={(e) => {dispatch(fetchDataByGenre({ genre: e.target.value, type }))}}>
                {genres.map((genre)=>{
                return (
                <option value={genre.id} key={genre.id}>
                    {genre.name}
                </option>
                )
            })}
            </select>

            </div>
        </div>
    );
};

