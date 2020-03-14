import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import TextInput from './TextInput';

const AddNew = ({ closeForm }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    closeForm();
  };

  console.log(watch('name')); // watch input value by passing the name of it

  // /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  return (
    <>
      <h2>Add New</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          fieldId="name"
          label="Name"
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
        <TextInput
          fieldId="phone"
          label="Phone"
          register={register}
          errors={errors}
          required
        />
        <input type="submit" />
        <button onClick={() => closeForm()}>Cancel</button>
      </form>
    </>
  );
};

export default styled(AddNew)``;
