import { LOAD_USERS, LOAD_USERS_FAILED } from '../constants/actionsTypes';

const INITIAL_STATE = {
  users: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case LOAD_USERS_FAILED:
      return {
        ...state,
        users: [],
        error: true,
      };

    default:
      return state;
  }
};
