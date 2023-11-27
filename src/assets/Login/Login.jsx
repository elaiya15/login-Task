/* eslint-disable no-unused-vars */
import React from 'react'
import Lottie from "lottie-react";
import "./log.css"
import user from "./user.json";
import {useState} from "react";
import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import cuteImage from '/src/assets/Signup/cute.jpeg';

import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import{useNavigate} from "react-router-dom"; 
import Loding from '/src/assets/spinerLoder/Loding.jsx'

const Login = () => {
  const navigate = useNavigate();

    const formvalue={
        email:"",
        password:"",
        
      };
       
      const [FormData, SetFormData] = useState(formvalue)
    const [open, SetOpen] = useState(true)
    
    const [load, SetLoad] = useState(!true)
    
    const toggle=()=>(
      SetOpen(!open)
    )



  
  const handleSubmit= async(e)=>{
      e.preventDefault()
      SetLoad(true)
    
      const response = await axios.post("https://63d3cbccc1ba499e54c8fd76.mockapi.io/user/user",{
        ...FormData,
      });
      
      if(response.data){
       
        localStorage.setItem("userData","true");
        console.log(response.data);
          setTimeout(() => {
          SetLoad(!true) 
          navigate("/home");
        }, 2000);
    }
    }

  return (
    <>
    {(load===true)?<Loding/> :
    <div className="loginhead">
     <Lottie className="logicon" animationData={user} 
          loop={true} /> 

      <div className="signinpage" >  
        <h1 className="log">Sign-in</h1>
        <br/>
        <h1 className="titel"> <img className="icon" src={cuteImage} alt="Cute" />app log </h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="contain">
     <div className="text"> <span className="Confirmicon"><MailOutlineIcon/> </span>
     <TextField   sx={{ ml:3,mt:3, pb:0.5}}id="standard-basic" label="Email" type="email" variant="standard" required  value={FormData.email} onChange={(e)=>SetFormData({...FormData, email: e.target.value})} />
      </div>
      <div className="text"><span className="Confirmicon"> < HttpsIcon/> </span>
     <TextField sx={{ ml:3,mt:3, }}id="standard" label="Password" type={(open===true)?"password":"text"} variant="standard" required value={FormData.password}   onChange={(e)=>SetFormData({...FormData, password: e.target.value})} />
     <span className="eye"> { (open === true)?<VisibilityOffIcon onClick={toggle}/> :<VisibilityIcon onClick={toggle}/> }   </span>
      </div><br/>
   <div className="bt" >
  <button className="signupbtn" type="submit"  >Sign-in</button> 
  <div className="sigin"> Create New Account <a className="ac"href="/signup">Sign-up </a> </div>
 
 
   </div>
    </div> 
    </form>
      <div> 
       </div>
       </div>
    

    </div>}
    </>
  )
}

export default Login
