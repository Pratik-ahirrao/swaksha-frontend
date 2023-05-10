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

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function FormPropsTextFields() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  let navigate = useNavigate(); 
  const routeToDashboard = () =>{ 
    let path = `/dashboard`; 
    navigate(path);
}

//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//     routeToDashboard();
//   };

 
const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
 

 
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <h1 className="heading">Create EHR Records</h1>
      <div>
      <TextField
          required
          id="outlined-required"
          label="Patient SSID"
          type='text'
        />
        
       
       
        
<FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>

<InputLabel  id="demo-simple-select-label">Record Type</InputLabel>
<Select  
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={10}>Observation</MenuItem>
          <MenuItem value={20}>Condition</MenuItem>
          <MenuItem value={30}>Procedure</MenuItem>
        </Select>
        </FormControl>
        <br></br>

        <TextField
          
          id="outlined-required"
          label="Observation Code"
          type='text'
        />
       
        <TextField
          
          id="outlined-required"
          label="Observation Value"
          type='text'
        />
        <br></br>
       <TextField
          
          id="outlined-required"
          label="Condition Code"
          type='text'
        />

          
       <TextField
          
          id="outlined-required"
          label="Procedure Code"
          type='text'
        />
      </div>
    
      
      <div className="approveButton">

      <Button variant="contained" /*onClick={handleClick}*/>Verify</Button>
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