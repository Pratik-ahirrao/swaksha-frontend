import { useState } from "react";
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from "axios";
import authHeader from "../../services/auth-header";

export default function FormPropsTextFields() {

  const [patientSSID, setPatientSSID] = useState("");
  const [consentID, setConsentID] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorFormat, setFormat] = useState(null)
  const [hipSSID,setHipSSID]=useState("")

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
    let navigate = useNavigate(); 

    const routeToRequestRecord = () =>{ 
        let path = `/requestData`; 
        navigate(path);
      }

    const routeToRecords = () =>{ 
        let path = `/requestData/details`; 
        navigate(path);
    }

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    // console.log(patientSSID, consentID);
    
    axios.post(
      "http://localhost:9002/hospital/requests/newRequest",
      {
        "patientSSID": patientSSID,
        "hipSSID":hipSSID
      },
      {headers:authHeader()}
    ).then((res) => {
      console.log(res);
      console.log(res.data.response);
      console.log(res.status);
      if(res.status=== 200 && res.data.response === "Consent Request Success"){
        setOpen(true);
        setErrorMessage("Successfully Requested Data!");
        setFormat("success");
      }
      else{
        setOpen(true);
        setErrorMessage("Invalid Request! Please try again later.");
        setFormat("error");
      }
        // setOpen(false);
      
      
    })
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    routeToRequestRecord();
  };
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
          onChange={(e)=>{setPatientSSID(e.target.value)}}
        />
         <TextField
          required
          id="outlined-required"
          label="HIP SSID"
          type='text'
          onChange={(e)=>{setHipSSID(e.target.value)}}
        />
       
       {/* <TextField
          id="outlined-required"
          label="Consent ID"
          type='text'
          onChange={(e)=>{setConsentID(e.target.value)}}
        /> */}
      
      
      </div>
    
   
      <div className="approveButton">

      <Button variant="contained" onClick={handleClick}>Request Data</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={errorFormat} sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Invalid Request!
        </Alert>
      </Snackbar> */}
      </div>
      <div className="backbutton">
      <Button variant="contained" onClick={routeToRequestRecord} >Clear</Button>

      </div>

    </Box>
  );
}