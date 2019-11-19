import React from 'react';

const TagPanel = ({ toDoTags,tagList }) => {

  const listTags = toDoTags.map(
    ( idTag ) => {
      const ind = tagList.findIndex((el) => el.idTag === idTag);
      const badgeName = "badge mr-1 ml-1 badge-"+ tagList[ind].color; 
      const iconName = tagList[ind].icon; 
      return (
        <div key={idTag} className={badgeName}>
          <i className={iconName} />
        </div>
      );
    }
  );

  return (
    <div className="m-1">
      {listTags}
    </div>
  );
};

export default TagPanel;