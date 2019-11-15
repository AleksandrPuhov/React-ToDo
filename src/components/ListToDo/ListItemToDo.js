import React from 'react';
import TagPanel from './TagPanel'
import  './ListItemToDo.css';

const ListItemToDo = ({ text, toDoTags }) => {
  return (
    <div className="m-1 border d-flex flex-col">
      <div className="flex-grow-1">
        <div className ="m-1">
          <span className="text-format">{text}</span>
        </div>
        <TagPanel toDoTags={toDoTags} />
      </div>
      <div className="align-self-center m-1">
        <button className="btn btn-outline-success btn-sm">
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default ListItemToDo;