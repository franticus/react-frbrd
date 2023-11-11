import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { User } from './User.types';
import { highlightText } from '../../utils/highlightText';
import Modal from '../Modal/Modal';
import SearchField from '../SearchField/SearchField';
import s from './UserList.module.scss';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [choosenUser, setChoosenUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
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

  const handleChoosenUser = (userId: string) => {
    const choosenUser =
      filteredUsers.find((item) => item.id === userId) || null;
    setChoosenUser(choosenUser);
  };

  const handleResetUsers = () => {
    setFilteredUsers(users);
  };

  const renderModal = () => {
    return (
      choosenUser && (
        <Modal user={choosenUser} onClose={() => setChoosenUser(null)} />
      )
    );
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <SearchField
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleResetUsers={handleResetUsers}
      />
      <ul className={s.user_list}>
        {filteredUsers.map((user) => (
          <li className={s.user_item} key={user.id}>
            <div
              className={s.user_info}
              onClick={() => handleChoosenUser(user.id)}
            >
              <span className={s.user_info_name}>
                {highlightText(user.name, searchTerm)} |
              </span>
              <span className={s.user_info_username}>
                {highlightText(user.username, searchTerm)} |
              </span>
              <span className={s.user_info_email}>
                {highlightText(user.email, searchTerm)}
              </span>
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
      {renderModal()}
    </div>
  );
};

export default UserList;
