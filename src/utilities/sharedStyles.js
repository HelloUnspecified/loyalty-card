import { css } from 'styled-components';

export const ContentBlock = css`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 3rem);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 2rem auto;
  position: relative;
`;
