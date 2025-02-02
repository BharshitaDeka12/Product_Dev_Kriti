import React, { useState } from 'react';
import './GeneratedWebsite.css';

const GeneratedWebsite = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [generatedCSS, setGeneratedCSS] = useState('');
  const [generatedJS, setGeneratedJS] = useState('');
  const [cssBlobUrl, setCssBlobUrl] = useState('');
  const [jsBlobUrl, setJsBlobUrl] = useState('');

  const generateWebsite = (prompt) => {
    const newCSS = `
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
}
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
.header {
 margin-top : 0;
  background-color: #007bff;
  color: white;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
.content {
  padding: 20px;
}
.footer {
  background-color: #e0e0e0;
  padding: 10px;
  margin-top: 20px;
}
    `;

    const newJS = `
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  header.addEventListener('click', () => {
    alert('Header clicked!');
  });
});
    `;

    // Create Blob URLs for CSS and JS
    const cssBlob = new Blob([newCSS], { type: 'text/css' });
    const jsBlob = new Blob([newJS], { type: 'text/javascript' });
    const newCssBlobUrl = URL.createObjectURL(cssBlob);
    const newJsBlobUrl = URL.createObjectURL(jsBlob);

    setCssBlobUrl(newCssBlobUrl);
    setJsBlobUrl(newJsBlobUrl);

    const newHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Dynamic Website</title>
  <link rel="stylesheet" href="${newCssBlobUrl}">
</head>
<body>
  <div class="container">
    <div class="header">${prompt || 'Welcome to the Generated Website'}</div>
    <div class="content">This is a dynamically generated website preview.</div>
    <div class="footer">© 2025 Your Brand</div>
  </div>
  <script src="${newJsBlobUrl}"></script>
</body>
</html>
    `;

    setGeneratedHTML(newHTML);
    setGeneratedCSS(newCSS);
    setGeneratedJS(newJS);
  };

  return (
    <div className="generated-website-container">
      {/* Left: Website Preview */}
      <div className="website-preview-container">
        <iframe
          title="Website Preview"
          className="website-preview"
          srcDoc={generatedHTML}
        />
      </div>

      {/* Right: Code Display */}
      <div className="code-container">
        <h3>Generated Code</h3>
        <div className="code-sections">
          <div>
            <h4>HTML Code</h4>
            <pre className="code-block">
              <code>{generatedHTML}</code>
            </pre>
          </div>
          <div>
            <h4>CSS Code</h4>
            <pre className="code-block">
              <code>{generatedCSS}</code>
            </pre>
          </div>
          <div>
            <h4>JavaScript Code</h4>
            <pre className="code-block">
              <code>{generatedJS}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Re-prompt Section */}
      <div className="reprompt-panel">
        <input
          type="text"
          placeholder="Enter a new prompt for the website"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <button
          className="styled-button"
          onClick={() => generateWebsite(userPrompt)}
        >
          Generate New Website
        </button>
      </div>
    </div>
  );
};

export default GeneratedWebsite;
