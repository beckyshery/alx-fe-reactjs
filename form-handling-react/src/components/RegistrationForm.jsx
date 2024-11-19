import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for controlled inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Validation check
    if (!username || !email || !password) {
      alert('All fields are required!');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Registration successful!');

    // Reset form fields
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username} // Controlled value
          onChange={handleChange} // Update state
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email} // Controlled value
          onChange={handleChange} // Update state
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password} // Controlled value
          onChange={handleChange} // Update state
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
