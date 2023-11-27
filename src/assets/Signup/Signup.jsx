/* eslint-disable no-unused-vars */

import Lottie from "lottie-react";
import happy from "./happy icon.json";
import data from "./happy icon.json";
import "./Signup.css";
import axios from 'axios'
import{useNavigate} from "react-router-dom"; 
import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import cuteImage from '/src/assets/Signup/cute.jpeg';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {

  const navigate = useNavigate();

  const formvalue={
    email:"",
    password:"",
    // confirmpassword:"",
    
  };
   
  const [FormData, SetFormData] = useState(formvalue)

const [open, SetOpen] = useState(true)
const [open1, SetOpen1] = useState(true)
const [load, SetLoad] = useState(!true)

const toggle=()=>(
  SetOpen(!open)
)
const Confirm=()=>(
  SetOpen1(!open1)
)
const handleSubmit= async(e)=>{
  e.preventDefault()

  if (FormData.password===FormData.confirmpassword) {
    const response = await axios.post("https://63d3cbccc1ba499e54c8fd76.mockapi.io/user/user",{
      email:FormData.email,
         password:FormData.password

        })
        if (response) {
          console.log(response);
          navigate("/");
        }
}

}

  return (
    <div>
      <div className="head">
      

        <div className="animation"> 
        <Lottie animationData={data} 
        loop={true} />
        </div>

        <div className="singup">
        <h1 className="createh2">Sign-up</h1>
        <br/>
        <h1 className="titel"> <img className="icon" src={cuteImage} alt="Cute" /> app log </h1>
        
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="contain">
     <div className="text"> <span className="Confirmicon"><MailOutlineIcon/> </span>
     <TextField   sx={{ ml:3,mt:3, pb:0.5}}id="standard-basic" label="Email" type="email" variant="standard" required  value={FormData.email} onChange={(e)=>SetFormData({...FormData, email: e.target.value})} />
      </div>
      <div className="text"><span className="Confirmicon"> < HttpsIcon/> </span>
     <TextField sx={{ ml:3,mt:3, }}id="standard" label="Password" type={(open===true)?"password":"text"} variant="standard" required value={FormData.password}   onChange={(e)=>SetFormData({...FormData, password: e.target.value})} />
     <span className="eye"> { (open === true)?<VisibilityOffIcon onClick={toggle}/> :<VisibilityIcon onClick={toggle}/> }   </span>
</div>
      <div className="text"> <span className="Confirmicon"> < HttpsIcon /></span>
     <TextField sx={{ ml:3,mt:3, }}id="standard" label="ConfirmPassword" type={(open1===true)?"password":"text"} variant="standard" required value={FormData.confirmpassword}   onChange={(e)=>SetFormData({...FormData, confirmpassword: e.target.value})} />
     <span className="eye"> { (open1 === true)?<VisibilityOffIcon onClick={Confirm}/> :<VisibilityIcon onClick={Confirm}/> }   </span>
</div><br/>
<div className="bt" >
  <button className="signupbtn" type="submit" >Create</button> 
  <div className="sigin">  Allready Have Account <a className="ac"href="/">Sign-in </a> </div>
   </div>
    </div> 
    </form>
   
        </div>
        </div>
      </div>
   
  )
}

export default Signup
