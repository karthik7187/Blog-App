import React, { useContext } from 'react'
import "./login.css"
import { useState,useEffect,useRef } from 'react';
import axios from "../../Axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Context } from '../../context/Context';




export default function Login() {


  const  userRef = useRef();
  const passwordRef = useRef();
 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {dispatch, isFetching}= useContext(Context);



  
 
  const handleSubmit= (e) =>{
    e.preventDefault();
   // setErrorMessage('Invalid Credentials');

     dispatch({type:"LOGIN_START"});
     
       const res = axios.post("api/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value,
    
     })
     .then((res)=>
     {
 //dispatch({type: "LOGIN_SUCCESS", payload : res.data});
       
   console.log(res.status);

   if(res.status===200)
   {
     console.log(res.data)
     setSuccessMessage("Authenticatication Successful")
     alert("login succed")
     window.location.replace("/write");
   }
   else
   {
     console.log("wrong")
   }
   
     //console.log(user);
     })

     .catch((err)=>{

      setErrorMessage('Invalid Credentials');
      alert("Invalid credentials");
      console.log(err);
    });

  };
 
  
  // const [users,setUsers] = useState([]);
  //   useEffect(()=>
  //   {
  //     axios.get("/api/auth/getusers", {
     
  //     })
  //       .then((response) => {
         
  //         console.log(response.data);
  //        // setPosts(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     },[])


  return (
    <div className='Login'>
        
        <span className="logintitle">
            Login
        </span>
        <form className='LoginForm' onSubmit={handleSubmit}>
<label>Username</label>
<input type="text"
 className="loginInput"  
 placeholder="Enter Your Username.."
 ref={userRef}
 />
<label>Password</label>
 <input type="password" 
 className="loginInput"
  placeholder='Enter Your Password'
  ref={passwordRef}
  />
 <button className='loginbutton'>Login</button>       
        
        </form>
        
        <button className='loginRegisterButton'>

        <Link className='link' to="/register">Register</Link>
        </button>


        {errorMessage && (
        <p className="error"> {errorMessage} </p>

        // {successMessage && (
        //   <p className="success"> {successMessage} </p>
)}
        </div>
  )
}
