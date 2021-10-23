import * as Icon from 'react-feather';
import React, {useState, useEffect} from 'react'
import { useContext } from 'react/cjs/react.development';
import { useResource } from 'react-request-hook';
import { stateContext } from '../contexts/context'

export default function Register() {

  const { dispatch } = useContext(stateContext);
  
  const [ formData, setFormData ] = useState({
    username: "",
    password: "", 
    passwordrepeat: ""
  })

  const [ user, register ] = useResource((username, password) => ({
    url: '/users',
    method: 'post',
    data: { username, password }
  }))

  useEffect(() => {
    if (user && user.data) {
        dispatch({ type: 'REGISTER', username: user.data.username })
    }
  }, [user])

  return (
    <form onSubmit={e => { e.preventDefault(); register(formData.username, formData.password)}}>
      <h3>Register Here</h3>
      <div class="input-group col-lg-12 mb-0">
        <span>
          <Icon.UserPlus />
        </span>
        <input type="text" name="register-username" id="register-username" placeholder="Please enter a user name."
        defaultValue={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} />
      </div>
      <div class="input-group col-lg-12 mb-0">
        <span>
          <Icon.Key />
        </span>
        <input type="password" name="register-password" id="register-password" placeholder="Please enter a password." 
        defaultValue={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
      </div>
      <div class="input-group col-lg-12 mb-0">
        <span>
          <Icon.Key />
        </span>
        <input type="password" name="register-password-repeat" id="register-password-repeat" placeholder="Please confirm above password."
        defaultValue={formData.passwordrepeat} onChange={e => setFormData({...formData, passwordrepeat: e.target.value})} />
      </div>
      <input type="submit" value="Register" />
    </form>
  )
}