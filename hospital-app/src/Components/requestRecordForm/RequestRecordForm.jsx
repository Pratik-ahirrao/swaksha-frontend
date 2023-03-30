import "./requestRecordForm.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export default function FormPropsTextFields() {
    let navigate = useNavigate(); 

    const routeToRequestRecord = () =>{ 
        let path = `/requestData`; 
        navigate(path);
      }

    const routeToRecords = () =>{ 
        let path = `/requestData/details`; 
        navigate(path);
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <h1 className="heading">Request Health Record</h1>
      <div>
        
        <TextField
          required
          id="outlined-required"
          label="Patient SSID"
          type='text'
        />
        
       
       <TextField
          
          id="outlined-required"
          label="Consent ID"
          type='text'
        />
      
      
      </div>
    
   
      <div className="approveButton">

      <Button variant="contained" onClick={routeToRecords}>Request Data</Button>
      </div>
      <div className="backbutton">
      <Button variant="contained" onClick={routeToRequestRecord} >Clear</Button>

      </div>

    </Box>
  );
}