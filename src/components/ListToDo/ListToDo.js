import React from 'react';
import ListItemToDo from './ListItemToDo'

const ListToDo = ({ toDoData, deleteItemOnId, tagList }) => {

  const listItems = toDoData.map(
    ({ idData, ...item }) => {
      return (
        <ListItemToDo key={idData}
          clickDelete={() => deleteItemOnId(idData)} {...item} tagList ={tagList} />
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