"use client"
import React, { useState } from 'react';
import Icon from '/components/Icon'
import { SquareCheckBig, Square } from 'lucide-react';

const Checkbox = ({ id, label }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked)
  };

  return (  
     <div className="select-none flex items-center w-max mt-10" >
        <input
            id={id}
            type='checkbox'
            // onChange={handleCheckboxChange}
            name='termsConditionAgreemnet'
            checked={checked}
            readOnly
            className="invisible"/>
        {
            checked 
                ? <SquareCheckBig onClick={handleCheckboxChange} className=" icon cursor-pointer" /> 
                : <Square onClick={handleCheckboxChange} className=" icon cursor-pointer" />
        }
        <label onClick={handleCheckboxChange} htmlFor={id} className="cursor-pointer ml-2 text-sm font-medium text-gray-900">
            {label}
        </label>
    </div>
  );
};

export default Checkbox;