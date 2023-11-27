/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import './home.css'
import Container from 'react-bootstrap/Container';

import cuteImage from '/src/assets/Signup/cute.jpeg';

import{useNavigate} from "react-router-dom"; 

const Home = () => {
  const navigate = useNavigate();
   
  
  const auth=localStorage.getItem("userData")
 
  console.log(auth);

  useEffect(() => {
   if (!auth ){
         return navigate("/")
     }
   },);




  return ( 
    <>
 <Container fluid>

     <div className="hello">
     <h1>Welcome To The Home page</h1> 
    
     <img className="cat" src={cuteImage} alt="Cute" />
     
     
     </div>

    </Container>
    
    </>
  )
}

export default Home
