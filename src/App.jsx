// src/App.jsx
import React from 'react';
import OPCIALandingPage from './components/OPCIALandingPage';
import './index.css';

function App() {
  return (
    <div className="App">
      <OPCIALandingPage />
    </div>
  );
}

// i18n 적용은 각 컴포넌트에서 처리됨

export default App;