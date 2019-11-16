import React from 'react';

const TagPanel = ({ toDoTags }) => {

  const listTags = toDoTags.map(
    ({ idTag, activ }) => {

      let badgeClassName = "badge mr-1 ml-1"
      let iconClassName = "fa"

      if (activ && (idTag === 1)) {
        badgeClassName += " badge-danger"
        iconClassName += " fa-exclamation-circle"
      }

      if (activ && (idTag === 2)) {
        badgeClassName += " badge-primary"
        iconClassName += " fa-briefcase"
      }
      if (activ && (idTag === 3)) {
        badgeClassName += " badge-success"
        iconClassName += " fa-home"
      }
      if (activ && (idTag === 4)) {
        badgeClassName += " badge-info"
        iconClassName += " fa-shopping-cart"
      }
      if (activ) {
        return (
          <div key={idTag} className={badgeClassName}>
            <i className={iconClassName} />
          </div>
        );
      }
      else return (null);
    }
  );

  return (
    <div className="m-1">
      {listTags}
    </div>
  );
};

export default TagPanel;