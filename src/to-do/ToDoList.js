import React from 'react'
import ToDo from './ToDo'

export default function ToDoList ({dispatchToDo, toDoList = []}) {

  function onDelete(){

  }

  return (
    <div>
      {toDoList.map((t) => <ToDo {...t} dispatchToDo={dispatchToDo} title={t.title} description={t.description} dateCreated={t.dateCreated}
      complete={t.complete} dateComplete={t.dateComplete} id={t.id} key={'ToDo-' + t.id}/>)}
    </div>
  )
}