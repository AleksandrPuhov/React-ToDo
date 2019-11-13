import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import ListToDo from './components/ListToDo'


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

  const toDoData = [
    { text: '1', important: false },
    { text: '2', important: true },
    { text: '3', important: false }
  ];

  return (
    <div className="App">
      <button onClick={switchNameHandler} >Swich Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>BBBB dsafsdf</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />

      <AppHeader />
      <SearchPanel />
      <ListToDo toDoData={toDoData} />

    </div>
  );
};

export default App;
