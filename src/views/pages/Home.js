import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import styled from 'styled-components';
import { ContentBlock, DemoDescription, LargeButton } from '../../utilities';

const Home = ({ className }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className={className}>
      <h2>Welcome to Loyal Rooster!</h2>
      <DemoDescription>
        Loyal Rooster is the app that lets <strong>YOU</strong> set the custom
        loyalty program for <strong>YOUR</strong> customers.
        <br />
        <br />
        Here is a demo app of the portion that is employee facing,
        <br />
        used to track purchases or actions by the customers.
        <br />
        <br />
        In this example, the loyalty program revolves around drink purchases.
        <br />
        After 5 drinks the customer receives a free drink they can redeem.
        <br />
        <br />
        {!isAuthenticated && (
          <LargeButton onClick={() => loginWithRedirect({})}>
            Login to get started!
          </LargeButton>
        )}
      </DemoDescription>
    </div>
  );
};

export default styled(Home)`
  ${ContentBlock}
`;
