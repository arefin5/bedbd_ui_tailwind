import React from 'react';

const ListedComponent = ({ data }) => {
  return (
    <div>
      {(!data || data.length === 0) && <p>No listed bookings available.</p>}
      {/* Render the listed data */}
      {data && data.map((item) => (
        <div key={item._id}>
          {/* Display listed booking details here */}
          {item.name} {/* Example: replace `item.name` with actual data */}
        </div>
      ))}
    </div>
  );
};

export default ListedComponent;

