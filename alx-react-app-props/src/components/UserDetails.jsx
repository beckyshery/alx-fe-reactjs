import React, { useContext } from 'react';
import UserContext from '../UserContext'; 

function UserDetails({userDataimport React, { useContext } from 'react';
import UserContext from '../UserContext';console.log('UserDetails component rendered');
console.log('User data:', userData);

function UserDetails() {
  const userData = useContext(UserContext);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;}) {
  const userData = useContext(UserContext); 

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
