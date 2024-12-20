// src/components/UserList.jsx
import React from 'react';
import UserCard from './User Card';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.length > 0 ? (
        users.map((user) => <User Card key={user.id} user={user} />)
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;