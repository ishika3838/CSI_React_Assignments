// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // Ensure the correct CSS file is imported
// import './style.css'; // Ensure the correct CSS file is imported

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//     phoneNo: '',
//     country: '',
//     city: '',
//     panNo: '',
//     aadharNo: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const validate = () => {
//     let formErrors = {};
//     if (!formData.firstName) formErrors.firstName = 'First Name is required';
//     if (!formData.lastName) formErrors.lastName = 'Last Name is required';
//     if (!formData.username) formErrors.username = 'Username is required';
//     if (!formData.email) {
//       formErrors.email = 'E-mail is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       formErrors.email = 'E-mail is invalid';
//     }
//     if (!formData.password) formErrors.password = 'Password is required';
//     if (!formData.phoneNo) formErrors.phoneNo = 'Phone Number is required';
//     if (!formData.country) formErrors.country = 'Country is required';
//     if (!formData.city) formErrors.city = 'City is required';
//     if (!formData.panNo) formErrors.panNo = 'Pan No. is required';
//     if (!formData.aadharNo) formErrors.aadharNo = 'Aadhar No. is required';

//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       navigate('/success', { state: { formData } });
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         {['firstName', 'lastName', 'username', 'email', 'phoneNo', 'panNo', 'aadharNo'].map((field) => (
//           <div key={field}>
//             <label>{field.split(/(?=[A-Z])/).join(' ')}</label>
//             <input
//               type="text"
//               name={field}
//               value={formData[field]}
//               onChange={handleChange}
//             />
//             {errors[field] && <div className="error">{errors[field]}</div>}
//           </div>
//         ))}
//         <div>
//           <label>Password</label>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <button type="button" onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? 'Hide' : 'Show'}
//           </button>
//           {errors.password && <div className="error">{errors.password}</div>}
//         </div>
//         <div>
//           <label>Country</label>
//           <select name="country" value={formData.country} onChange={handleChange}>
//             <option value="">Select Country</option>
//             <option value="India">India</option>
//             <option value="USA">USA</option>
//           </select>
//           {errors.country && <div className="error">{errors.country}</div>}
//         </div>
//         <div>
//           <label>City</label>
//           <select name="city" value={formData.city} onChange={handleChange}>
//             <option value="">Select City</option>
//             {formData.country === 'India' && (
//               <>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Delhi">Delhi</option>
//               </>
//             )}
//             {formData.country === 'USA' && (
//               <>
//                 <option value="New York">New York</option>
//                 <option value="Los Angeles">Los Angeles</option>
//               </>
//             )}
//           </select>
//           {errors.city && <div className="error">{errors.city}</div>}
//         </div>
//         <button type="submit" disabled={!Object.values(formData).every((val) => val)}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    if (!formData.lastName) formErrors.lastName = 'Last Name is required';
    if (!formData.username) formErrors.username = 'Username is required';
    if (!formData.email) {
      formErrors.email = 'E-mail is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'E-mail is invalid';
    }
    if (!formData.password) formErrors.password = 'Password is required';
    if (!formData.phoneNo) formErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) formErrors.country = 'Country is required';
    if (!formData.city) formErrors.city = 'City is required';
    if (!formData.panNo) formErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) formErrors.aadharNo = 'Aadhar No. is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: { formData } });
    }
  };


  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="form-field">
  <label htmlFor="phoneNo">Phone No.</label>
  <input
    type="text"
    id="phoneNo"
    name="phoneNo"
    value={formData.phoneNo}
    onChange={handleChange}
  />
  {errors.phoneNo && <div className="error">{errors.phoneNo}</div>}
</div>
<div className="form-field">
  <label htmlFor="country">Country</label>
  <select
    id="country"
    name="country"
    value={formData.country}
    onChange={handleChange}
  >
    <option value="">Select Country</option>
    <option value="India">India</option>
    <option value="USA">USA</option>
    {/* Add more options as needed */}
  </select>
  {errors.country && <div className="error">{errors.country}</div>}
</div>
<div className="form-field">
  <label htmlFor="city">City</label>
  <select
    id="city"
    name="city"
    value={formData.city}
    onChange={handleChange}
  >
    <option value="">Select City</option>
    {formData.country === 'India' && (
      <>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        {/* Add more options as needed */}
      </>
    )}
    {formData.country === 'USA' && (
      <>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        {/* Add more options as needed */}
      </>
    )}
  </select>
  {errors.city && <div className="error">{errors.city}</div>}
</div>
<div className="form-field">
  <label htmlFor="panNo">Pan No.</label>
  <input
    type="text"
    id="panNo"
    name="panNo"
    value={formData.panNo}
    onChange={handleChange}
  />
  {errors.panNo && <div className="error">{errors.panNo}</div>}
</div>
<div className="form-field">
  <label htmlFor="aadharNo">Aadhar No.</label>
  <input
    type="text"
    id="aadharNo"
    name="aadharNo"
    value={formData.aadharNo}
    onChange={handleChange}
  />
  {errors.aadharNo && <div className="error">{errors.aadharNo}</div>}
</div>
<button type="submit" disabled={!Object.values(formData).every((val) => val)}>Submit</button>
      </form>
    </div>
  );
};

export default Form;

