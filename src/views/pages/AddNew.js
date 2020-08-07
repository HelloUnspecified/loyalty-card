import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../components';
import { ContentBlock, DemoDescription } from '../../utilities';

const FormFields = styled.div`
  ${ContentBlock}
`;

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 2rem 0;
`;

const StyledInputButton = styled.input`
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
    console.log('submit data:', data);
    // TODO: for real client application need to add call to add new member to backend
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFields>
          <h2>Add New</h2>
          <DemoDescription>
            This is the form that allows your employee to add a new customer to
            your loyalty program.
            <br />
            <br />
            Fully customizable to your business needs as to what information you
            <br />
            want to collect and require to join program.
          </DemoDescription>
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
            registerOptions={{
              pattern: {
                value: /^\\d{10}$/,
                message: 'Phone number needs to be 10 digits',
              },
            }}
          />
          <TextInput
            fieldId="email"
            label="Email"
            register={register}
            errors={errors}
            type="email"
            registerOptions={{
              pattern: {
                value: /S+@S+.S+/,
                message: 'Entered value does not match email format',
              },
            }}
          />
          <ButtonRow>
            <StyledInputButton type="submit" />
            <StyledInputButton type="reset" value="Cancel" />
          </ButtonRow>
        </FormFields>
      </form>
    </div>
  );
};

export default styled(AddNew)``;
