import React from 'react';  
import './App.css';  
import images from "./images.js";
import ImageSlider from "./ImageSlider.js";
  
const App = () => {
  return (
    <div className="App">
    <ImageSlider images={images}/>
  </div>
  )
}
  
export default App;