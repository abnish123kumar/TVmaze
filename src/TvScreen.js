import {useState} from 'react'
 import ShowName from './ShowName';
 import './TvScreen.css'

function TvScreen() {
  const [state,setState] = useState('');
  const [url, setUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAct, setIsAct] = useState(false);
   const [userid, setUserid] = useState(false);
   const [display, setDisplay] = useState('');
   
    function showName(){
      //console.log("abc");
      setUrl(`https://api.tvmaze.com/search/shows?q=`)
      setIsAct(true);
      setDisplay('Enter show name :- ')
      setUserid(false);
      setState('')
    }
    function actorName(){
        setUrl('https://api.tvmaze.com/search/people?q=')
        setUserid(true);
        setDisplay('Enter actor name :- ')
        setIsAct(false);
        setState('')
     
    //  fetch(urlf)
    //   .then(resolve=>resolve.json())
    //   .then(data=>
    //     console.log(data)
    //   )
      //setUrl(`https://api.tvmaze.com/search/people?q=${state}`)
      
    }
    // useEffect(() => {
      
    //   const delayDebounceFn = setTimeout(() => {
       
    //     console.log(state)
    //     // Send Axios request here
    //   }, 300)
  
    //   return () => clearTimeout(delayDebounceFn)
    // }, [state])
    function inputbox(e){
      //e.preventDefault();
      setState(e.target.value)
     setTimeout(()=>{
      
      setIsLoaded(true);
     },0)
      
      
      
    }

  return (
    <>
    <div >
      <h1>TVmaze</h1>
      <h1>Search your favourite shows</h1>
      <div>
      <input type='radio' name='abnish' onClick={actorName}/>
      <span >Actor</span>
      <input type='radio' name='abnish' onClick={showName}/>
      <span>Shows</span>
      </div>
      <form  >
      <br />
      {
        isAct?<span>{display}</span>: <span>{display}</span>
        
      }
      {/* {
        userid?<p>Enter Actor Name</p>: null
      } */}
      <input placeholder='eg. friends' value={state} onChange={inputbox}/>
      <br />
      <br />
      </form>
     
    </div>
    <div >
      {isLoaded?<ShowName input={state} urlLink={url} aName={userid} sName={isAct}/>:null} 
     {
     
     }
     </div>
    </>
  )
}

export default TvScreen
