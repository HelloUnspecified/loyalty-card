import React from 'react';
import styled from 'styled-components';
import SlimCard from '../../components/SlimCard';

const RecentCustomers = ({ className }) => {
  return (
    <div className={className}>
      <h2>Recent Cards</h2>
      <SlimCard
        id="1234"
        name="Sara Gibbons"
        phone="222-222-2222"
        numberOfPunches="2"
      />
      <SlimCard
        id="1234"
        name="Clark Sell"
        phone="111-111-1111"
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