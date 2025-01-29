import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DesignPage.css';

const DesignPage = ({ selectedColorPalette }) => {
  const navigate = useNavigate();
  const [selectedLayout, setSelectedLayout] = useState('');
  const [customLayoutInfo, setCustomLayoutInfo] = useState('');
  const [palette, setPalette] = useState([]);
  const [selectedFont, setSelectedFont] = useState('');

  const fontOptions = ['Poppins', 'Roboto', 'Lato', 'Montserrat', 'Arial'];

  useEffect(() => {
    const storedPalette = JSON.parse(sessionStorage.getItem('selectedPalette'));
    if (storedPalette) {
      setPalette(storedPalette);
    }
  }, [selectedColorPalette]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Layout: ${selectedLayout === 'Other' ? customLayoutInfo : selectedLayout}, Palette: ${palette}, Font: ${selectedFont}`);
  };

  return (
    <div className="design-page">
      <h2>Customize Your Website Design</h2>

      <div className="form-section">
        <button className="custom-button" onClick={() => navigate('/color-palette')}>
          Choose Your Color Palette
        </button>
      </div>

      {/* Font Selection */}
      <div className="form-section">
        <label htmlFor="fontFamily">Choose a font family:</label>
        <select id="fontFamily" className="styled-select" value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
          <option value="">Select a font</option>
          {fontOptions.map((font, index) => (
            <option key={index} value={font}>{font}</option>
          ))}
        </select>
      </div>

      {palette.length > 0 && (
        <div className="selected-palette">
          <h3>Selected Color Palette:</h3>
          <div className="palette-preview">
            {palette.map((color, index) => (
              <div key={index} className="color-box" style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-section layout-section">
          <label htmlFor="layoutTemplate">Choose a layout template:</label>
          <select id="layoutTemplate" className="styled-select layout-dropdown" value={selectedLayout} onChange={(e) => setSelectedLayout(e.target.value)}>
            <option value="">Select a layout</option>
            <option value="Travel">Travel</option>
            <option value="Fitness">Fitness</option>
            <option value="Business">Business</option>
            <option value="Portfolio">Portfolio</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {selectedLayout === 'Other' && (
          <div className="form-section">
            <label htmlFor="customLayoutInfo">Describe your desired layout:</label>
            <textarea
              id="customLayoutInfo"
              className="styled-textarea"
              value={customLayoutInfo}
              onChange={(e) => setCustomLayoutInfo(e.target.value)}
              placeholder="Provide additional information about your website layout..."
              required
            ></textarea>
          </div>
        )}

        <button type="submit" className="styled-submit" disabled={!selectedLayout || (selectedLayout === 'Other' && !customLayoutInfo)}>
          Generate Website
        </button>
      </form>
    </div>
  );
};

export default DesignPage;
