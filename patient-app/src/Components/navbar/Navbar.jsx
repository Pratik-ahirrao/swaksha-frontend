import React, { useEffect, useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect.jsx";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  const [notifications, setNotifications] = useState(localStorage.getItem("notifications"));
  const { t } = useTranslation();
  
  useEffect(()=>{
    setNotifications(localStorage.getItem("notifications"));
    const handleStorage = () => {
      setNotifications(localStorage.getItem("notifications"));
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="navbar">
        <div className="wrapper">
      
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className="icon" />
          <LanguageSelect />
          English
        </div>
        
        <div className="item">
          <FullscreenExitOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">{notifications}</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;