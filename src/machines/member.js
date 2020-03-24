import { Machine } from 'xstate';

export const MEMBER_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  DISPLAYING: 'displaying',
  REDEEMING_DRINK: 'redeeming drink',
  PUNCHING_CARD: 'punching card',
  EDITING: 'editing',
};

export const MEMBER_EVENTS = {
  FETCH: 'FETCH',
  LOAD: 'LOAD',
  REDEEM: 'REDEEM',
  PUNCH: 'PUNCH',
  SAVE: 'SAVE',
  EDIT: 'EDIT',
  CANCEL: 'CANCEL',
};

export const memberMachine = Machine({
  id: 'member',
  initial: MEMBER_STATES.IDLE,
  states: {
    [MEMBER_STATES.IDLE]: {
      on: {
        [MEMBER_EVENTS.FETCH]: MEMBER_STATES.LOADING,
      },
    },
    [MEMBER_STATES.LOADING]: {
      on: {
        [MEMBER_EVENTS.LOAD]: MEMBER_STATES.DISPLAYING,
      },
    },
    [MEMBER_STATES.DISPLAYING]: {
      on: {
        [MEMBER_EVENTS.REDEEM]: MEMBER_STATES.REDEEMING_DRINK,
        [MEMBER_EVENTS.PUNCH]: MEMBER_STATES.PUNCHING_CARD,
        [MEMBER_EVENTS.EDIT]: MEMBER_STATES.EDITING,
      },
    },
    [MEMBER_STATES.REDEEMING_DRINK]: {
      on: {
        [MEMBER_EVENTS.SAVE]: MEMBER_STATES.DISPLAYING,
        [MEMBER_EVENTS.CANCEL]: MEMBER_STATES.DISPLAYING,
      },
    },
    [MEMBER_STATES.PUNCHING_CARD]: {
      on: {
        [MEMBER_EVENTS.SAVE]: MEMBER_STATES.DISPLAYING,
        [MEMBER_EVENTS.CANCEL]: MEMBER_STATES.DISPLAYING,
      },
    },
    [MEMBER_STATES.EDITING]: {
      on: {
        [MEMBER_EVENTS.SAVE]: MEMBER_STATES.DISPLAYING,
        [MEMBER_EVENTS.CANCEL]: MEMBER_STATES.DISPLAYING,
      },
    },
  },
});
