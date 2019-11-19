import React from 'react';

const InputPanel = ({ toDoData, addNewItem, tagList }) => {

  const listTags = tagList.map(
    ({ idTag, color, icon }) => {
      return (
        <button type="button"
          key={idTag}
          className={"btn mr-1 ml-1 btn-" + color}>
          <i className={icon} />
        </button>
      );
    }
  );

  return (
    <div className="d-flex flex-row" >
      <div className="d-flex flex-column flex-grow-1">

        <div className="input-group m-1 ">
          <input type="text"
            className="form-control mr-1"
            placeholder="Add new ToDo and select tags" />
        </div>
        <div className="d-flex flex-row m-1">
          {listTags}
        </div>
      </div>
      <div className="align-self-center m-1">
        <button type="button" className="btn btn-outline-secondary">
          ADD
        </button>

      </div>
    </div>
  );
};

export default InputPanel;