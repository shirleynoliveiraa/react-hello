import React from 'react'

export default function CheckboxInput({
  labelDescription = 'Description of the checkbox',
  inputValue = 'Value of the input',
  onCheckboxChange = null,
  id = 'checkbox_input_id'
}) {

  function handleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }

  }
  return (
    <div>
      <div className="flex flex-row items-center space-x-2 my-4">
        <input  
          autoFocus
          id={id}
          className="border p-1"
          type="checkbox"
          value={inputValue}
          onChange={handleInputChange}
        />
        <label className="text-sm mb-1" htmlFor={id}>
          {labelDescription}
        </label>
      </div>
    </div>
  );
}
