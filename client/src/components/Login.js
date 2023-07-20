import React, { useRef } from 'react'
import "../css/login.css"
import { v4 as uuidV4 } from 'uuid'

//onIdSubmit is the prop taken from the App.js
const Login = ({onIdSubmit}) => {
    const idRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    const createNewId = ()=>{
        onIdSubmit(uuidV4());
    }
  return (
    <div className="main-container">
        <form className='formContainer' onSubmit={handleSubmit}>
          <div className="input_div">
              <label htmlFor="in-id">Enter Your Id</label><br />
              <input type="text" name="id" id="in-id" className='inp' ref={idRef} required/>
          </div>
          <button type='submit' className='btn'>Login</button>
          <button className='btn' onClick={createNewId}>Create a New Id</button>
        </form>
    </div>
  )
}

export default Login
