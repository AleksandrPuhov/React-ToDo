import React from 'react';
import ButtonGroup from './ButtonGroup'
import SearchInput from './SearchInput'

const SearchPanel = () => {
  return (
    <div className="btn-toolbar m-1" role="toolbar">
      <SearchInput />
      <ButtonGroup />
    </div>
  );
};

export default SearchPanel;