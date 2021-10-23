import React, {useState, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { stateContext } from '../contexts/context'
import { useResource } from 'react-request-hook'

export default function ToDo ({title,description,dateCreated,complete,dateComplete,id}) {

  const [ completeTask, setCompleteTask] = useState('');
  const [ cID, setCID ] = useState(parseInt(id)+1);
  const [ dateCompleteTask, setDateCompleteTask] = useState('');
  const { dispatch } = useContext(stateContext);
  
  const [ todo , deleteToDo ] = useResource(({ cID }) => ({
    url: `/todos/${encodeURI(cID)}`,
    method: 'delete',
  }))

  function checkComplete(){
    if (!completeTask){
      var todayDate = new Date().toISOString().slice(0, 10);
      setCompleteTask('checked');
      setDateCompleteTask(todayDate);
    }else{
      setCompleteTask('');
      setDateCompleteTask('');
    }
  }

  function handleToDo(){
    console.log("DELETE ID:" + cID)
    deleteToDo({cID})
    dispatch({ type: 'DELETE_TODO', id: id})
  }

  return (
    <form onSubmit={e => {e.preventDefault(); handleToDo();}}> 
      <div class="input-group col-lg-12 mb-0">
        {/* <input type="text" value={id} disabled="disabled"/> */}
        <input type="text" value={title} disabled="disabled"/>
        <input type="text" value={description} disabled="disabled" />
        <input type="date" value={dateCreated} disabled="disabled"/>
        <input type="checkbox" onChange={checkComplete} checked={completeTask}/>
        <input type="date" value={dateCompleteTask}/>
        <input id="add" type="submit" value="Delete" /> 
      </div>
    </form>
 )
}