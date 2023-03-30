import "./consentForm.scss";
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

    const routeToDashboard = () =>{ 
        let path = `/dashboard`; 
        navigate(path);
      }

    const routeToConsents = () =>{ 
        let path = `/consents`; 
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
    <h1 className="heading">Approve Consent</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="HIP SSID"
          type='text'
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Doctor SSID"
          defaultValue={12}
          type="number"
        />
       
       <TextField
          required
          id="outlined-required"
          label="Consent End DateTime"
          defaultValue="03/04/2023 10:13"
          InputLabelProps={{ shrink: true, required: true }}
          type='datetime-local'
        />
      
      <TextField
          disabled
          id="outlined-required"
          label="Initiated DateTime"
          defaultValue="03/04/2023 10:13 PM"
          InputLabelProps={{ shrink: true, required: true }}
          type='datetime-local'
        />
      </div>
    
      <div>
       
      <TextField
          disabled
          id="outlined-disabled"
          label="HIU SSID"
          defaultValue={2}
          type="number"
        />

        <TextField
          disabled
          id="outlined-disabled"
          label="HIU SSID"
          defaultValue={2}
          type="number"
        />
        
        <TextField
          disabled
          id="outlined-disabled"
          label="Patient SSID"
          defaultValue={1}
          type="number"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Data Access Start DateTime"
          defaultValue="03/04/2023 10:13"
          InputLabelProps={{ shrink: true, required: true }}
          type='datetime-local'
        />

        <TextField
          required
          id="outlined-required"
          label="Data Access Start DateTime"
          defaultValue="03/04/2023 10:13"
          InputLabelProps={{ shrink: true, required: true }}
          type='datetime-local'
        />
      </div>
      <div className="approveButton">

      <Button variant="contained" onClick={routeToDashboard}>Approve</Button>
      </div>
      <div className="backbutton">
      <Button variant="contained" onClick={routeToConsents} >Back</Button>

      </div>

    </Box>
  );
}