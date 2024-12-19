import React from 'react';

const ListedComponent = ({ data }) => {
  return (
    <div>
      {data.length === 0 && <p>No listed bookings available.</p>}
      {/* Render the listed data */}
      {data.map((item) => (
        <div key={item._id}>{/* Display listed booking details here */}</div>
      ))}
    </div>
  );
};

export default ListedComponent;
