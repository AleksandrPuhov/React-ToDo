import React, { useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ListToDo from '../ListToDo/ListToDo';
import InputPanel from '../InputPanel/InputPanel';


import './App.css';

function App() {

  const tagList = [
    { idTag: 1, color: 'danger', icon: 'fa fa-exclamation-circle' },
    { idTag: 2, color: 'primary', icon: 'fa fa-briefcase' },
    { idTag: 3, color: 'success', icon: 'fa fa-home' },
    { idTag: 4, color: 'info', icon: 'fa fa-shopping-cart' },
  ];


  const [toDoDataState, settoDoDataState] = useState({
    toDoData: [
      {
        idData: 1, text: 'Text 111111 1111 11111 1111', done: false,
        toDoTags: [1, 2, 3]
      },
      {
        idData: 2, text: 'Text 222 22222 22222 22222', done: false,
        toDoTags: [2, 3, 4]
      },
      {
        idData: 3, text: 'Text 33333 33333 3333 333', done: true,
        toDoTags: [1, 3]
      }
    ]
  });

  const deleteItemOnId = (id) => {
    const idIndex = toDoDataState.toDoData.findIndex((el) => el.idData === id);
    const befor = toDoDataState.toDoData.slice(0, idIndex);
    const after = toDoDataState.toDoData.slice(idIndex + 1);
    settoDoDataState({ toDoData: [...befor, ...after] });
  }

  const addNewItem = () => {
    // const idIndex = toDoDataState.toDoData.findIndex((el) => el.idData === id);
    // const befor = toDoDataState.toDoData.slice(0, idIndex);
    // const after = toDoDataState.toDoData.slice(idIndex + 1);
    // settoDoDataState({ toDoData: [...befor, ...after] });
  }

  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <ListToDo toDoData={toDoDataState.toDoData}
        deleteItemOnId={deleteItemOnId}
        tagList={tagList} />
      <InputPanel toDoData={toDoDataState.toDoData}
        addNewItem={addNewItem}
        tagList={tagList}/>

    </div>
  );
};

export default App;
