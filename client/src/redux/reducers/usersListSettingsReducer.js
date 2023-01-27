import { GET_ALL_USERS_SETTINGS } from '../types/types';

// eslint-disable-next-line default-param-last
const usersListSettingsReducer = (state = null, action) => {
  switch (action.type) {
    case GET_ALL_USERS_SETTINGS:
      return action.payload;
    default:
      return state;
  }
};

export default usersListSettingsReducer;
