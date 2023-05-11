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
import { useTranslation } from "react-i18next";

export default function FormPropsTextFields() {
    let navigate = useNavigate(); 
    const { t } = useTranslation();

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
    <h2 className="heading">{t("change_password")}</h2>
    <Divider />
      <div className="list">
        <TextField
          required
          id="outlined-required"
          label={t("current_password")}
          type='text'
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-required"
          label={t("new_password")}
          type='text'
        />

        <TextField
          required
          id="outlined-required"
          label={t("confirm_new_password")}
          type='text'
        />
      </div>
      <div className="approveButton">

      <Button variant="contained" onClick={routeToDashboard}>{t("update")}</Button>
      </div>
    </Box>
  );
}