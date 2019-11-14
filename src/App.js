import React, { useState } from 'react';
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
    {
      idData: 1, text: 'Text 1', toDoTags: [
        { idTag: 1, activ: true, text: 'Text 1', priority: 1, color: "bg-primary" },
        { idTag: 2, activ: true, text: 'Text 2', priority: 2, color: "bg-success" },
        { idTag: 3, activ: false, text: 'Text 3', priority: 1, color: "bg-danger" }]
    },
    {
      idData: 2, text: 'Text 2', toDoTags: [
        { idTag: 1, activ: false, text: 'Text 1', priority: 1, color: "blue" },
        { idTag: 2, activ: true, text: 'Text 2', priority: 2, color: "bg-success" },
        { idTag: 3, activ: true, text: 'Text 3', priority: 1, color: "bg-danger" }]
    },
    {
      idData: 3, text: 'Text 3', toDoTags: [
        { idTag: 1, activ: true, text: 'Text 1', priority: 1, color: "bg-primary" },
        { idTag: 2, activ: false, text: 'Text 2', priority: 2, color: "bg-success" },
        { idTag: 3, activ: false, text: 'Text 3', priority: 1, color: "bg-danger" }]
    }
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
