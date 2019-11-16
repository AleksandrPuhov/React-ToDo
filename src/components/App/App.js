import React, { useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ListToDo from '../ListToDo/ListToDo';
import './App.css';

function App() {

  const [toDoDataState, settoDoDataState] = useState({
    toDoData: [
      {
        idData: 1, text: 'Text 111111 1111 11111 1111', done: false,
        toDoTags: [
          { idTag: 1, activ: true },
          { idTag: 2, activ: true },
          { idTag: 3, activ: true },
          { idTag: 4, activ: false }]
      },
      {
        idData: 2, text: 'Text 222 22222 22222 22222', done: false,
        toDoTags: [
          { idTag: 1, activ: false },
          { idTag: 2, activ: true },
          { idTag: 3, activ: true },
          { idTag: 4, activ: true }]
      },
      {
        idData: 3, text: 'Text 33333 33333 3333 333', done: true,
        toDoTags: [
          { idTag: 1, activ: true },
          { idTag: 2, activ: false },
          { idTag: 3, activ: true },
          { idTag: 4, activ: false }]
      }
    ]
  });

  const deleteIdItem = (id) => {
    const idIndex = toDoDataState.toDoData.findIndex((el) => el.idData === id);
    const befor = toDoDataState.toDoData.slice(0,idIndex);
    const after =toDoDataState.toDoData.slice(idIndex+1);
    settoDoDataState({toDoData:[...befor,...after]});
  }

  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <ListToDo toDoData={toDoDataState.toDoData}
        deleteToDoItemOnId={deleteIdItem} />
    </div>
  );
};

export default App;
