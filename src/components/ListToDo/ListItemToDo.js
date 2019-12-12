import React from 'react';
import TagPanel from './TagPanel'
import './ListItemToDo.css'


const ListItemToDo = ({ clickDelete, itemClick, text, done, toDoTags, tagList }) => {

  let classNameText = "text-format";
  if (done) {
    classNameText += " done";
  }
  const iconType = done?"far fa-check-circle fa-lg":"far fa-circle fa-lg"

  const toDoClick = ()=>{
    console.log("123")
  }

  return (
    <div className="m-1 border d-flex flex-col" >
      <div className="align-self-center m-1">
        <i className={iconType}
          onClick={itemClick}
        />
      </div>
      <div className="flex-grow-1"
         onClick={toDoClick}
      >
        <div className="ml-1 mr-1 mt-1">
          <span className={classNameText}
            // onClick={itemClick}
          >
            {text}
          </span>
        </div>
        <TagPanel toDoTags={toDoTags} tagList={tagList} />
      </div>
      <div className="align-self-center m-1">
        <button className="btn btn-outline-success btn-sm"
          onClick={clickDelete}
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default ListItemToDo;