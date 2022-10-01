import { useEffect, useState } from "react"
import Poster from "./Poster";
import Actor from "./Actor";
import './ShowName.css'

 function ShowName(props) {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const url = `${props.urlLink}${props.input}`

   //console.log(url);
  //console.log(items[0].show.id)
   useEffect(()=>{
    //console.log("abnish")
      //fetch(`https://api.tvmaze.com/search/shows?q=${props.input}`)
      const abn = setTimeout(()=>{ 
       return(  
      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          //console.log(result);
          setItems(result);
        },

          //   console.log(data.resolve)
          //   console.log("raj")
         
          (error) => {
            // setIsLoaded(true);
            // setError(error);
            console.log(error);
          }
        ) 
       )
        },0)
        return ()=> clearInterval(abn)
          
   },[url])
    
  //  console.log(items)
  //  if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
    
    return (
      <div className="show-photo"> 
      {
        props.sName?<Poster item={items}/>:null
      }
      {
        props.aName?<Actor item={items}/>:null
      }
      {/* {
        props.aName?<Actor item={items}/>:null
      } */}
     
           </div>

    );
        }
        export default ShowName
       