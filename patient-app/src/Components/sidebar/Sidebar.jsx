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
import { Link } from "react-router-dom";
import { useContext } from "react";
import Divider from '@mui/material/Divider';
import { useTranslation } from "react-i18next";

const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">{t("swasthya_suraksha")}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">{t("main")}</p>
          <li >
            <DashboardIcon className="icon" />
            <span className='dashlist'>{t("dashboard")}</span>
          </li>
          <Divider />

          <p className="title">{t("lists")}</p>
          {/* <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <HealthAndSafetyOutlinedIcon className="icon" />
              <span className='dashlist'>My records</span>
            </li>
          </Link> */}
        
          <Link to="/consents" style={{ textDecoration: "none" }}>
            <li>
            <CreditCardIcon className="icon" />
            <span className='dashlist'>{t("consents")}</span>
            </li>
          </Link>

          <p className="title">{t("ehr_records")}</p>
          <Link to="/observation" style={{ textDecoration: "none" }}>
            <li>
              <HealthAndSafetyOutlinedIcon className="icon" />
              <span className='dashlist'>{t("observation")}</span>
            </li>
          </Link>
          <Link to="/condition" style={{ textDecoration: "none" }}>
            <li>
              <HealthAndSafetyOutlinedIcon className="icon" />
              <span className='dashlist'>{t("condition")}</span>
            </li>
          </Link>
          <Link to="/procedure" style={{ textDecoration: "none" }}>
            <li>
              <HealthAndSafetyOutlinedIcon className="icon" />
              <span className='dashlist'>{t("procedure")}</span>
            </li>
          </Link>
          <Divider />

          
          <p className="title">{t("user")}</p>
          
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span className='dashlist'>{t("profile")}</span>
            </li>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
            <ExitToAppIcon className="icon" />
            <span className='dashlist' >{t("logout")}</span>
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