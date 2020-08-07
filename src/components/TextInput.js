import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.div`
  position: relative;
  margin: 2.25rem 1rem;

  span {
    position: absolute;
    top: 6.2rem;
    left: 0;
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const TextInput = ({
  className,
  errors,
  fieldId,
  label,
  onChange,
  placeholder,
  register,
  registerOptions,
  required,
  value,
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const fieldRegisterOptions = {
    ...(required && { required: true }),
    ...registerOptions,
  };

  return (
    <StyledTextInput className={className}>
      <input
        name={fieldId}
        ref={register}
        value={value}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        onChange={onChange}
        ref={register(fieldRegisterOptions)}
        type="text"
        className={required && 'required'}
        placeholder={placeholder}
      />
      {label && (
        <label htmlFor={fieldId} className="active">
          {label}
        </label>
      )}
      {errors[fieldId] && <span role="alert">{errors[fieldId].message}</span>}
    </StyledTextInput>
  );
};
