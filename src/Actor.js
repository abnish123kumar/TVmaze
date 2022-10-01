import React from 'react'
import './Actor.css'

function Actor(props) {
  return (
    <div className="actor-name">
      {
        props.item.map((item2)=>(
            <div className='class-box' >
             
           <img
           src={item2?.person?.image?.medium}
           alt=''
           />
            
           </div>
        ))
      }
    </div>
  )
}

export default Actor
