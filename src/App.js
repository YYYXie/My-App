import {useState, useReducer, useEffect} from 'react';

import './App.css';
import UserBar from './user/UserBar';
import ToDoList from './to-do/ToDoList';
import CreateToDoList from './to-do/CreateToDoList';
import appReducer from './reducers';

//const initialState = {''};

const App = () => {
 
  const [state, dispatch] = useReducer(appReducer, { user: '', toDoList: '' })
  const {user, toDoList} = state;

  return (
    <div className="App">
      <UserBar user={user} dispatchUser={dispatch}/>
      <br/><br/><hr/><br/> 
      {user && <CreateToDoList user={user} dispatchToDo={dispatch} /> }
      {user && toDoList.length>0 && <ToDoList toDoList={toDoList} dispatchToDo={dispatch} />}
    </div>
  );
}

export default App;
