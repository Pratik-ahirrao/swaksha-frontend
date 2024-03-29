import "../verifyConsentForm/VerifyConsentForm";
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
import axios from "axios";
import authHeader from "../../services/auth-header";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from "react";

export default function FormPropsTextFields() {
  const [errorFormat, setFormat] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [consentId,setConsentID]=useState("")
  
  const routeToDashboard = () =>{ 
    let path = `/dashboard`; 
    navigate(path);
}

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {

    axios.post("http://localhost:9002/hospital/requests/requestWithConsent",{"consentId":consentId},{headers:authHeader()})
    .then(res => {
        
        console.log(res)
        // console.log(res.data.response);
      console.log(res.status);
       // console.log(response.data.size)
       if(res.status=== 200                     ){
        setOpen(true);
        setErrorMessage("Successfully Requested Data!");
        setFormat("success");
      }
      else{
        setOpen(true);
        setErrorMessage("Invalid Request! Please try again later.");
        setFormat("error");
      }

    })

  //  setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    routeToDashboard();
  };

  let navigate = useNavigate(); 

 

 
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <h1 className="heading">Request With Consent</h1>
      <div>
      
       
       <TextField
          required
          id="outlined-required"
          label="Consent ID"
          type='text'
          onChange={e=>setConsentID(e.target.value)}
        />
      </div>
    
      
      <div className="approveButton">

      <Button variant="contained" onClick={handleClick}>Request Data</Button>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={errorFormat} sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      </div>
      <div className="backbutton">
      <Button variant="contained" onClick={routeToDashboard} >Back</Button>

      </div>

    </Box>
  );
}