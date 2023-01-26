import { SET_USER, DELETE_USER } from '../types/types';
import * as endPoints from '../../config/endPoints';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

// export const getUserFromServer = (id) => async (dispatch) => {
//   const response = await fetch(endPoints.getUser(id), {
//     credentials: 'include',
//   });
//   if (response.status === 200) {
//     const currentUser = await response.json();
//     dispatch(setUser(currentUser));
//   }
// };

export const signUp = (payload, navigate) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.signUp(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    });
    if (response.status === 200) {
      const user = await response.json();
      console.log('user', user);
      dispatch(setUser(user));
      navigate('/');
    } else {
      navigate('/auth/reg');
    }
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (payload, navigate) => async (dispatch) => {
  const response = await fetch(endPoints.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/');
  } else {
    navigate('/');
  }
};

export const signOut = (navigate) => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
    localStorage.clear();
    navigate('/');
  }
};

// export const checkAuth = () => async (dispatch) => {
//   const response = await fetch(endPoints.checkAuth(), {
//     credentials: 'include',
//   });
//   if (response.status === 200) {
//     const user = await response.json();
//     dispatch(setUser(user));
//   }
// };
