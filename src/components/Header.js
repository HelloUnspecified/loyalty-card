import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import { siteInfo } from '../utilities';
import styled from 'styled-components';
import { Icon } from './Icon';

const Logo = styled.img`
  height: 7rem;
  padding-right: 2rem;
`;

const ActionRow = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
`;

const Header = ({ className }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { logo, name } = siteInfo;

  return (
    <header className={className}>
      <Link to="/">
        <Logo src={logo} alt={name} />
      </Link>
      <h1>{name}</h1>

      {!isAuthenticated && (
        <div className="flex-grow right">
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        </div>
      )}

      {isAuthenticated && (
        <ActionRow>
          <Link to="/add-new">
            <Icon
              icon="plus"
              height="20"
              width="20"
              viewBoxHeight="24"
              viewBoxWidth="24"
            />
          </Link>
          <Link to="/search">
            <Icon
              icon="preview"
              height="20"
              width="20"
              viewBoxHeight="22"
              viewBoxWidth="22"
            />
          </Link>
          <Link to="/recent">
            <Icon
              icon="recent"
              height="37"
              width="37"
              viewBoxHeight="100"
              viewBoxWidth="100"
            />
          </Link>
          <button onClick={() => logout()}>Log out</button>
        </ActionRow>
      )}
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
