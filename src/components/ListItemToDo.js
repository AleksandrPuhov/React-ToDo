import React from 'react';

const ListItemToDo = ({ text, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };
  return <div style={style}>{text}</div>;
};

export default ListItemToDo;