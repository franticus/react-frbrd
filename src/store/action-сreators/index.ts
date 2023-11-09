import * as UserActionCreator from './user';
import * as TodoActionCreator from './todo';

export default {
  ...UserActionCreator,
  ...TodoActionCreator,
};
