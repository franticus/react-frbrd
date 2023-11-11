import React from 'react';
import UserList from './components/UserList/UserList';
import s from "./index.module.scss";
// import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className={s.App}>
      <UserList />
      {/* <TodoList /> */}
    </div>
  );
};

export default App;
