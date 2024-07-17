import React from 'react';

const InputWrapper = ({ label, type, id }) => (
  <div className="input-wrapper">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} />
  </div>
);

export default InputWrapper;
