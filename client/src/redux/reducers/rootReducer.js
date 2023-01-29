import { combineReducers } from 'redux';
import userReducer from './userReducer';
import usersListReducer from './usersListReducer';
import usersListSettingsReducer from './usersListSettingsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  usersList: usersListReducer,
  userListSettings: usersListSettingsReducer,
});

export default rootReducer;
