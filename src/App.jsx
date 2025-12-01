import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function test()
{
 const poop='working text';
 alert(`test ${poop}`); 

}


{/* const AddImagesButton = () =>{
  return ( <div>
    <button onClick={test}> test </button>
    <button onClick={getImg}>test img</button>
    </div>
    );};
*/}
const Rating = () =>{
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(0);
  const stars= Array.from({length: 5},(_,i)=>i+1);
  const feedbackMessage=["total ass","poo","just fine","kinda nice","orgasmic"];
  
 
  return(  
  <div className="rating-container">
   <h2> poooop </h2>
  <div className='stars'>
  Rating: {rating}
  {stars.map((star, index) => 
  (<span
  onClick={()=>setRating(star)}
  onMouseEnter={()=>setHover(star)}
  onMouseLeave={()=>setHover(0)}
  key={star} 
  
  className={`star ${star<=(hover||rating) ? 'active': ''  }`}>
  
  {'\u2605'}
  </span>
    
  ))}
  </div>
  <h2>{`${rating>0? feedbackMessage[rating-1]:"please rate us"}`}</h2>
  </div>
  );
};


const App = () =>{
  const name="dickbag";
  return (
    
    <div className="App">
      
      <h1>Hello {name}</h1>

      <Rating/>
    </div>
  );
}


export default App;
