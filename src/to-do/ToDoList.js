import { React, useContext, useEffect } from 'react'
import { stateContext } from '../contexts/context'
import { useResource } from 'react-request-hook'
import ToDo from './ToDo'

export default function ToDoList () {

  const { state, dispatch } = useContext(stateContext)
  const { todos } = state;

  return (
    <div>
      {todos.map((t, i) => <ToDo {...t} title={t.title} description={t.description} dateCreated={t.dateCreated}
      complete={t.complete} dateComplete={t.dateComplete} id={i} key={'ToDo-' + i}/>)}
    </div>
  )
}