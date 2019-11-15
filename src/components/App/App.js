import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ListToDo from '../ListToDo/ListToDo';
import './App.css';

function App() {

  const toDoData = [
    {
      idData: 1, text: 'Text 1111111111111111111', toDoTags: [
        { idTag: 1, activ: true },
        { idTag: 2, activ: true },
        { idTag: 3, activ: true },
        { idTag: 4, activ: false }]
    },
    {
      idData: 2, text: 'Text 222222222222222222', toDoTags: [
        { idTag: 1, activ: false },
        { idTag: 2, activ: true },
        { idTag: 3, activ: true },
        { idTag: 4, activ: true }]
    },
    {
      idData: 3, text: 'Text 33333333333333333', toDoTags: [
        { idTag: 1, activ: true },
        { idTag: 2, activ: false },
        { idTag: 3, activ: true },
        { idTag: 4, activ: false }]
    }
  ];

  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <ListToDo toDoData={toDoData} />
    </div>
  );
};

export default App;
