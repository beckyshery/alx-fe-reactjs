import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for controlled inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // For validation errors

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!username) validationErrors.username = 'Username is required.';
    if (!email) validationErrors.email = 'Email is required.';
    if (!password) validationErrors.password = 'Password is required.';

    setErrors(validationErrors);

    // If there are errors, stop form submission
    if (Object.keys(validationErrors).length > 0) return;

    // Simulate form submission
    console.log('Form submitted:', { username, email, password });
    alert('Registration successful!');

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} // Controlled value
          onChange={(e) => setUsername(e.target.value)} // Update state
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // Controlled value
          onChange={(e) => setEmail(e.target.value)} // Update state
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} // Controlled value
          onChange={(e) => setPassword(e.target.value)} // Update state
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
