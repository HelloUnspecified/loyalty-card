import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';
import DotRow from './DotRow';

const Name = styled.h3`
  margin: 0;
  text-align: left;
`;

const Phone = styled.p`
  margin-bottom: 0;
  margin-top: 0.5rem;
  text-align: left;
`;

const LastServed = styled.p`
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  margin: 0;
  padding: 0;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;

const SlimCard = ({
  className,
  freeDrink,
  id,
  name,
  numberOfPunches,
  phone,
}) => {
  return (
    <Link to={`/member/${id}`} className={className} key={name}>
      <LastServed>6:41pm</LastServed>
      <Icon
        icon="drink"
        className={freeDrink ? 'filled' : ''}
        height="70"
        width="70"
        viewBoxHeight="100"
        viewBoxWidth="100"
      />
      <CardRow>
        <Name>{name}</Name>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Phone>{phone}</Phone>
          <DotRow filledDots={numberOfPunches} />
        </div>
      </CardRow>
    </Link>
  );
};

export default styled(SlimCard)`
  display: flex;
  width: calc(100vw - 3rem);
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 1rem;
  align-items: center;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.mediumGray};

    &.filled {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
