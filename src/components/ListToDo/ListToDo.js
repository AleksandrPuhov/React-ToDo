import React from 'react';
import ListItemToDo from './ListItemToDo'

const ListToDo = ({ toDoData, deleteToDoItemOnId }) => {

  const listItems = toDoData.map(
    ({ idData, ...item }) => {
      return (
        <ListItemToDo key={idData}
          clickDelete={() => deleteToDoItemOnId(idData)} {...item} />
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