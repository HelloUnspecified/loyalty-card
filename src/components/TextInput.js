import React, { useState } from 'react';
import styled from 'styled-components';

const TextInput = ({
  className,
  errors,
  fieldId,
  label,
  register,
  required,
  value,
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const registerOptions = { ...(required && { required: true }) };

  return (
    <div className={className}>
      <input
        name={fieldId}
        ref={register}
        value={value}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        ref={register(registerOptions)}
        type="text"
        className={required && 'required'}
      />
      {label && (
        <label htmlFor={fieldId} className="active">
          {label}
        </label>
      )}
      {errors[fieldId] && <span>This field is required</span>}
    </div>
  );
};

export default styled(TextInput)`
  position: relative;
  margin: 2.25rem 1rem;

  span {
    position: absolute;
    top: 6.2rem;
    left: 0;
    color: ${({ theme }) => theme.colors.danger};
  }
`;
