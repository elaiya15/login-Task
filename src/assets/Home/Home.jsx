/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import './home.css'
import{useNavigate} from "react-router-dom"; 

import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstname', headerName: 'First name', width: 130 },
  { field: 'lastname', headerName: 'Last name', width: 130 },
  { field: 'gender', headerName: 'gender', width: 130 },
  { field: 'email', headerName: 'email', width: 130 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];


const Home = () => {
  const navigate = useNavigate();
  
  const auth=localStorage.getItem("userData")

 const [state, setState] = useState([])
 

 const data =async ()=>{
    try {
  const response = await axios.get("https://63d3cbccc1ba499e54c8fd76.mockapi.io/user/user");
      setState(response.data);
} catch (error) {
  console.log(error);
}}

console.log(state);


  useEffect(() => {
   if (!auth ){
         return navigate("/")
     }
     data()
   },[]);


   const logout=()=>{
    localStorage.removeItem("userData")
    navigate("/")
  }

  return ( 
    <>
 
<div className="h1">
  <h1 className="hello">Welcome </h1> 
<button className="button-5" role="button" onClick={logout}>logout</button>
  {/* <span className="logout" onClick={logout} >LogOut</span> */}
</div>
 <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={state}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    
    </>
  )
}

export default Home
