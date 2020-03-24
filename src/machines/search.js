import { Machine } from 'xstate';

export const SEARCH_STATES = {
  IDLE: 'idle',
  TYPING: 'typing',
  LOADING: 'loading',
  DISPLAYING: 'displaying',
};

export const SEARCH_EVENTS = {
  TYPE: 'TYPE',
  FETCH: 'FETCH',
  LOAD: 'LOAD',
};

export const searchMachine = Machine({
  id: 'search',
  initial: SEARCH_STATES.IDLE,
  states: {
    [SEARCH_STATES.IDLE]: {
      on: {
        [SEARCH_EVENTS.TYPE]: SEARCH_STATES.TYPING,
      },
    },
    [SEARCH_STATES.TYPING]: {
      on: {
        [SEARCH_EVENTS.FETCH]: SEARCH_STATES.LOADING,
      },
    },
    [SEARCH_STATES.LOADING]: {
      on: {
        [SEARCH_EVENTS.LOAD]: SEARCH_STATES.DISPLAYING,
      },
    },
    [SEARCH_STATES.DISPLAYING]: {
      on: {
        [SEARCH_EVENTS.TYPE]: SEARCH_STATES.TYPING,
      },
    },
  },
});
