// SuccessComponent.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './style.css'

const SuccessValidation = () => {
  const { state } = useLocation();
  const { formData } = state || {};

  if (!formData) {
    return <div>No data submitted</div>;
  }

  return (
    <div className="container">
      <h2>Form Submitted Successfully</h2>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key.split(/(?=[A-Z])/).join(' ')}:</strong> {value}
          </li>
        ))}
      </ul>
      <Link to="/">Go Back to Form</Link>
    </div>
  );
};

export default SuccessValidation;
