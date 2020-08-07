import styled, { css } from 'styled-components';

export const ContentBlock = css`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 2rem 3rem;
  margin: 2rem auto;
  position: relative;
`;

export const DemoDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  border-left: 4px solid ${({ theme }) => theme.colors.highlight};
  text-align: left;
  padding-left: 4rem;
  font-weight: 300;
`;

export const LargeButton = styled.button`
  padding: 1.75rem 4rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.fonts.light};
  font-size: 1.6rem;
  font-weight: 700;
`;
