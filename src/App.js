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

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import FormPage from './components/FormPage/FormPage';
import DesignPage from './components/DesignPage/DesignPage';
import ColorPalettePage from './components/ColorPalettePage/ColorPalettePage';

const App = () => {
  const [selectedColorPalette, setSelectedColorPalette] = useState([]); // Store selected palette

  return (
    <Router>
      <div className="App">
        <header>
          <figure className="logo">
            <img src="images/logo.png" alt="Logo" />
          </figure>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/design" element={<DesignPage selectedColorPalette={selectedColorPalette} />} />
            <Route path="/color-palette" element={<ColorPalettePage setSelectedColorPalette={setSelectedColorPalette} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
