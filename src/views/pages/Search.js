import React, { useState } from 'react';
import styled from 'styled-components';
import { filter, range } from 'lodash';
import { useForm } from 'react-hook-form';
import { useMachine } from '@xstate/react';
import { ContentBlock, sampleCustomers } from '../../utilities';
import { TextInput } from '../../components';
import { searchMachine } from '../../machines/search';
import SlimCard from '../../components/SlimCard';

const SlimTextInput = styled(TextInput)`
  margin: 0.5rem;

  input[type='text'] {
    padding: 1rem;
  }
`;

const AlphaSearchBar = styled.div`
  position: fixed;
  right: 0;
  top: 11.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 11.5rem);
  justify-content: space-evenly;
`;

const Letter = styled.p`
  color: ${({ theme }) => theme.colors.fonts.dark};
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  padding: 0 1rem;
  line-height: 1;
`;

const Search = ({ className }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [searchResults, setSearchResults] = useState([]);
  const [state, send] = useMachine(searchMachine);
  const aCharCode = 'A'.charCodeAt(0);

  // TODO: For actual implementation, needs to be wired into endpoint to search client's customers
  const handleSearch = searchText => {
    const searchResults = filter(sampleCustomers, customer => {
      return customer.name.toLowerCase().includes(searchText);
    });
    setSearchResults(searchResults);
  };

  return (
    <>
      <div className={className}>
        <h2>Search</h2>
        <SlimTextInput
          fieldId="search"
          register={register}
          errors={errors}
          placeholder="name, phone, email"
          onChange={event => handleSearch(event.target.value)}
        />
      </div>
      {searchResults.map(customer => (
        <SlimCard
          id={customer.id}
          name={customer.name}
          phone={customer.phone}
          numberOfPunches={customer.numberOfPunches}
          freeDrink={customer.freeDrinks > 0}
        />
      ))}
      <AlphaSearchBar>
        {range(aCharCode, aCharCode + 26).map(num => (
          <Letter key={String.fromCharCode(num)}>
            {String.fromCharCode(num)}
          </Letter>
        ))}
      </AlphaSearchBar>
    </>
  );
};

export default styled(Search)`
  ${ContentBlock}
  margin: 2rem 0;
`;
