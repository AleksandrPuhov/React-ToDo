import React from 'react';
import TagPanel from './TagPanel'

const ListItemToDo = ({ text, toDoTags }) => {

//  console.log(text);
 // console.log(toDoTags);
  
  return (
    <div>
      <div>
        <span> {text}</span>

        button
      </div>
     
      <TagPanel toDoTags= {toDoTags} /> 
     
    </div>
  );
};

export default ListItemToDo;