import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SuccessValidation from './components/SuccessValidation';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/success" element={<SuccessValidation />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;