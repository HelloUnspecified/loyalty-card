import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 3rem);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 2rem auto;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
`;

const StyledSubmit = styled.input`
  padding: 1.75rem 4rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.fonts.light};
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const AddNew = ({ className }) => {
  const { register, handleSubmit, watch, errors, formState } = useForm();

  const onSubmit = data => {
    console.log(data);
    // closeForm();
  };

  const onCancel = () => {
    if (formState.dirtyFields) {
      console.log('values changed');
    }
  };

  console.log(watch('name')); // watch input value by passing the name of it

  // /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
          <h2>Add New</h2>
          <TextInput
            fieldId="name"
            label="Name"
            register={register}
            errors={errors}
            required
          />
          <TextInput
            fieldId="phone"
            label="Phone"
            register={register}
            errors={errors}
            required
          />
          <TextInput
            fieldId="email"
            label="Email"
            register={register}
            errors={errors}
          />
          <ButtonRow>
            <StyledSubmit type="submit" />
            <Button label="Cancel" onClick={onCancel}>
              Cancel
            </Button>
          </ButtonRow>
        </FormFields>
      </form>
    </div>
  );
};

export default styled(AddNew)``;
