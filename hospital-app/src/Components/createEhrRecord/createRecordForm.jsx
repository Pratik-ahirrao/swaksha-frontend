import { useState } from "react";

import "../verifyConsentForm/verifyConsentForm.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import authHeader from "../../services/auth-header";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function FormPropsTextFields() {

  let [patientSSID, setPatientSSID] = useState(null);
  let [recordType, setRecordType] = useState(null);
  let [observationCode, setObservationCode] = useState(null);
  let [observationValue, setObservationValue] = useState(null);
  let [conditionCode, setConditionCode] = useState(null);
  let [procedureCode, setProcedureCode] = useState(null);

  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorFormat, setFormat] = useState(null)


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  let navigate = useNavigate(); 
  const createEHRentity = () =>{ 
    formRef.current.reportValidity()
    const API_URL = "http://localhost:9002/hospital/requests/storeEHR"
    let currDate = new Date().toISOString().split("T")[0]
    let data = {
      creationDate: currDate,
      patientSSID: patientSSID,
      type: recordType,
      observationCode: observationCode,
      observationValue: observationValue,
      conditionCode: conditionCode,
      procedureCode: procedureCode
    }
    console.log(data)
    axios.post(
      API_URL, data, {
        headers:authHeader()
      }).then((res) => {
        console.log(res)
        if(res.status=== 200 && res.data === "success"){
          setOpen(true);
          setErrorMessage("Successfully Created Record!");
          setFormat("success");
        } else {
          setOpen(true);
          setErrorMessage("Invalid Request! Probably because patient SSID doesn't exist.");
          setFormat("error");
        }
        // let path = `/dashboard`; 
        // navigate(path);
      })


    // let path = `/dashboard`; 
    // navigate(path);
}
  
  

  const routeToRequestRecord = () =>{ 
    let path = `/dashboard`; 
    navigate(path);
}

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    routeToRequestRecord();
  };

  const formRef = React.useRef();

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <form ref={formRef}>
    <h1 className="heading">Create EHR Records</h1>
      <div>
      
      <TextField
          required
          id="outlined-required"
          label="Patient SSID"
          onChange={(e)=>{setPatientSSID(e.target.value)}}
          type='text'
        />
        
       
       
        
      <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>

      <InputLabel  
          id="demo-simple-select-label"
        >
              Record Type
      </InputLabel>


      <Select  
          required
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={recordType}
          onChange={(e)=>{setRecordType(e.target.value)}}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={"observation"}>Observation</MenuItem>
          <MenuItem value={"condition"}>Condition</MenuItem>
          <MenuItem value={"procedure"}>Procedure</MenuItem>
        </Select>
        </FormControl>
        <br></br>

        <TextField
          
          id="outlined-required"
          label="Observation Code"
          type='text'
          onChange={(e)=>{setObservationCode(e.target.value)}}
        />
       
        <TextField
          
          id="outlined-required"
          label="Observation Value"
          type='text'
          onChange={(e)=>{setObservationValue(e.target.value)}}
        />
        <br></br>
       <TextField
          
          id="outlined-required"
          label="Condition Code"
          type='text'
          onChange={(e)=>{setConditionCode(e.target.value)}}
        />

          
       <TextField
          
          id="outlined-required"
          label="Procedure Code"
          type='text'
          onChange={(e)=>{setProcedureCode(e.target.value)}}
        />
      </div>
    
      
      <div className="approveButton">

      <Button variant="contained" onClick={createEHRentity} /*onClick={handleClick}*/>Create EHR</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={errorFormat} sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      </div>
      
      <div className="backbutton">
      <Button variant="contained">Back</Button>

      </div>
      </form>
    </Box>
  );
}