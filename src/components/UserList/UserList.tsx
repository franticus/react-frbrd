import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { User } from '../../types/user';
import s from './UserList.module.scss';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    users.length || fetchUsers();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleDeleteUsers = (userId: string) => {
    const deleteUser = filteredUsers.filter((item) => item.id !== userId);
    setFilteredUsers(deleteUser);
  };

  const handleResetUsers = () => {
    setFilteredUsers(users);
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
        <button className={s.reset_button} onClick={() => handleResetUsers()}>
          Reset
        </button>
      </div>
      <ul className={s.user_list}>
        {filteredUsers.map((user) => (
          <li className={s.user_item} key={user.id}>
            <div className={s.user_info}>
              <span className={s.user_info_name}>{user.name} |</span>
              <span className={s.user_info_username}>{user.username} |</span>
              <span className={s.user_info_email}>{user.email}</span>
            </div>
            <button
              className={s.del_button}
              onClick={() => handleDeleteUsers(user.id)}
            >
              &#10008;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
