import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function test()
{
 alert("test"); 

}
let images=[];
//add a function for getting images to array
function getImg(){
  
  const context=require.context('./src/img',false,/\.(png|jpe?g|svg)$/);
  images=context.keys().map(context);
  
  alert(images.length);
}
const AddImagesButton = () =>{
  return (
    <div>
     <button onClick={test}> test </button>
      <button onClick={getImg}>test img</button>
      </div>c
    )
}
const App = () =>{
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <AddImagesButton/>
     
    </div>
  );
}


export default App;
