import { Machine } from 'xstate';

export const MENU_STATES = {
  CLOSED: 'closed',
  OPENED: 'opened',
};

export const MENU_EVENTS = {
  CLOSE: 'CLOSE',
  OPEN: 'OPEN',
};

export const menuMachine = Machine({
  id: 'menu',
  initial: MENU_STATES.CLOSED,
  states: {
    [MENU_STATES.CLOSED]: {
      on: {
        [MENU_EVENTS.OPEN]: MENU_STATES.OPENED,
      },
    },
    [MENU_STATES.OPENED]: {
      on: {
        [MENU_EVENTS.CLOSE]: MENU_STATES.CLOSED,
      },
    },
  },
});

// import { Machine } from 'xstate';

// export const menuMachine = Machine({
//   id: 'page',
//   initial: 'recent',
//   states: {
//     addingNew: {
//       // initial: 'off',
//       on: {
//         on: { TOGGLE_ADD_NEW: 'off' },
//       },
//       off: {
//         on: { TOGGLE_ADD_NEW: 'on' },
//       },
//     },
//     recent: {
//       // initial: 'on',
//       on: {
//         on: { TOGGLE_ADD_NEW: 'off' },
//       },
//       off: {
//         on: { TOGGLE_ADD_NEW: 'on' },
//       },
//     },
//     searching: {
//       // initial: 'off',
//       on: {
//         on: { TOGGLE_SEARCH: 'off' },
//       },
//       off: {
//         on: { TOGGLE_SEARCH: 'on' },
//       },
//     },
//   },
// });
