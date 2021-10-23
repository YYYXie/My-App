import * as Icon from 'react-feather';
import React, { useState, useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import 'bootstrap/dist/css/bootstrap.min.css';
import { stateContext } from '../contexts/context'
import { useResource } from 'react-request-hook';

// export default function Login({ dispatchUser }) {
export default function Login() {

  const { dispatch } = useContext(stateContext);

  const [ username, setUserName] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loginFailed, setLoginFailed ] = useState(false)

  function handleUsername (evt) { setUserName(evt.target.value) } 
  function handlePassword (evt) { setPassword(evt.target.value) }

  const [ user, login ] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: 'get'
  }))

  useEffect(() => {
    if (user && user.data) {
      if (user.data.length > 0) {
          setLoginFailed(false)
          //console.log(state.todos)
          dispatch({ type: 'LOGIN', username: user.data[0].username})
          //console.log(state.todos)
      } else {
          setLoginFailed(true)
      }
    } 
  }, [user])

  return (
    <form onSubmit={e => { e.preventDefault(); login(username, password)}}>
      <h3>Login Here</h3>
      <div class="input-group col-lg-12 mb-0">
        <div>
          <span>
            <Icon.User />
          </span>
        </div>
        <input type="text" name="login-username" value={username} onChange={handleUsername} placeholder="user name"  id="login-username" />
      </div>
      <div class="input-group col-lg-12 mb-0">
        <div>
          <span>
            <Icon.Lock />
          </span>
        </div>
        <input id="password" type="password" name="password" value={password} onChange={handlePassword} placeholder="password" /> 
        {loginFailed && <span style={{ color: 'red'}}> Invalid username or password</span>}
      </div>
      <div>
        <input type="submit" value="Login" />
        {/* <button type="submit">Register</button> */}
      </div>
    </form>
  )
}
