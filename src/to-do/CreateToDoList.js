import React, {useState, useEffect, useContext} from 'react'
import { stateContext } from '../contexts/context'
import { useResource } from 'react-request-hook'
// import { useNavigation } from 'react-navi'

export default function CreateToDoList () {

  const [ title, setTitle] = useState('');
  const [ description, setDescription] = useState('');
  const [ dateCreated, setDateCreated] = useState('');
  const [ complete, setComplete] = useState(false);
  const [ dateComplete, setDateComplete] = useState('');
  const { dispatch } = useContext(stateContext);

  const [todo , createToDo ] = useResource(({ title, description, dateCreated, complete, dateComplete }) => ({
    url: '/todos',
    method: 'post',
    data: { title, description, dateCreated, complete, dateComplete }
  }))

  function checkComplete(){
    if (!complete){
      var todayDate = new Date().toISOString().slice(0, 10);
      setComplete(current => !current);
      setDateComplete(todayDate);
    }else{
      setComplete(current => !current);
      setDateComplete('');
    }
  }

  useEffect( () => {
  }, [complete]);

  function handleToDo(){
    createToDo({title,description,dateCreated,complete,dateComplete})
    dispatch({ type: 'CREATE_TODO', title,description,dateCreated,complete,dateComplete })
  }

  return (
    // <form onSubmit={e => {e.preventDefault(); dispatch({type: "ADD", title, description, dateCreated,complete,dateComplete});} }> 
    <form onSubmit={e => {e.preventDefault(); handleToDo();} }> 
      <div class="input-group col-lg-12 mb-0">
        <input id="title" name="title" placeholder="title" 
          value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input id="description" description="title" placeholder="description" 
          value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <input id="dateCreated" type="date" description="dateCreated" placeholder="dateCreated" 
          value={dateCreated} onChange={(e)=>setDateCreated(e.target.value)}/>
        <input id="complete" type="checkbox" description="complete" 
          value={complete} onChange={checkComplete}/>
        <input id="dateComplete" type="date" description="dateComplete" placeholder="dateComplete" 
          value={dateComplete}/>
        <input id="add" type="submit" value="Add" /> 
      </div>
    </form>
  )
}
