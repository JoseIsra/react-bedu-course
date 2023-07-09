import { LOAD_USERS, LOAD_USERS_FAILED } from '../constants/actionsTypes';
/**
 * All the actions to manipulate
 * the users data
 */

// LOAD USERS CONTENT
export const loadUsers = (users) => {
  return {
    type: LOAD_USERS,
    payload: users,
  };
};

// handle failed users data load
export const loadUsersFailed = () => {
  return {
    type: LOAD_USERS_FAILED,
  };
};

// here a thunk to load the users data
// thunk action creator
// export function loadThunkUser() {
//   // thunk function
//   return async (dispatch) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => dispatch(loadUsers(data)))
//       .catch(() => dispatch(loadUsersFailed()));
//   };
// }

// The same loadThunkUser but with an async await trickier control
export function loadThunkUser() {
  return async (dispatch) => {
    let response = [];
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      response = await res.json();
    } catch {
      dispatch(loadUsersFailed());
      return;
    }
    dispatch(loadUsers(response));
  };
}
