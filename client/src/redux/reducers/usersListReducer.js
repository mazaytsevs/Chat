import { GET_ALL_USERS } from '../types/types';

// eslint-disable-next-line default-param-last
const usersListReducer = (state = null, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default usersListReducer;
