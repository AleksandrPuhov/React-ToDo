import React from 'react';

const person = (props)=> {
  return (
    <div>
      <p>I am {props.name} и {props.age}!!!! рандом { Math.floor(Math.random()*30)}</p>
  <p>{props.children}</p>
    </div>
  );
}

export default person;