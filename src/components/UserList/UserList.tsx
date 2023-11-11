import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import s from './UserList.module.scss';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <ul className={s.user_list}>
        {users.map((user) => (
          <li className={s.user_item} key={user.id}>
            <div className={s.user_info}>
              <span>{user.name} |</span>
              <span>{user.username} |</span>
              <span>{user.email}</span>
            </div>
            <button className={s.button}>&#10008;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
