import React from 'react'
import * as Icon from 'react-feather';
import { useState } from 'react';

export default function Register({dispatchUser}) {

  const [ formData, setFormData ] = useState({
    userName: "",
    password: "", 
    passwordRepeat: ""
  })

  return (
    <form onSubmit={e => {e.preventDefault(); dispatchUser({type:"REGISTER", userName:formData.userName});}}>
      <h3>Register Here</h3>
      <div class="input-group col-lg-12 mb-0">
        <span>
          <Icon.UserPlus />
        </span>
        <input type="text" name="register-username" id="register-username" placeholder="Please enter a user name."
        value={formData.userName} onChange={e => setFormData({...formData, userName: e.target.value})} />
      </div>
      <div class="input-group col-lg-12 mb-0">
        <span>
          <Icon.Key />
        </span>
        <input type="password" name="register-password" id="register-password" placeholder="Please enter a password." 
        value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
      </div>
      <div class="input-group col-lg-12 mb-0">
        <span>
          <Icon.Key />
        </span>
        <input type="password" name="register-password-repeat" id="register-password-repeat" placeholder="Please confirm above password."
        value={formData.passwordRepeat} onChange={e => setFormData({...formData, passwordRepeat: e.target.value})} />
      </div>
      <input type="submit" value="Register" />
    </form>
  )
}