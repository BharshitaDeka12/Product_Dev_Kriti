import React, { useState } from 'react';
import { SketchPicker } from 'react-color'; // Import the SketchPicker component
import './DesignPage.css';

const DesignPage = () => {
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color
  const [isPickerOpen, setIsPickerOpen] = useState(false); // Toggle for color picker
  const [selectedLayout, setSelectedLayout] = useState('');
  const [customLayoutInfo, setCustomLayoutInfo] = useState(''); // State for additional info

  const layoutOptions = ['Travel', 'Fitness', 'Business', 'Portfolio', 'E-Commerce', 'Other'];

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Color:', selectedColor);
    console.log('Selected Layout:', selectedLayout);
    console.log('Custom Layout Info:', customLayoutInfo);

    // Redirect or handle submission logic
    alert(
      `Color: ${selectedColor}, Layout: ${
        selectedLayout === 'Other' ? customLayoutInfo : selectedLayout
      }`
    );
  };

  return (
    <div className="design-page">
      <h2>Customize Your Website Design</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="colorPalette">Choose a color:</label>
          <div className="color-picker-container">
            <button
              type="button"
              className="color-picker-icon"
              onClick={() => setIsPickerOpen(!isPickerOpen)}
              style={{ backgroundColor: selectedColor }}
            >
              {/* Add an icon here or keep it minimal */}
            </button>
            {isPickerOpen && (
              <div className="color-picker-popover">
                <div className="color-picker-cover" onClick={() => setIsPickerOpen(false)} />
                <SketchPicker
                  color={selectedColor}
                  onChangeComplete={handleColorChange}
                />
              </div>
            )}
          </div>
          <p>
            Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span>
          </p>
        </div>

        <div className="form-section">
          <label htmlFor="layoutTemplate">Choose a layout template:</label>
          <select
            id="layoutTemplate"
            value={selectedLayout}
            onChange={(e) => setSelectedLayout(e.target.value)}
          >
            <option value="">Select a layout</option>
            {layoutOptions.map((layout, index) => (
              <option key={index} value={layout}>
                {layout}
              </option>
            ))}
          </select>
        </div>

        {/* Conditionally render the textarea for 'Other' option */}
        {selectedLayout === 'Other' && (
          <div className="form-section">
            <label htmlFor="customLayoutInfo">Please describe your desired layout:</label>
            <textarea
              id="customLayoutInfo"
              value={customLayoutInfo}
              onChange={(e) => setCustomLayoutInfo(e.target.value)}
              placeholder="Provide additional information about your website layout..."
              required
            ></textarea>
          </div>
        )}

        <button
          type="submit"
          disabled={!selectedLayout || (selectedLayout === 'Other' && !customLayoutInfo)}
        >
          Generate Website
        </button>
      </form>
    </div>
  );
};

export default DesignPage;
