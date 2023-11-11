import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import s from './UserList.module.scss';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.value:', e.target.value)
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className={s.filter}>
        <input
          className={s.filter_input}
          type='text'
          placeholder='Filter...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <ul className={s.user_list}>
        {users.map((user) => (
          <li className={s.user_item} key={user.id}>
            <div className={s.user_info}>
              <span className={s.user_info_name}>{user.name} |</span>
              <span className={s.user_info_username}>{user.username} |</span>
              <span className={s.user_info_email}>{user.email}</span>
            </div>
            <button className={s.button}>&#10008;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
