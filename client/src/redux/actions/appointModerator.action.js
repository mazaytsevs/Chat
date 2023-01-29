/* eslint-disable camelcase */
import { GET_ALL_USERS_SETTINGS } from '../types/types';
import * as endPoints from '../../config/endPoints';

export const appointModerator = (users) => ({
  type: GET_ALL_USERS_SETTINGS,
  payload: users,
});

export const demoteModerator = (users) => ({
  type: GET_ALL_USERS_SETTINGS,
  payload: users,
});

export const appointModeratorThunk = (data) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.appointModerator(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const users = await response.json();
    dispatch(appointModerator(users));
  } catch (error) {
    console.log(error);
  }
};

export const demoteModeratorThunk = (data) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.demoteModerator(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const users = await response.json();
    dispatch(demoteModerator(users));
  } catch (error) {
    console.log(error);
  }
};
