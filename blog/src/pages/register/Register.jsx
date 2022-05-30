import React, { useState,useEffect } from 'react'
import "./register.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import axios from 'axios';
import axios from "../../Axios"




export default function Login() {

  const [users,setUsers] = useState([]);
    useEffect(()=>
    {
      axios.get("/api/auth/getusers", {
     
      })
        .then((response) => {
         
          console.log(response.data);
         // setPosts(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      },[])


  const [username,setUsername] = useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const [errorMessage,  setErrorMessage] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const res =  axios.post("/api/auth/register",{

      username,
      email,
      password,
    })
  
    .then((res)=>{

     // console.log(res.data);
     res.data && window.location.replace("/login");
       
    })
  
    .catch((err)=>{
          setErrorMessage("Not Registered SuccessFully")
      console.log(err);
    });
  };
 /* const [users,setUsers] = useState([]);
    useEffect(()=>
    {


      axios.get("/api/auth/getusers", {
       
      })
        .then((response) => {
         
          console.log(response.data);
         // setPosts(response.data);
        })
        .catch((err) => {
          console.log(err);
        });


      },[])

      */
  return (
    <div className='register'>
        
        <span className="registertitle">
            Register
        </span>
        <form className='registerForm' onSubmit={handleSubmit}>

<label>Username</label>
<input 
type="text"
 className="registerInput" 
 placeholder='Enter Your Username'
 onChange={e=>setUsername(e.target.value)}

 />


<label>Email</label>
<input type="text" 
className="registerInput" 
 placeholder="Enter Your Email.."
 onChange={e=>setEmail(e.target.value)}

 

 />
<label>Password</label>
 <input type="password" className="registerInput"
  placeholder='Enter Your Password'
  onChange={e=>setPassword(e.target.value)}

  />

 <button className='registerbutton' type="submit">Register</button>       
      
        </form>
        
        <button className='RegisterLoginButton'>

        <Link className='link' to="/login">Login</Link>
        </button>

        {errorMessage && (
        <p className="error"> {errorMessage} </p>
        )}
        </div>
  )
  
}
