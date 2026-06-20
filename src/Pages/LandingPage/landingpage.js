import React, { useEffect, useState } from 'react';
import BackgroundImage from '../../Components/BackgroundImage/backgroundimage';
import Header from '../../Components/Header/header';
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';
import Hand from './hand';
import Star from './star';
import Love from './love';
import Tv from './tv';
import axios from 'axios'





export default function LandingPage() {

    const[selected, setSelected] = useState(null);

    const askedQuestions = [
        {
            title: 'what is Netflix?',
            caption:`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                     You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
            plusIcon: <i class="fa-solid fa-plus"></i>,
            crossIcon: <i class="fa-solid fa-xmark"></i>,
        },
        {
            title: 'How much does Netflix cost?',
            caption:`Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`,
            plusIcon: <i class="fa-solid fa-plus"></i>,
            crossIcon: <i class="fa-solid fa-xmark"></i>,
        },
        {
            title: 'Where can I watch?',
            caption:`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
            plusIcon: <i class="fa-solid fa-plus"></i>,
            crossIcon: <i class="fa-solid fa-xmark"></i>,
            
        },
        {
            title: 'How do I cancle?',
            caption:`Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
            plusIcon: <i class="fa-solid fa-plus"></i>,
            crossIcon: <i class="fa-solid fa-xmark"></i>,

        },
        {
            title: 'What can I watch on Netflix?',
            caption:`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
            plusIcon: <i class="fa-solid fa-plus"></i>,
            crossIcon: <i class="fa-solid fa-xmark"></i>,

        },
        {
            title: 'Is Netflix good for kids?',
            caption:`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
            plusIcon: <i class="fa-solid fa-plus"></i>,
            crossIcon: <i class="fa-solid fa-xmark"></i>,
        
        },
    ]
    
    const navigate = useNavigate()

// const data = useRef()


// console.log(userData)


const[data, setData] = useState({
    email: ''
})

  function change(e){
    e.preventDefault()

    setData({...data,[e.target.name]: e.target.value})
    
    
  }

  const[userData, setUserData] = useState([]);
//   console.log(userData)

  useEffect(()=>{
      axios.get('https://65d6e3ad27d9a3bc1d798e53.mockapi.io/netflix')
      .then((response) => setUserData(response.data))
  },[])


//   const userEmails = ()=>{
//    const names =  userData.email.find(({id})=>{id === email})

//   }
  


  function handle(e){
    e.preventDefault()

    const {email} = data;
    const validRegex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

    if(email === ""){
        document.getElementById('input-email-data').style.border = '1.5px solid #Eb3942';
    } else if(!validRegex.test(email)){
        document.getElementById("email-valid").innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Please enter a valid email address.'
    }else if(validRegex.test(email)){
        localStorage.setItem('Email',email)
        let na = userData.find((p)=> p.email === email)

        if(na){
            navigate('/signup/password') 
        
        }else{
            navigate('/signup/registration')
        }
        
        
    }   
        
  } 



  





    


    

 

// window.addEventListener('load', async () => {
//     const querySnapshot = await getDocs(collection(database, "myCollection"));
//     const temporaryArr = [];
//     querySnapshot.forEach((doc) => {
//         temporaryArr.push(doc.data());
//     });
//     setData(temporaryArr);
// });


//   const handleclick = (e)=>{

//     e.preventDefault()    

// }

useEffect(()=>{
    document.title = 'Netflix UI Clone | React Project - Watch TV shows Online, Watch Movies Online';
}, [])


    const toggle = (i)=>{
        if(selected === i){
            return setSelected(null)
        }


        setSelected(i)  
    }







    return (
        <div className='landingpage-main'>
            <BackgroundImage/>
            <div>
                <Header/>
                
                <div className='landingpage-container'>
                    <div className='landingpage-cenetr'>
                    <div className='landingpage-title'>Unlimited movies, TV shows and more</div>
                    <div className='landingpage-caption1'>Starts at ₹149. Cancel anytime.</div>
                    <div className='landingpage-caption2'>Ready to watch? Enter your email to create or restart your membership.</div>
                    <div className='email-input'>
                        <div className='landingpage-input'><input className='input-email-data' id='input-email-data'  onChange={change} placeholder='Email address' type='email' name='email' required/></div>
                        <div className='landingpage-button '><button onClick={handle} name='submit'>Get Started <i class="fa-solid fa-chevron-right"></i></button></div>
                    </div>
                    <p className='email-valid' id='email-valid'></p>
                </div>
            </div>
            
            {/* <div className='tv-image-container'>
                <div className='text-tv'>
                    <div className='text-section'>
                        <div className='tv-title'>Enjoy on your TV</div>
                        <div className='tv-caption'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
                    </div>
                    <div className='tv-section'>
                        <img className='image-field' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='netflix-tv'/>
                        <video className='video-field' autoPlay loop>
                            <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div> */}


            
            <div className='curve-line-bar'>
                <div className='plans-section'>
                    <div className='plans-bar'>
                        <div className='plans-title'>Plans to suit your needs and your budget</div>
                        <div className='plans-caption'>Enjoy Netflix starting at just ₹149.</div>
                    </div>
                </div>

                <div className='reasons-join-section'>
                    <div className='reaasons-bar'>
                    <div className='reasons-title'>More reasons to join</div>
                    <div className='reasons-grid-section'>
                        <div className='grid-boxes grid-box-1'>
                            <div className='grid-titles'>Stories tailored to your taste</div>
                            <div className='svg'><Star/></div>
                        </div>
                        <div className='grid-boxes grid-box-2'>
                            <div className='grid-titles'>Cancel or switch plans anytime</div>
                            <div className='svg'><Hand/></div>
                        </div>
                        <div className='grid-boxes grid-box-3'>
                            <div className='grid-titles'>A place just for kids</div>
                            <div className='svg'><Love/></div>
                        </div>
                        <div className='grid-boxes grid-box-4'>
                            <div className='grid-titles'>For your phone, tablet, laptop, and TV</div>
                            <div className='svg'><Tv/></div>
                        </div>
                    </div>
                    </div>
                </div>


                <section className='wrapper'>
                    <div className='accordion-section'>
                        <div className='accordion-heading'>Frequently Asked Questions</div>
                        {askedQuestions.map((item, i)=> {
                            return (
                            <div className='item' key={item.id}>
                                <div className='accordion-title-section cur-pot' onClick={()=> toggle(i)}>
                                <div className='accordion-title'>{item.title}</div>
                                <div className='accordion-icon'>{selected === i ? item.crossIcon : item.plusIcon}</div>
                                </div>
                                <div className={selected === i ? 'show': 'accordion-content'}>{item.caption}</div>
                            </div>
                            )
                        })}
                    </div>

                    <div   style={{
                        background: "#141414",
                        color: "#fff",
                        padding: "12px",
                        textAlign: "center",
                        fontSize: "14px",
                        borderBottom: "1px solid #333",
                        marginTop: "20px",
                    }}>
                    <strong>Netflix UI Clone</strong> | Educational Project built with React.js
                    and TMDB API. This website is not affiliated with, endorsed by, or connected
                    to Netflix.
                    </div>
                </section>

                
            </div>
            </div>
        </div>
    );
};
