// Logout.js
import React from 'react';

const Logout = () => {

  const handleLogout = () => {
    console.log("Logging out...");

    // Clear all items from localStorage
    localStorage.clear();
    console.log("All items in localStorage cleared.");
  };

  return { handleLogout };
};

export default Logout;
