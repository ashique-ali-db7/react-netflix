import React,{useEffect,useState} from 'react'
import './Banner.css'

import {apiKey,imageUrl} from '../../constants/constants'
import axios from '../../axios'



function Banner() {
const [movie, setMovie] = useState()

useEffect(() => {
    
   axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
       
       let randoNumber = Math.floor(Math.random() * 10);
       setMovie(response.data.results[randoNumber])

   })
}, [])

    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.original_title:''}</h1>
                <div className='banner_buttons'>
<button className='button'>Play</button>
<button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:''}</h1>

            </div>
           <div className="fade_bottom"></div>

            
        </div>
    )
}

export default Banner
