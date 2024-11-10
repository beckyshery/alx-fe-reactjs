import React from 'react';
<UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
const UserProfile = (props) => {
  return (
    <div className="user-profile">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
