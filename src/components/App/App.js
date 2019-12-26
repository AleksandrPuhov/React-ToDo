import React, { useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ListToDo from '../ListToDo/ListToDo';
import InputPanel from '../InputPanel/InputPanel';
import ModalEditTag from '../ModalEditTag/ModalEditTag';

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
        idData: 3, text: 'Text 33333 33333 3333 333', done: false,
        toDoTags: [1, 3]
      }
    ]
  });

  const thisState = toDoDataState.toDoData

  const deleteItemOnId = (id) => {
    const idIndex = thisState.findIndex((el) => el.idData === id);
    const befor = thisState.slice(0, idIndex);
    const after = thisState.slice(idIndex + 1);
    settoDoDataState({ toDoData: [...befor, ...after] });
  }

  const itemClickOnId = (id) => {
    const idIndex = thisState.findIndex((el) => el.idData === id);
    const newItem = { ...thisState[idIndex], done: !thisState[idIndex].done }
    const befor = thisState.slice(0, idIndex);
    const after = thisState.slice(idIndex + 1);
    settoDoDataState({ toDoData: [...befor, newItem, ...after] });
  }

  const addNewItem = (text, tagSelect) => {
    const maxIndex = Math.max(...thisState.map(ob => ob.idData))

    let addTags = []
    tagSelect.forEach((el, ind) => { if (el) addTags.push(ind + 1) })

    settoDoDataState({
      toDoData: [...thisState,
      {
        idData: maxIndex + 1, text: text, done: false,
        toDoTags: addTags
      }
      ]
    });
  }

  return (
    <div className="App">
      {/* <ModalEditTag /> */}
      <AppHeader />
      <SearchPanel />
      <ListToDo toDoData={thisState}
        deleteItemOnId={deleteItemOnId}
        itemClickOnId={itemClickOnId}
        tagList={tagList} />
      <InputPanel
        addNewItem={addNewItem}
        tagList={tagList} />

    </div>
  );
};

export default App;
