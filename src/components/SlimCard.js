import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DotRow, Icon } from '../components';
import { ContentBlock } from '../utilities';

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
  // TODO: get datetime last served from backend, this is to fake a datetime for demo
  const sampleTime = () => {
    let today = new Date();
    today.setMinutes(
      today.getMinutes() - Math.floor(Math.random() * Math.floor(60)),
    );
    return today.toLocaleString();
  };

  return (
    <Link to={`/member/${id}`} className={className} key={name}>
      <LastServed>{sampleTime()}</LastServed>
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
          <DotRow filledDots={numberOfPunches} id={id} />
        </div>
      </CardRow>
    </Link>
  );
};

export default styled(SlimCard)`
  ${ContentBlock}
  flex-direction: row;
  margin: 1rem auto;
  align-items: center;
  width: 100%;

  svg {
    fill: ${({ theme }) => theme.colors.mediumGray};

    &.filled {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
