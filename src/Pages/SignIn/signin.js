import React, { useEffect } from 'react';
import './Signin.css'
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../Utils/firebase.confg';
import { Link, useNavigate } from 'react-router-dom';


export default function SignIn() {

    const navigate = useNavigate()
       

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [rememberMe, setRememberMe] = useState(false);
        const [error, setError] = useState(null);
        const[emailError, setEmailError] = useState(null)

      
        useEffect(() => {
          // Check if there are saved credentials in localStorage
          const savedEmail = localStorage.getItem('savedEmail');
          const savedPassword = localStorage.getItem('savedPassword');
          const savedRememberMe = localStorage.getItem('savedRememberMe') === 'true';
      
          if (savedRememberMe && savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(savedRememberMe);
          }
        }, []);

    const userEmail = localStorage.getItem('savedEmail')
    const userPassword = localStorage.getItem('savedPassword')

    const[userData, setUserData] = useState({
        email: `${userEmail}`,
        password: `${userPassword}`,
    })

    const[formValues, setFormValues] = useState({
        email:`${userData.email}`,
        password:`${userData.password}`,
    });
        


            const handleLogIn = async (e)=>{
                e.preventDefault();
                try{
                    const {email, password} = formValues;
                    await signInWithEmailAndPassword(firebaseAuth, email, password).then(user => navigate("/browser"));

                    if (rememberMe) {
                        localStorage.setItem('savedEmail', email);
                        localStorage.setItem('savedPassword', password);
                        localStorage.setItem('savedRememberMe', rememberMe);
                      } else {
                        // Clear saved credentials if "Remember Me" is not checked
                        localStorage.removeItem('savedEmail');
                        localStorage.removeItem('savedPassword');
                        localStorage.removeItem('savedRememberMe');
                      }
                }catch(err){
                    if(err.code === 'auth/invalid-email'){
                        setEmailError("Please enter email.")
                        } else if(err.code === 'auth/invalid-login-credentials'){
                        setError("Please enter vaild email & password.")
                        } else if(err.code === 'auth/missing-password'){
                            setError("Enter a valid password.")
                        }
                }
            }
            


        function signUp(){
            navigate("/")
        }

        useEffect(()=>{
            document.title = 'Netflix';

            document.querySelector('meta[name="description"]')
        .setAttribute('content', 'Watch Netflix movies & TV shows online or stream right to your ...')
        }, [])

        const[show, setShow] = useState(false)

        const handleShow = ()=>{
            setShow(!show)
        }


        
    return (
        <div>
            <div>
            <div className='signin-backgroundimage'>
                <img className='signin-background-image' src='https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='Netflix'/>
            </div>

                <div className='signin-container-bar'>
                    <div className='navbar-brand signin-netflix-logo'>
                    <div>
                    <Link to="/"><svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" fill='rgb(229, 9, 20)'></path></g></svg></Link>
                </div>
                    </div>

                    <div className='signin-form-section'>
                        <div className='signin-form'>
                            <div className='signin-inputs'>
                            <div className='signin-title fs-2 mt-5 fw-semibold text-light'>
                                Sign In
                            </div>
                            <div className='signin-inputs-bar'>
                                <div>
                                <div>
                                    <input onChange={(e)=> setFormValues({...formValues,[e.target.name] : e.target.value})} className='signin-input-email p-3 mb-3 mt-3' value={formValues.email} type='email' name='email' placeholder='Email'/>
                                    <span className='signin-password-error text-warning'>{emailError && <p>{emailError}</p>}</span>
                                    </div>

                                <div className='signin-input-password-bar'>
                                    <input onChange={(e)=> 
                                setFormValues({...formValues, 
                                [e.target.name] : e.target.value,})} className='signin-input-password p-3' type={show ? "text" : "password"} value={formValues.password} name='password' placeholder='Password'/>
                                    <button className='signin-show-password' onClick={handleShow}>{show ? "Hide" : "Show"}</button>
                                </div>
                                <div className='signin-password-error text-warning'>{error && <p>{error}</p>}</div>
                                <div>
                                    <button onClick={handleLogIn} className='signin-submit mt-3 fw-semibold'>Sign In</button>
                                </div>
                                <div>
                                    <div className='signin-help-center mt-2 mb-3'>
                                        <div className='signin-checkbox fs-6 fw-medium'><input type='checkbox'
                                        checked={rememberMe}
                                        onChange={(e)=> setRememberMe(e.target.checked)}/> Remember me</div>
                                        <div className='signin-need-help fs-6 fw-medium'>Need help?</div>
                                    </div>
                                </div>
                                <div className='new-to-signin mt-4 mb-4 fs-6'>New to Netflix? <span onClick={signUp} className='signup-now-btn fw-semibolder fs-6 text-light'>Sing up now</span></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
