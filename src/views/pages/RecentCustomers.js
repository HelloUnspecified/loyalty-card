import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { shuffle, slice } from 'lodash';
import SlimCard from '../../components/SlimCard';
import { sampleCustomers } from '../../utilities';

const RecentCustomers = ({ className }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(slice(shuffle(sampleCustomers), 0, 3));
  }, []);

  return (
    <div className={className}>
      <h2>Recent Customers</h2>
      {customers.map(customer => (
        <SlimCard
          id={customer.id}
          name={customer.name}
          phone={customer.phone}
          numberOfPunches={customer.numberOfPunches}
          freeDrink={customer.freeDrinks > 0}
        />
      ))}
    </div>
  );
};

export default styled(RecentCustomers)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
