export interface UserAddress {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo?: {
    lat: string;
    lng: string;
  };
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  company: {
    name: string;
  };
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
