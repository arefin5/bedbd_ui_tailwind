'use client'
import { useEffect } from "react"

export default function PropertyTypeInput() {
  const onChangeHandler = (propertyTypeSelect, inputElements) => (e) => {
    const inputElementId = e.target.id;
    const labelElements = propertyTypeSelect.querySelectorAll('label');

    labelElements.forEach(label => {
        const isTargetLabel = label.getAttribute('for') === inputElementId;
        label.classList.toggle('custom-btm-line-primary-400', isTargetLabel);
    });
};
  useEffect(() => {
    const propertyTypeSelect = document.getElementById('property_type_select');
    const inputElements = propertyTypeSelect.querySelectorAll('input');

    const handler = onChangeHandler(propertyTypeSelect, inputElements);

    inputElements.forEach(input => {
        input.addEventListener('change', handler);
    });

    document.getElementById('all').click();

    // Cleanup function to remove event listeners when component unmounts
    return () => {
        inputElements.forEach(input => {
            input.removeEventListener('change', handler);
        });
    };
}, []);

  return null;
}