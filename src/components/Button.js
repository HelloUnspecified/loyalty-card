import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1.75rem 4rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.fonts.light};
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Button = ({ label, clickHandler }) => {
  return <StyledButton onClick={clickHandler}>{label}</StyledButton>;
};
