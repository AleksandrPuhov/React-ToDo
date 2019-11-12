import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const AppHeader = () => {
  return <h1>My ToDo List</h1>
};
const SearchPanel = () => {
  return <input placeholder="search" />
};
const ListToDo = () => {
  const listToDo = ["1", "2"];
  return (
    <ul>
      <li> {listToDo[0]} </li>
      <li> {listToDo[1]} </li>
    </ul>
  );
};

function App() {
  const [personState, setpersonState] = useState({
    persons: [
      { name: "AAA", age: "11" },
      { name: "BBB", age: "22" },
      { name: "BBB", age: "33" }
    ]
  });

  const switchNameHandler = () => {
    setpersonState({
      persons: [
        { name: "AAA", age: "11" },
        { name: "BgdfgdfgBB", age: "2dfgdfg2" },
        { name: "BBB", age: "33" }
      ]
    });
  };
  return (
    <div className="App">
      <button onClick={switchNameHandler} >Swich Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>BBBB dsafsdf</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />

      <AppHeader />
      <SearchPanel />
      <ListToDo />

    </div>
  );
};

export default App;
