import React, { useState } from 'react';
import styled from 'styled-components';

const TextInput = ({
  className,
  errors,
  fieldId,
  label,
  register,
  required,
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const registerOptions = { ...(required && { required: true }) };

  return (
    <div className={className}>
      <input
        id={fieldId}
        name={fieldId}
        ref={register}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        ref={register(registerOptions)}
        type="text"
        className={required && 'required'}
      />
      <label htmlFor={fieldId} className={hasFocus ? 'active' : ''}>
        {label}
      </label>
      {errors[fieldId] && <span>This field is required</span>}
    </div>
  );
};

export default styled(TextInput)`
  position: relative;
  margin: 5rem 0;
`;
