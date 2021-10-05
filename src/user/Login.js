import * as Icon from 'react-feather';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login({ dispatchUser }) {

  const [userName, setUserName] = useState('')

  function handleUsername (evt) { 
    setUserName(evt.target.value) }

  return (
    <form onSubmit={e => {e.preventDefault(); dispatchUser({ type: 'LOGIN', userName})}}>
      <h3>Login Here</h3>
      <div class="input-group col-lg-12 mb-0">
        <div>
          <span>
            <Icon.User />
          </span>
        </div>
        <input type="text" name="login-username" value={userName} onChange={handleUsername} placeholder="user name"  id="login-username" />
      </div>
      <div class="input-group col-lg-12 mb-0">
        <div>
          <span>
            <Icon.Lock />
          </span>
        </div>
        <input id="password" type="password" name="password" placeholder="password" /> 
      </div>
      <div>
        <input type="submit" value="Login" />
        {/* <button type="submit">Register</button> */}
      </div>
    </form>
  )
}
