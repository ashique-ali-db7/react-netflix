import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {apiKey, imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube'
function RowPost(props) {
const [ogMovie, setogMovie] = useState([])
const [urlId, seturlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then(response=>{
console.log(response.data);
setogMovie(response.data.results)

        }).catch(err=>{
            alert(err)
        })
       
    }, [])


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie = (id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${apiKey}`).then(response=>{
   if(response.data.results.length!==0){
seturlId(response.data.results[0])
   }else{
    seturlId('')
   }
})
      }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {ogMovie.map((obj)=>
  <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
              

            </div>
          {urlId && <Youtube videoId={urlId.key} opts={opts} />}  
        </div>
    )
}

export default RowPost
