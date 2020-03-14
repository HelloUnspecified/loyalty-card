import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { siteInfo } from '../utilities';
import Icon from './Icon';

const Name = styled.h3`
  margin: 0;
  text-align: left;
`;

const Phone = styled.p`
  margin-bottom: 0;
  margin-top: 0.5rem;
  text-align: left;
`;

const dotStyle = css`
  height: 4rem;
  width: 4rem;
  border-radius: 4rem;
  margin: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const FilledDot = styled.div`
  ${dotStyle}
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const OpenDot = styled.div`
  ${dotStyle}
`;
const DotRow = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
  margin-right: 2rem;
`;

const SlimCard = ({ className, freeDrink, name, numberOfPunches, phone }) => {
  const { punchesToFree } = siteInfo;

  return (
    <div className={className}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Name>{name}</Name>
        <Phone>{phone}</Phone>
      </div>
      <DotRow>
        {Array.from({ length: numberOfPunches }, (x, i) => (
          <FilledDot />
        ))}
        {Array.from({ length: punchesToFree - numberOfPunches }, (x, i) => (
          <OpenDot />
        ))}
      </DotRow>
      <Icon
        icon="drink"
        className={freeDrink ? 'filled' : ''}
        height="90"
        width="90"
        viewBoxHeight="110"
        viewBoxWidth="110"
      />
    </div>
  );
};

export default styled(SlimCard)`
  display: flex;
  width: 80rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 1rem;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.mediumGray};

    &.filled {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
