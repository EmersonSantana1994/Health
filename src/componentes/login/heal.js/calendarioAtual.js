// DateInput.js
import React from 'react';

const DateInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="dd/mm/aaaa"
    />
  );
};

export default DateInput;