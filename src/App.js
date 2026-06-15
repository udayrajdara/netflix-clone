import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn/signin';
import SignUp from './Pages/SignUp/signup';
import LandingPage from './Pages/LandingPage/landingpage';
import StepOne from './Pages/SignUp/stepone';
import Netflix from './Pages/Netflix/netflix';
import Player from './Pages/Player/player';
import Movies from './Pages/Movies/movies';
import TVShows from './Pages/TVShows/TvShows';
import UserLiked from './Pages/UserLiked/userLiked';
import SearchMovie from './Pages/SearchMovie/searchMovie';
import ProfilePage from './Pages/ProfilePage/profilePage';
import StepTwo from './Pages/SignUp/steptwo';
import ChoosePlan from './Pages/SignUp/step-2/choosePlan';
import Plans from './Pages/SignUp/step-2/plans';


const App = () => {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path='/browser' element={<Netflix/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup/registration' element={<SignUp/>}/>
        <Route path='/signup/regform' element={<StepOne/>}/>
        <Route path='/browser/movies' element={<Movies/>}/>
        <Route path='/browser/TvShows' element={<TVShows/>}/>
        <Route path='player' element={<Player/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/browser/my-list' element={<UserLiked/>}/>
        <Route path='/browser/search' element={<SearchMovie/>}/>
        <Route path='/profiles/manage' element={<ProfilePage/>}/>
        <Route path='/signup/password' element={<StepTwo/>}/>
        <Route path='/signup' element={<ChoosePlan/>}/>
        <Route path='/signup/planform' element={<Plans/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;