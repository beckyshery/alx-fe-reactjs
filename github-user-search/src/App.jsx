// src/App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/User _List';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUsers([response.data]); // Wrap in an array for UserList
    } catch (error) {
      console.error('Error fetching user:', error);
      setUsers([]); // Clear users on error
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <User List users={users} />
    </div>
  );
}

export default App;