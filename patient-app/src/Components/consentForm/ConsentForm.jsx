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
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import authHeader from "../../services/auth-header";
export default function FormPropsTextFields() {
   const location = useLocation();
   const { t } = useTranslation();
   let consentDetails = location.state;
  console.log(consentDetails);
  let [hipssid, setHipssid] = useState("");
  let [consentEndDate, setconsentEndDate] = useState(null);
  let [dataAccessStartDate, setDataAccessStartDate] = useState(null);
  let [dataAccessEndDate, setDataAccessEndDate] = useState(null);
  let [encPin,setEncPin]=useState("");

    let navigate = useNavigate(); 

    const routeToDashboard = () =>{ 
        let path = `/dashboard`; 
        navigate(path);
      }

    const API_URL = "http://localhost:9001/patient/approveConsent";

    const routeToConsents = () =>{ 
      let data={}
      data.consentObj=consentDetails;
      //data.consentObj.hipSSID=hipssid;
    //  data.hipSSID="123456789";
      // data.consentObj.doctorSSID="155827267931"
     
     // data.patientSSID=consentDetails.patientSSID;
      data.consentObj.dataAccessStartDate=dataAccessStartDate;
      data.consentObj.dataAccessEndDate=dataAccessEndDate;
      data.consentObj.consentEndDate=consentEndDate;
      data.encPin=encPin;
      console.log(data)
      axios.post(
        API_URL, data,{headers:authHeader()}
      ).then(()=>
      {
      let path = `/consents`;
      navigate(path);
      
     })
        // let path = `/consents`; 
        // navigate(path);
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
          disabled
          id="outlined-required"
          label={t("hip_ssid")}
          
          defaultValue={consentDetails['hipSSID']}
          type='text'
        />
        <TextField
          required
          id="outlined-required"
          label={t("consent_manager_pin")}
          type='password'
          onChange={(e)=>{setEncPin(e.target.value)}}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label={t("doctor_ssid")}
          defaultValue={consentDetails['doctorSSID']}
          type="text"
        />
      
	 <TextField
          required
          id="outlined-required"
          label={t("data_access_start_date")}
          //defaultValue="03/04/2023"
          InputLabelProps={{ shrink: true, required: true }}
          onChange={(e)=>{setDataAccessStartDate(e.target.value)}}
          type='date'
        />
        
       <TextField
          required
          id="outlined-required"
          label={t("data_access_end_date")}
        //  defaultValue="03/04/2023"
          InputLabelProps={{ shrink: true, required: true }}
          onChange={(e)=>{setDataAccessEndDate(e.target.value)}}
          type='date'
        />

      <TextField
          required
          id="outlined-required"
          label={t("consent_end_date")}
        //  defaultValue="03/04/2023"
          InputLabelProps={{ shrink: true, required: true }}
          onChange={(e)=>{setconsentEndDate(e.target.value)}}
          type='date'
        />
    	</div>
      <div>
       
      <TextField
          disabled
          id="outlined-disabled"
          label={t("hiu_ssid")}
          defaultValue={consentDetails["hiuSSID"]}
          type="text"
        />

        {/* <TextField
          disabled
          id="outlined-disabled"
          label="HIU SSID"
          defaultValue={2}
          type="number"
        /> */}
        
        <TextField
          disabled
          id="outlined-disabled"
          label={t("patient_ssid")}
          defaultValue={consentDetails["patientSSID"]}
          type="text"
        />
      </div>

      <div className="approveButton">

      <Button variant="contained" className="appbutton" onClick={routeToConsents}>{t("approve")}</Button>
      </div>
      <div className="backbutton">
      <Button variant="contained" onClick={routeToConsents} >{t("back")}</Button>

      </div>

    </Box>
  );
}
