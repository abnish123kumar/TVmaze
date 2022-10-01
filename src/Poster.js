import React from 'react'
import './Poster.css'
function Poster(props) {
  return (
    <div className='hello'>
       {
        props.item.map((item2)=>(
          <div className='class-box'>
          <img
          src={item2?.show?.image?.medium} 
          alt=''
          />
          {/* <div dangerouslySetInnerHTML={{ __html: item2.show.summary}} />; */}  
          </div>
       ))
       }
    </div>
  )
}

export default Poster
