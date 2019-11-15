import React from 'react';
import ListItemToDo from './ListItemToDo'

const ListToDo = ({ toDoData }) => {

  const listItems = toDoData.map(
    ({ idData, ...item }) => {
      return (
        <ListItemToDo key={idData} {...item} />
      );
    }
  );

  return (
    <div >
      {listItems}
    </div>
  );
};

export default ListToDo;