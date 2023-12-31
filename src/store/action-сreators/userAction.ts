import { Dispatch } from 'redux';
import axios from 'axios';
import { UserAction, UserActionTypes } from '../types';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'An error occurred while loading users.',
      });
    }
  };
};
