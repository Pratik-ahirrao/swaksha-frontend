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

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function FormPropsTextFields() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  
  const routeToDashboard = () =>{ 
    let path = `/dashboard`; 
    navigate(path);
}

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
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
        />
      </div>
    
      
      <div className="approveButton">

      <Button variant="contained" onClick={handleClick}>Request Data</Button>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Consent Verified!!
        </Alert>
      </Snackbar> */}
      </div>
      <div className="backbutton">
      <Button variant="contained" onClick={routeToDashboard} >Back</Button>

      </div>

    </Box>
  );
}