import React, { useState } from 'react';
import './StepTwo.css'
import './StepOne.css'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, } from 'firebase/auth';
import { firebaseAuth } from '../Utils/firebase.confg';


const StepTwo = () => {

    const datas = localStorage.getItem('Email')
    const navigate = useNavigate();


    const[userDetails, setUser] = useState([
        {
            password: ''
        }
    ]);
    // console.log(datas)

    const[passError, setPassError] = useState();

    function handle(e){
        setUser({...datas,[e.target.name] :e.target.value})
    }
    

    const handleSignIn = async (e)=>{
        e.preventDefault();
        const {email, password} = userDetails;
        try{
            await signInWithEmailAndPassword(firebaseAuth, datas, password).then(user=> navigate("/signup"))
        }catch(err){
            if(err.code === 'auth/invalid-credentials'){
                setPassError('Please Enter valid Password');
            }else if(err.code === 'auth/weak-password'){
                setPassError("Password should be between 6 and 60 characters.")
            } else if(err.code === 'auth/missing-password'){
                setPassError("Password is required")
            }
        }
    
    } 


    return (
        <div className='back'>
            <div className='container-xxl'>
            <div className='signup-navbar'>
                <div>
                    <Link to="/"><svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" fill='rgb(229, 9, 20)'></path></g></svg></Link>
                </div>
                {/* <NavLink to="/signin"><div className='singup-signin fs-5 fw-semibold'>Sign In</div></NavLink> */}
            </div>
            <div className='border-bottom border-success mt-3 border-opacity-10'></div>
            </div>

            <div className=" steptwo flex j-around">
                <div className='width'>
                <div className="step">Step 1 of 3</div>
                <div className="welcome-back">Welcome Back? <br /> Joining Netflix is easy</div>
                <div className="enter-pass">Enter your password and you'll be watching in no time.</div>
                <div className="email-sec">Email <br /> <b>{datas}</b></div>
                <input placeholder='Enter your password' className='pass-inp'
                 onChange={handle} 
                 type="text" name="password" id="password" /> <br />
                 <span>{}</span>
                <button onClick={handleSignIn}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default StepTwo;