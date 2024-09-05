import React, { useState } from 'react';
import './Formulario.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    
    switch (name) {
      case 'name':
        if (value.trim() === '') {
          newErrors.name = 'Name is required';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors.email = 'Invalid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'password':
        if (value.length < 6) {
          newErrors.password = 'Password must be at least 6 characters long';
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
