import React from 'react';

const Input = ({ name, label, type, value, helpText, onChange, ...rest }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className='form-control'
        name={name}
        id={name}
        {...rest}
        onChange={onChange}
        value={value}
      />
      <small id='helpId' className='form-text text-muted'>
        {helpText}
      </small>
    </div>
  );
};

export default Input;
