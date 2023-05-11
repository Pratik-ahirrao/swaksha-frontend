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
import { useTranslation } from "react-i18next";

export default function FormPropsTextFields() {
    let navigate = useNavigate(); 
    const { t } = useTranslation();

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
    <h2 className="heading">{t("personal_details")}</h2>
    <Divider />

      <div className="list">
        <TextField
          id="outlined-required"
          label={t("first_name")}
          type='text'
          defaultValue={"Jane"}
        />

        <TextField
          id="outlined-required"
          label={t("last_name")}
          type='text'
          defaultValue={"Smith"}
        />
        <TextField
          id="outlined-required"
          label={t("email")}
          type='text'
          defaultValue={"example@org.com"}
        />
        <TextField
          id="outlined-required"
          label={t("phone_number")}
          type='number'
          defaultValue={"123456789"}
        />
       
       
       <TextField
          
          id="outlined-required"
          label={t("dob")}
          defaultValue="2017-05-24"
          InputLabelProps={{ shrink: true }}
          type='date'
        />
      
      </div>
    
      <div>
      <TextField
          id="outlined-required"
          label={t("address")}
          type='text'
          defaultValue={"Bhosri"}
        />
         <TextField
          id="outlined-required"
          label={t("city")}
          type='text'
          defaultValue={"Pune"}
        />
         <TextField
          id="outlined-required"
          label={t("state")}
          type='text'
          defaultValue={"Assam"}
        />
      
      </div>
      <div>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{t("gender")}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="female"
      >
        <FormControlLabel value="female" control={<Radio />} label={t("female")} />
        <FormControlLabel value="male" control={<Radio />} label={t("male")} />
        <FormControlLabel value="other" control={<Radio />} label={t("other")} />
       
      </RadioGroup>
    </FormControl>

       
      </div>
      <div className="approveButton">

      <Button variant="contained" onClick={routeToDashboard}>{t("save_changes")}</Button>
      </div>
      

    </Box>
  );
}