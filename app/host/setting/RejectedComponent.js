import React from 'react';

const RejectedComponent = ({ data }) => {
  return (
    <div>
     {(!data || data.length === 0) && <p>No listed bookings available.</p>}
      {/* {data.length === 0 && <p>No listed bookings available.</p>} */}
      {/* Render the listed data */}
      {data.map((item) => (
        <div key={item._id}>{/* Display listed booking details here */}</div>
      ))}
    </div>
  );
};

export default RejectedComponent;




