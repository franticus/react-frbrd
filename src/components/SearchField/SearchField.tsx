import React from 'react';
import s from './SearchField.module.scss';
import { SearchFieldProps } from './SearchField.types';

const SearchField: React.FC<SearchFieldProps> = (props) => {
  const { searchTerm, handleSearch, handleResetUsers } = props;

  return (
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
  );
};

export default SearchField;
