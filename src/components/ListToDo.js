import React from 'react';
import ListItemToDo from './ListItemToDo'

const ListToDo = ({ toDoData }) => {

  const listItems = toDoData.map(
    (item) => {
      return (
        <li> <ListItemToDo {...item} /> </li>
      );
    }
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default ListToDo;