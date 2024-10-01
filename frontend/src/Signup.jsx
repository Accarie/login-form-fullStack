import React, { useState } from 'react'
import axios from 'axios';


function Signup() {
  const [values, setValues] = useState({
    name:'',
    email:'',
    password:''
  })
  const handleChange = (event) =>{
    setValues({...values, [event.target.name]:[event.target.value]})
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8081/signup',values)
    .then(res => console.log("Registered Successfully!!"))
    .catch(err => console.log(err));
  }
  return (
    <div className=''>
     <div className='semi-container'>
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit} >
        <div className='mb-3'>
          <label htmlFor='name'><strong>Name</strong></label>
          <input type='text' placeholder='Enter Name' name='name' onChange={handleChange}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='email'><strong>Emai</strong></label>
          <input type='email' placeholder='Enter Email' name='email' onChange={handleChange}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password'><strong>Password</strong></label>
          <input type='password' placeholder='Enter Password' name='password' onChange={handleChange}/>
        </div>
        <p className='para'>You agree to terms and policies?</p>
        <button type='submit'className='btn'>Sign up</button>
        <p className='parag'>you already have an account?<a to='/' className='login'>Login</a></p>
        
      </form>
     </div>
    </div>
  )
}

export default Signup