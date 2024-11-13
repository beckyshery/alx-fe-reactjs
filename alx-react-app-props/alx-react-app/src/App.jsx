// src/App.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext'; // Import the UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>  {/* Provide context with userData */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;