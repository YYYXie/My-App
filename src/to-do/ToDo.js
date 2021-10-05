import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ToDo ({dispatchToDo,title,description,dateCreated,complete,dateComplete,id}) {

  const [completeTask, setCompleteTask] = useState('');
  const [dateCompleteTask, setDateCompleteTask] = useState('');

  function checkComplete(){
    if (!completeTask){
      // console.log('Checked' + completeTask);
      var todayDate = new Date().toISOString().slice(0, 10);
      setCompleteTask('checked');
      setDateCompleteTask(todayDate);
    }else{
      // console.log('Unchecked' + completeTask);
      setCompleteTask('');
      setDateCompleteTask('');
    }
  }

  useEffect(() => {
    if (complete) {
      setCompleteTask('checked');
      setDateCompleteTask(dateComplete);
      }
  }, [complete])

  return (
    <form onSubmit={e => {e.preventDefault(); dispatchToDo({ type: 'DELETE', id: id})}}> 
      <div class="input-group col-lg-12 mb-0">
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