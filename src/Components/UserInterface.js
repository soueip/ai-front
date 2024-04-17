import React from 'react';
import { useSelector } from 'react-redux';

function UserInterface() {
  const user=useSelector((state)=>state?.user?.user)
  console.log(user)
  return (
    <div>
      <h1>Welcome to the {user?.name} Interface!</h1>
      <p>Here you can find all sorts of information and tools for managing your account.</p>
      <ul>
        <li>View your account details</li>
        <li>Update your billing information</li>
        <li>Change your password</li>
        <li>View your order history</li>
      </ul>
    </div>
  );
}

export default UserInterface;