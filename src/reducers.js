function userReducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
      // console.log('Login:' + state.user)
    case 'REGISTER':
      // console.log('Register')
      return action.userName
    case 'LOGOUT':
      // console.log('Logout')
      return ''
    default:
      return state;
  }
}

function toDoReducer (state, action) {
  switch (action.type) {
    case 'ADD':
      console.log('Add to do:' + state.toDoList)
      const newToDo = { 
        id: state.length,
        title: action.title,
        description: action.description, 
        dateCreated: action.dateCreated,
        complete: action.complete,
        dateComplete: action.dateComplete,
      }
      return [ newToDo, ...state ]
    case 'DELETE':
      return state.filter((x) => x.id !== action.id);
    default:
      return state;
  }
}

export default function appReducer (state, action) {
  return {
    user: userReducer(state.user, action),
    toDoList: toDoReducer(state.toDoList, action)
  }
}
