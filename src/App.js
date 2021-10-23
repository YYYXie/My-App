import {useState, useReducer, useEffect } from 'react';
import { useResource } from 'react-request-hook';

import './App.css';
import UserBar from './user/UserBar';
import ToDoList from './to-do/ToDoList';
import CreateToDoList from './to-do/CreateToDoList';
import appReducer from './reducers';
import { stateContext } from './contexts/context';


function App () {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
  }, [todos])
  
  const {user} = state;

  return (
    <div>
      <stateContext.Provider value={{state: state, dispatch: dispatch }}>
        <UserBar />
        {/* <ToDoList /> */}
        {/* <UserBar user={user} dispatchUser={dispatch}/> */}
      
        <br/><br/><hr/><br/> 
        {user && <CreateToDoList /> }
        {user && <ToDoList />}
        {/* {user && <CreateToDoList user={user} dispatchToDo={dispatch} /> }
        {user && toDoList.length>0 && <ToDoList toDoList={toDoList} dispatchToDo={dispatch} />} */}
      </stateContext.Provider>
    </div>
  );
}

export default App;
