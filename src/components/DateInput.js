import React from 'react'

export default function DateInput({
  labelDescription = 'Description of the label',
  inputValue = '2021-10-02',
  onInputChange = null,
  id = 'date_input_id'
}) {

  function handleInputChange({currentTarget}) {
    //console.log(currentTarget);
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
          id={id}
          className="border p-1"
          type="date"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
