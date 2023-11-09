import React from 'react';
import { useTypesSelector } from '../hooks/useTypesSelector';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypesSelector((state) => state.user);

  return <div>UserList</div>;
};

export default UserList;
