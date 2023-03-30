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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
    <h2 className="heading">Personal Details</h2>
    <Divider />

      <div className="list">
        <TextField
          id="outlined-required"
          label="First Name"
          type='text'
          defaultValue={"Jane"}
        />

        <TextField
          id="outlined-required"
          label="Last Name"
          type='text'
          defaultValue={"Smith"}
        />
        <TextField
          id="outlined-required"
          label="Email"
          type='text'
          defaultValue={"example@org.com"}
        />
        <TextField
          id="outlined-required"
          label="Phone Number"
          type='number'
          defaultValue={"123456789"}
        />
       
       
       <TextField
          
          id="outlined-required"
          label="Date Of Birth"
          defaultValue="2017-05-24"
          InputLabelProps={{ shrink: true }}
          type='date'
        />
      
      </div>
    
      <div>
      <TextField
          id="outlined-required"
          label="Address"
          type='text'
          defaultValue={"Bhosri"}
        />
         <TextField
          id="outlined-required"
          label="City"
          type='text'
          defaultValue={"Pune"}
        />
         <TextField
          id="outlined-required"
          label="State"
          type='text'
          defaultValue={"Assam"}
        />
      
      </div>
      <div>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="female"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       
      </RadioGroup>
    </FormControl>

       
      </div>
      <div className="approveButton">

      <Button variant="contained" onClick={routeToDashboard}>Update</Button>
      </div>
      

    </Box>
  );
}