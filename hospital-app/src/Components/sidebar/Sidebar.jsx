import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import { Link } from "react-router-dom";
import { useContext } from "react";

const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">Swasthya Suraksha</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li >
            <DashboardIcon className="icon" />
            <span className='dashlist'>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <HealthAndSafetyOutlinedIcon className="icon" />
              <span className='dashlist'>Patient Records</span>
            </li>
          </Link>
        
          <Link to="/requestData" style={{ textDecoration: "none" }}>
            <li>
            <AccessibilityIcon className="icon" />
            <span className='dashlist'>Request Records</span>
            </li>
          </Link>
          
          <Link to="/verifyConsent" style={{ textDecoration: "none" }}>
            <li>
            <SafetyCheckIcon className="icon" />
            <span className='dashlist'>Verify Consents</span>
            </li>
          </Link>
          
          
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span className='dashlist'>Profile</span>
          </li>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
            <ExitToAppIcon className="icon" />
            <span className='dashlist'>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div> */}
      </div>
    </div>
  );
};

export default Sidebar;