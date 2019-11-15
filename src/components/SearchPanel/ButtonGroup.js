import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="btn-group" role="group">

      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Tags
      </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Important</a>
          <a className="dropdown-item" href="#">Work</a>
          <a className="dropdown-item" href="#">Home</a>
          <a className="dropdown-item" href="#">Buy</a>
        </div>
      </div>

      <button type="button"
        className="btn btn-outline-secondary">
        Active
    </button>
      <button type="button"
        className="btn btn-outline-secondary">
        Done
    </button>

    </div>
  );
};

export default ButtonGroup;