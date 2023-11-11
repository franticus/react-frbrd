import React from 'react';
import UserList from './components/UserList/UserList';
import s from "./index.module.scss";

const App = () => {
  return (
    <div className={s.App}>
      <UserList />
    </div>
  );
};

export default App;
