
"use client";

import React from 'react';
import { SquareCheckBig, Square } from 'lucide-react';

const AgreeBox = ({ id, label, checked, onChange }) => {
  return (
    <div className="select-none flex items-center w-max mt-10">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden" 
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

export default AgreeBox;

