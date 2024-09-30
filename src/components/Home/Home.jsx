import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
   const[username,setUsername] = useState('');
   const navigate=useNavigate();

   useEffect(()=>{
    const storedUsername=localStorage.getItem('username');
    
    if(storedUsername){
      setUsername(storedUsername)
    }
    else{
      navigate('/home')
    }
   },[navigate]);

  



  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100" id='Container'>
      <div className=" p-3 rounded w-50 text-center">
        <h1>Welcome, {username}!</h1>
        <p id='text'>It's great to have you join us.</p>
      
      </div>

    </div>
    </>
  )
}

export default Home