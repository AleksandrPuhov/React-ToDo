import React from 'react';

const ModalEditTag = () => {

  // const listTags = tagList.map(
  //   ({ idTag, color, icon }) => {

  //     const tagAdd = (tagSelectState.tagSelect[idTag - 1] === true) ? "" : "outline-"
  //     const clickTag = () => {
  //       const befor = tagSelectState.tagSelect.slice(0, idTag - 1);
  //       const after = tagSelectState.tagSelect.slice(idTag);
  //       const stateChange = !tagSelectState.tagSelect[idTag - 1];
  //       setTagSelectState({ tagSelect: [...befor, stateChange, ...after] });
  //     }
  //     return (
  //       <button type="button"
  //         key={idTag}
  //         className={"btn mr-1 ml-1 btn-sm btn-" + tagAdd + color}
  //         onClick={clickTag}>
  //         <i className={icon} />
  //       </button>
  //     );
  //   }
  // );

  return (

    <div className="modal fade show"
      tabIndex="-1" role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content d-flex">
          <div className="d-flex flex-row justify-content-end m-1">
            <button type="button" className="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="d-flex flex-row" >
            <div className="d-flex flex-column flex-grow-1">

              <div className="input-group ">
                <input type="text"
                  className="form-control mr-1 ml-1"
                  placeholder="Add new ToDo and select tags"
                // onChange={updateInput}
                // value={inputState}
                />
              </div>
              <div className="d-flex flex-row m-1">
                {/* {listTags} */}
              </div>
            </div>
          </div>


          <div className="d-flex flex-row justify-content-end">
            <div className="d-flex flex-column m-1">
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            <div className="d-flex flex-column m-1">
              <button type="button" className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditTag;