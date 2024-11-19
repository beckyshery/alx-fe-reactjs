import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for controlled inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!username || !email || !password) {
      alert('All fields are required!');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { username, email, password });
    alert('Registration successful!');

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
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
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // Controlled value
          onChange={(e) => setEmail(e.target.value)} // Update state
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} // Controlled value
          onChange={(e) => setPassword(e.target.value)} // Update state
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
