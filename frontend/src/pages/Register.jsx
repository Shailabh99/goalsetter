import { useState,useEffect } from 'react'
import {FaUser} from 'react-icons/fa'
function Register() {
  const [formData,setFormData]= useState({
    name: '',
    email: '',
    password: '',
    password2: ''

  })
  const {name,email,password,password2}= formData

  const onChange=(e)=>{
    setFormData((prevState)=>({
     ...prevState,
     [e.target.name]:e.target.value
    }))
  }
  
  const onSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
    <section className="heading">
      <h1><FaUser />Register</h1>
      <p>Please create an acoount</p>
    </section>

    <section className="form">
      <div className="form-group">
        <form onSubmit={onSubmit}>
        <input type="text" 
          className='form-control' 
          id='name' 
          name='name' 
          value={name} 
          placeholder='Enter your name'
          onChange={onChange} />
        </form>
      </div>
      <div className="form-group">
        <form >
        <input type="email" 
          className='form-control' 
          id='email' 
          name='email' 
          value={email} 
          placeholder='Enter your email'
          onChange={onChange} />
        </form>
      </div>
      <div className="form-group">
        <form >
        <input type="password" 
          className='form-control' 
          id='password' 
          name='password' 
          value={password} 
          placeholder='Enter your password'
          onChange={onChange} />
        </form>
      </div>
      <div className="form-group">
        <form >
        <input type="password" 
          className='form-control' 
          id='password2' 
          name='password2' 
          value={password2} 
          placeholder='Confirm password'
          onChange={onChange} />
        </form>
      </div>
      <div className="form-group">
        <button type='submit' className='btn btn-block'>Submit</button>
      </div>
      
    </section>
    </>
  )
}

export default Register