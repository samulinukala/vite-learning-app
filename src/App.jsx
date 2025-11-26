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
  const stars= Array.from({length: 5},(_,i)=>i+1);
  const clicked=(index) => alert(`clicked ${index}`);
  const hover=(index)=>alert("hover");
  const leave=(index)=>alert("leave");
  return(  
  <div className="rating-container">
   <h2> poooop </h2>
  <div className='stars'>
  {stars.map((star, index) => 
  (<span onMouseEnter={()=>hover(index)}
  onMouseLeave={()=>leave(index)} 
  onClick={()=>clicked(index)}key={star} className='star'>
  {'\u2605'}
  </span>
    
  ))}
  </div>
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
