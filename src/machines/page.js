import { Machine } from 'xstate';

export const PAGE_STATES = {
  ADDING_NEW: 'addNew',
  RECENT_CUSTOMERS: 'recent',
  SEARCHING: 'search',
};

export const PAGE_EVENTS = {
  ADD_NEW: 'ADD_NEW',
  RECENT: 'RECENT',
  SEARCH: 'SEARCH',
};

export const pageMachine = Machine({
  id: 'page',
  initial: PAGE_STATES.RECENT_CUSTOMERS,
  states: {
    [PAGE_STATES.ADDING_NEW]: {
      on: {
        [PAGE_EVENTS.ADD_NEW]: PAGE_STATES.ADDING_NEW,
      },
    },
    [PAGE_STATES.RECENT_CUSTOMERS]: {
      on: {
        [PAGE_EVENTS.RECENT]: PAGE_STATES.RECENT_CUSTOMERS,
      },
    },
    [PAGE_STATES.SEARCHING]: {
      on: {
        [PAGE_EVENTS.SEARCH]: PAGE_STATES.SEARCHING,
      },
    },
  },
});
