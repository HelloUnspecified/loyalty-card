import React from 'react';
import { siteInfo } from '../utilities';
import styled from 'styled-components';
import Icon from './Icon';

const Logo = styled.img`
  height: 7rem;
  padding-right: 2rem;
`;

const ActionRow = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
`;

const Header = ({ className, setAddingNew }) => {
  const { logo, name } = siteInfo;

  return (
    <header className={className}>
      <Logo src={logo} alt={name} />
      <h1>{name}</h1>
      <ActionRow>
        <Icon
          icon="plus"
          height="40"
          width="40"
          viewBoxHeight="20"
          viewBoxWidth="20"
          onClick={() => setAddingNew(true)}
        />
        <Icon
          icon="preview"
          height="40"
          width="40"
          viewBoxHeight="20"
          viewBoxWidth="20"
        />
      </ActionRow>
    </header>
  );
};

export default styled(Header)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  svg {
    fill: ${({ theme }) => theme.colors.gray};
    padding: 0 2rem;
  }
`;
