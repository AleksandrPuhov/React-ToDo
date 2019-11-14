import React from 'react';
import ListItemToDo from './ListItemToDo'

const ListToDo = ({ toDoData }) => {

  const listItems = toDoData.map(
    ({idData,...item}) => {
      //console.log(item);
      return (
        <div key={idData} 
        className="list-group-item"
      // className="conteiner"
        >
          <ListItemToDo  {...item} />
        </div>
      );
    }
  );

  return (
    <div 
   // className="conteiner"
    >
      {listItems}
    </div>
  );
};

export default ListToDo;