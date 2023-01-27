/* eslint-disable camelcase */
import { GET_ALL_USERS, GET_ALL_USERS_SETTINGS } from '../types/types';
import * as endPoints from '../../config/endPoints';

export const getUsers = (users) => ({
  type: GET_ALL_USERS,
  payload: users,
});

export const getUsersSettings = (users) => ({
  type: GET_ALL_USERS_SETTINGS,
  payload: users,
});

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getAllUsers(), {
      method: 'GET',
    });
    if (response.status === 200) {
      const users = await response.json();
      console.log('user', users);
      dispatch(getUsers(users));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllUserssettings = (user_id) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getUsersSettings(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ initiator_id: user_id }),
    });
    const users = await response.json();
    console.log('user settings', users);
    dispatch(getUsersSettings(users));
  } catch (error) {
    console.log(error);
  }
};
