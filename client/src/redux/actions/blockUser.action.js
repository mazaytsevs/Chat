/* eslint-disable camelcase */
import { GET_ALL_USERS_SETTINGS } from '../types/types';
import * as endPoints from '../../config/endPoints';

export const blockUser = (users) => ({
  type: GET_ALL_USERS_SETTINGS,
  payload: users,
});

export const unblockUser = (users) => ({
  type: GET_ALL_USERS_SETTINGS,
  payload: users,
});

export const blockUserThunk = (data) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.blockUser(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const users = await response.json();
    dispatch(blockUser(users));
  } catch (error) {
    console.log(error);
  }
};

export const unBlockUserThunk = (data) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.unBlockUser(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const users = await response.json();
    dispatch(unblockUser(users));
  } catch (error) {
    console.log(error);
  }
};
