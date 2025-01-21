// import React from 'react';
// import ImageSlider from './components/ImageSlider/ImageSlider'; 
// import './App.css'

// const App = () => {
//   return (
//     <div className="App">
//           <h1>Buildl</h1>
//       <p>AI that builds a website for you</p>
//       <button className='start-build-btn' >Start Building</button>

//       {/* <ImageSlider /> Render the ImageSlider component */}
//     </div>
//   );
// };
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel'; // Import the Carousel component
import FormPage from './components/FormPage/FormPage'; // Import the new FormPage component
import DesignPage from './components/DesignPage/DesignPage';
const App = () => {
  return (
    <Router>
      <div className="App">
      <header>
  <figure className="logo">
    <img src="images/logo.png" alt="Logo" />
  </figure>
  <nav className="main-nav">
    <ul>
      <li><a href="">Coffee</a></li>
      <li><a href="">Menu</a></li>
      <li><a href="">About</a></li>
    </ul>
  </nav>
</header>
        <main>
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/design" element={<DesignPage />} /> 
            </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
