import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SlimCard from './SlimCard';

const RecentCustomers = ({ className }) => {
  return (
    <div className={className}>
      <h2>Recent Cards</h2>
      <SlimCard name="Sara Gibbons" phone="586.746.7554" numberOfPunches="2" />
      <SlimCard
        name="Clark Sell"
        phone="847.921.7467"
        numberOfPunches="4"
        freeDrink
      />
    </div>
  );
};

export default styled(RecentCustomers)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
