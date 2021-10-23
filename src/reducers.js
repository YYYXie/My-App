function userReducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
      // console.log('Login:' + state.username)
      // console.log('Login:' + action.username)
    case 'REGISTER':
      // console.log('Register')
      return action.username
    case 'LOGOUT':
      // console.log('Logout')
      return ''
    default:
      return state;
  }
}

function toDoReducer (state, action) {
  // console.log("In reducer:" + action.type);
  switch (action.type) {
    case 'CREATE_TODO':
      //let idNum = parseInt(state.length)+1
      const newToDo = { 
        //id: idNum,
        title: action.title,
        description: action.description, 
        dateCreated: action.dateCreated,
        complete: action.complete,
        dateComplete: action.dateComplete,
      }
      //console.log("create to do id:" +  idNum)
      return [ newToDo, ...state ];
    case 'DELETE_TODO':
      console.log("delete id:" + action.id)
      return state.filter((t,i) => i !== action.id);
    case 'FETCH_TODOS':
      return action.todos;
    default:
      return state;
  }
}

export default function appReducer (state, action) {
  return {
    user: userReducer(state.user, action),
    todos: toDoReducer(state.todos, action)
  }
}
