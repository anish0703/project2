import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from '../RegisterValidation'
import './Register.css'
import axios from 'axios'


function Register() {
    const [values,setValues] = useState({
        firstname:"",
        lastname:"",
        email:'',
        password:''

    })
    const navigate = useNavigate();
    const [errors,setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
          axios.post('http://localhost:8081/Register', values)
          .then(res => {
              navigate('/');
          })
          .catch(err => console.log(err));
        }
    } 
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100' id='con1'> 
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form action="" onSubmit={handleSubmit}>
               <div className='mb-3'>
                  <label htmlFor="name"><strong>FirstName</strong></label>
                  <input type='text' placeholder='Enter First Name' name='firstname'
                   onChange={handleInput} className='form-control rounded-0' />
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                  <label htmlFor="name"><strong>LastName</strong></label>
                  <input type='text' placeholder='Enter Last Name' name='lastname'
                 onChange={handleInput} className='form-control rounded-0' />
                  {errors.name && <span className='text-danger'> {errors.name}</span>}
                </div>
                <div className='mb-3'>
                  <label htmlFor="email"><strong>Email</strong></label>
                  <input type='email' placeholder='Enter Email' name='email'
                  onChange={handleInput} className='form-control rounded-0' />
                   {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-3'>
                  <label htmlFor="password"><strong>Password</strong></label>
                  <input type='password' placeholder='Enter Password' name='password'
                 onChange={handleInput} className='form-control rounded-0' />
                  {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-secondary w-100 rounded-0'><strong>Register</strong></button>
                <p>Your are agree to our terms and conditions</p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Register