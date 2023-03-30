import "./personalDetails.scss";
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
import Divider from '@mui/material/Divider';

export default function FormPropsTextFields() {
    let navigate = useNavigate(); 

    const routeToDashboard = () =>{ 
        let path = `/dashboard`; 
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
    <h2 className="heading">Change Password</h2>
    <Divider />
      <div className="list">
        <TextField
          required
          id="outlined-required"
          label="Current Password"
          type='text'
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-required"
          label="New Password"
          type='text'
        />

        <TextField
          required
          id="outlined-required"
          label="Confirm New Password"
          type='text'
        />
      </div>
      <div className="approveButton">

      <Button variant="contained" onClick={routeToDashboard}>Update</Button>
      </div>
     

    </Box>
  );
}