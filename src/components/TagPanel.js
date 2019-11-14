import React from 'react';

const TagPanel = ({ toDoTags }) => {

  const listTags = toDoTags.map(
  
    ({idTag, activ, text, priority, color}) => {
      
      return (
        <div key={idTag} className = "d-inline">
          {text}
          
        </div>
      );

    }
  );
  
  return (
    <div>
       {listTags} 
    </div>
  );
};

export default TagPanel;