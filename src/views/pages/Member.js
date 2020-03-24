import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useMachine } from '@xstate/react';
import { useForm } from 'react-hook-form';

import DotRow from '../../components/DotRow';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import TextInput from '../../components/TextInput';
import {
  memberMachine,
  MEMBER_STATES,
  MEMBER_EVENTS,
} from '../../machines/member';

const SAMPLE_MEMBER = {
  name: 'Beyonce Knowles',
  email: 'queen@bey.com',
  phone: '888.867.5309',
  numberFreeDrinks: 2,
  numberOfPunches: 3,
  freeDrink: true,
};

const BackArrow = styled(Icon)`
  fill: ${({ theme }) => theme.colors.darkGray};
`;

const BackText = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 0;
  padding: 0.5rem 0 0 0;
  line-height: 1;
`;

const EditMemberForm = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const SlimTextInput = styled(TextInput)`
  margin: 0.5rem;

  input[type='text'] {
    padding: 1rem;
  }
`;

const Name = styled.h3`
  margin: 1rem 0;
  text-align: left;
  font-size: 3.5rem;
`;

const StyledP = styled.p`
  margin-bottom: 0;
  margin-top: 0.5rem;
  text-align: left;
  font-size: 2rem;
  line-height: 1.5;
`;

const MoreDetails = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
  padding-top: 1rem;
  width: 100%;
  text-align: left;
`;

const NumberFreeDrinks = styled.p`
  font-size: 2.6rem;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 3rem;
  left: 3.4rem;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 700;
}
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
`;

const Member = ({ className }) => {
  const [state, send] = useMachine(memberMachine);
  const { register, handleSubmit, watch, errors } = useForm();
  const { id } = useParams();
  let history = useHistory();

  const {
    name,
    email,
    phone,
    numberFreeDrinks,
    numberOfPunches,
    freeDrink,
  } = SAMPLE_MEMBER;

  // need to figure out setting of state on loading stuffs
  send(MEMBER_EVENTS.FETCH);
  send(MEMBER_EVENTS.LOAD);

  const punch = () => {
    // fire punch event
    send(MEMBER_EVENTS.PUNCH);
    // after save of punch complete fire save event
    // send(MEMBER_EVENTS.SAVE);
  };

  const redeem = () => {
    // fire redeem event
    send(MEMBER_EVENTS.REDEEM);
    // after save of redeem complete fire save event
    // send(MEMBER_EVENTS.SAVE);
  };

  const edit = () => {
    send(MEMBER_EVENTS.EDIT);
  };

  const save = () => {
    send(MEMBER_EVENTS.SAVE);
  };

  const cancel = () => {
    send(MEMBER_EVENTS.CANCEL);
  };

  const showModal =
    state.matches(MEMBER_STATES.REDEEMING_DRINK) ||
    state.matches(MEMBER_STATES.PUNCHING_CARD);

  const modalText = state.matches(MEMBER_STATES.PUNCHING_CARD)
    ? `Punch card ${name}?`
    : `Redeem drink for ${name}?`;

  const modalButtonText = state.matches(MEMBER_STATES.PUNCHING_CARD)
    ? 'Punch'
    : 'Redeem';

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: '2rem',
        }}
        onClick={() => history.go(-1)}
      >
        <BackArrow icon="arrow" height="20" width="20" className="left" />
        <BackText>Back</BackText>
      </div>
      <div className={className}>
        <EditMemberForm onSubmit={handleSubmit(save)}>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            {!state.matches(MEMBER_STATES.EDITING) && <Name>{name}</Name>}
            {state.matches(MEMBER_STATES.EDITING) && (
              <SlimTextInput
                fieldId="name"
                value={name}
                register={register}
                errors={errors}
              />
            )}

            {!state.matches(MEMBER_STATES.EDITING) && (
              <StyledP>{phone}</StyledP>
            )}
            {state.matches(MEMBER_STATES.EDITING) && (
              <SlimTextInput
                fieldId="phone"
                value={phone}
                register={register}
                errors={errors}
              />
            )}

            {!state.matches(MEMBER_STATES.EDITING) && (
              <StyledP>{email}</StyledP>
            )}
            {state.matches(MEMBER_STATES.EDITING) && (
              <SlimTextInput
                fieldId="email"
                value={email}
                register={register}
                errors={errors}
              />
            )}
          </div>
        </EditMemberForm>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            paddingTop: '2rem',
            alignItems: 'center',
          }}
        >
          <DotRow
            filledDots={numberOfPunches}
            punch={punch}
            size="5rem"
            align="start"
          />
          <div style={{ position: 'relative' }} onClick={redeem}>
            {numberFreeDrinks && (
              <NumberFreeDrinks>{numberFreeDrinks}</NumberFreeDrinks>
            )}
            <Icon
              icon="drink"
              className={freeDrink ? 'filled' : ''}
              height="110"
              width="110"
              viewBoxHeight="110"
              viewBoxWidth="110"
            />
          </div>
        </div>
        <MoreDetails>
          <p>Joined: 6/1/19</p>
          <p>Lifetime Punches: 25</p>
          <p>Lifetime Free Drinks: 3</p>
        </MoreDetails>
        <ButtonRow>
          {state.matches(MEMBER_STATES.DISPLAYING) && (
            <Button label="Edit" clickHandler={edit} />
          )}
          {state.matches(MEMBER_STATES.EDITING) && (
            <Button label="Save" clickHandler={save} />
          )}
          {state.matches(MEMBER_STATES.EDITING) && (
            <Button
              label="Cancel"
              clickHandler={cancel}
              style={{ marginLeft: '2rem' }}
            />
          )}
        </ButtonRow>
      </div>

      {/* Confirm modal */}
      <Modal showModal={showModal} onClose={cancel}>
        <div style={{ minHeight: '20rem' }}>
          <p style={{ padding: '3rem 0 5rem 0' }}>{modalText}</p>
          <ButtonRow>
            <Button label={modalButtonText} clickHandler={save} />
            <Button
              label="Cancel"
              clickHandler={cancel}
              style={{ marginLeft: '2rem' }}
            />
          </ButtonRow>
        </div>
      </Modal>
    </>
  );
};

export default styled(Member)`
  display: flex;
  width: calc(100vw - 3rem);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: 2rem auto;
  align-items: center;
  flex-direction: column;

  svg {
    fill: ${({ theme }) => theme.colors.mediumGray};

    &.filled {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
