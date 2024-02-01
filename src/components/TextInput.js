import React from 'react'

export default function TextInput({
  labelDescription = 'Description of the label',
  inputValue = 'Value of the input',
  onInputChange = null,
  id = 'text_input_id'
}) {

  function handleInputChange({currentTarget}) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }

  }
  return (
    <div>
      <div className="flex flex-col my-4">
        <label className="text-sm mb-1" htmlFor={id}>
          {labelDescription}
        </label>
        <input  
          autoFocus
          id={id}
          className="border p-1"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
