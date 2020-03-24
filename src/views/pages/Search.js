import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import { useMachine } from '@xstate/react';
import { ContentBlock } from '../../utilities';
import { TextInput } from '../../components';
import {
  searchMachine,
  SEARCH_STATES,
  SEARCH_EVENTS,
} from '../../machines/search';

const SlimTextInput = styled(TextInput)`
  margin: 0.5rem;

  input[type='text'] {
    padding: 1rem;
  }
`;

const AlphaSearchBar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
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
`;

const Search = ({ className }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [state, send] = useMachine(searchMachine);
  const aCharCode = 'A'.charCodeAt(0);

  return (
    <>
      <div className={className}>
        <h2>Search</h2>
        <SlimTextInput
          fieldId="search"
          register={register}
          errors={errors}
          placeholder="name, phone, email"
        />
      </div>
      <AlphaSearchBar>
        {_.range(aCharCode, aCharCode + 26).map(num => (
          <Letter>{String.fromCharCode(num)}</Letter>
        ))}
      </AlphaSearchBar>
    </>
  );
};

export default styled(Search)`
  ${ContentBlock}
  width: calc(100vw - 7rem);
  margin: 2rem 5rem 0 2rem;
`;
