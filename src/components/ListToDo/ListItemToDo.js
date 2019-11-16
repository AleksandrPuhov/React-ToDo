import React, { useState } from 'react';
import TagPanel from './TagPanel'
import './ListItemToDo.css'


const ListItemToDo = ({ clickDelete, text, done, toDoTags }) => {

  const [textState, setTextState] = useState({ done });

  const itemClick = () => {
    setTextState({ done: !textState.done })
  }

  let classNameText = "text-format";
  if (textState.done) {
    classNameText += " done";
  }

  return (
    <div
      className="m-1 border d-flex flex-col"
    >

      <div className="flex-grow-1">
        <div className="m-1">
          <span className={classNameText}
            onClick={itemClick}>
            {text}
          </span>
        </div>
        <TagPanel toDoTags={toDoTags} />
      </div>
      <div className="align-self-center m-1">
        <button className="btn btn-outline-success btn-sm"
          onClick={clickDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  );
};

export default ListItemToDo;