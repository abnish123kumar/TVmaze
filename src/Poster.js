import React from 'react'
import './Poster.css'
import image from './images.jpg';
function Poster(props) {

  return (
    <div className='hello'>
       {
        props.item.map((item2)=>(
          <div className='class-box'>
            <a href={item2?.show?.url}>
            {
              item2?.show?.image? <img 
              src={item2?.show?.image?.medium} 
              alt=''
              />: <img src={image} alt=''></img>
            }</a>
         <h4>{item2?.show?.name}</h4>
          
          {/* <div dangerouslySetInnerHTML={{ __html: item2.show.summary}} />; */}  
          </div>
       ))
       }
    </div>
  )
}

export default Poster
