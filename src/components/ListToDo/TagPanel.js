import React from 'react';

const TagPanel = ({ toDoTags }) => {

  // const listTags = toDoTags.map(
  //   ({ idTag, activ }) => {

  //     return (
  //       <div key={idTag} >
 
  //       </div>
  //     );
  //   }
  // );

  return (
    <div className="m-1">
       <div className={"badge mr-1 ml-1 badge-danger"}>
        <i className="fa fa-exclamation-circle" />
      </div>
      <div className="badge mr-1 ml-1 badge-primary">
        <i className="fa fa-briefcase" />
      </div>
      <div className="badge mr-1 ml-1 badge-success">
        <i className="fa fa-home" />
      </div>
      <div className="badge mr-1 ml-1 badge-info">
        <i className="fa fa-shopping-cart" />
      </div>
    </div>
  );
};

export default TagPanel;