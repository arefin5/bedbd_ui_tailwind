
// import React, { useState } from 'react';
// import { SquareCheckBig, Square } from 'lucide-react';

// const Checkbox = ({ id, label, checked, onChange }) => {
//   return (  
//     <div className="select-none flex items-center w-max mt-10">
//       <input
//         id={id}
//         type="checkbox"
//         checked={checked}
//         onChange={() => {}}
//         readOnly
//         className="invisible"
//       />
//       {checked 
//         ? <SquareCheckBig onClick={onChange} className="icon cursor-pointer" /> 
//         : <Square onClick={onChange} className="icon cursor-pointer" />
//       }
//       <label onClick={onChange} htmlFor={id} className="cursor-pointer ml-2 text-sm font-medium text-gray-900">
//         {label}
//       </label>
//     </div>
//   );
// };

// export default Checkbox;
// Checkbox.js
import React from 'react';
import { SquareCheckBig, Square } from 'lucide-react';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="select-none flex items-center w-max mt-10">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden" // Hide checkbox but keep it accessible
      />
      {checked 
        ? <SquareCheckBig onClick={onChange} className="icon cursor-pointer" /> 
        : <Square onClick={onChange} className="icon cursor-pointer" />
      }
      <label onClick={onChange} htmlFor={id} className="cursor-pointer ml-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

