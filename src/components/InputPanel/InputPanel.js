import React, { useState } from 'react';

const InputPanel = ({ addNewItem, tagList }) => {

  const [tagSelectState, setTagSelectState] = useState({
    tagSelect: [false, false, false, false]
  });

  const [inputState, setInputState] = useState("");
  const updateInput = (event) => {
    setInputState(event.target.value)
  }

  const onClick = () => {
    addNewItem(inputState, tagSelectState.tagSelect)
    setInputState("")
    setTagSelectState({tagSelect : [false, false, false, false]})
  }

  const listTags = tagList.map(
    ({ idTag, color, icon }) => {

      const tagAdd = (tagSelectState.tagSelect[idTag - 1] === true) ? "" : "outline-"
      const clickTag = () => {
        const befor = tagSelectState.tagSelect.slice(0, idTag - 1);
        const after = tagSelectState.tagSelect.slice(idTag);
        const stateChange = !tagSelectState.tagSelect[idTag - 1];
        setTagSelectState({ tagSelect: [...befor, stateChange, ...after] });
      }
      return (
        <button type="button"
          key={idTag}
          className={"btn mr-1 ml-1 btn-sm btn-" + tagAdd + color}
          onClick={clickTag}>
          <i className={icon} />
        </button>
      );
    }
  );

  return (
    <div className="d-flex flex-row" >
      <div className="d-flex flex-column flex-grow-1">

        <div className="input-group ">
          <input type="text"
            className="form-control mr-1 ml-1"
            placeholder="Add new ToDo and select tags"
            onChange={updateInput}
            value={inputState}
          />
        </div>
        <div className="d-flex flex-row m-1">
          {listTags}
        </div>
      </div>
      <div className="align-self-center m-1">
        <button type="button" className="btn btn-outline-secondary btn-lg btn-block"
          onClick={onClick}  >
          ADD
        </button>

      </div>
    </div>
  );
};

export default InputPanel;