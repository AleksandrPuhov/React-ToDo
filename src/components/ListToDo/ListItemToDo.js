import React from 'react';
import TagPanel from './TagPanel'
import './ListItemToDo.css'


const ListItemToDo = ({ clickDelete, itemClick, text, done, toDoTags, tagList }) => {

  let classNameText = "text-format";
  if (done) {
    classNameText += " done";
  }

  return (
    <div className="m-1 border d-flex flex-col" >
      <div className="flex-grow-1">
        <div className="ml-1 mr-1 mt-1">
          <span className={classNameText}
            onClick={itemClick}>
            {text}
          </span>
        </div>
        <TagPanel toDoTags={toDoTags} tagList={tagList} />
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