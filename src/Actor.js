import React from 'react'
import './Actor.css'
import image from './images.jpg';

function Actor(props) {
  return (
    <div className="actor-name">
      {
        props.item.map((item2)=>(
            <div className='class-box' >
            <a href={item2?.person?.url}> 
            {  item2?.person?.image? <img
           src={item2?.person?.image?.medium}
           alt=''
           />: <img src={image} alt=''></img>

}
</a>
<h4>{item2?.person?.name}</h4>
           </div>
        ))
      }
    </div>
  )
}

export default Actor
