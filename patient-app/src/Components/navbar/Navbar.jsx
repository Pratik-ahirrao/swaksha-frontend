import React, { useEffect, useState } from 'react';
import './navbar.scss'
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DropdownMenu from './dropDownMenu';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect.jsx";

const Navbar = () => {
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem("notifications")) || []);
  const { t } = useTranslation();
  
  useEffect(()=>{
    const handleStorage = () => {
      setNotifications(JSON.parse(localStorage.getItem("notifications")) || []);
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

        </div>

        {/* <div className="items"> */}
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}
          <div className="item">
            {/* <FullscreenExitOutlinedIcon className="icon" /> */}
            <DropdownMenu menuItems={notifications} />

          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          {/* <div className="item">
            <ListOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
       
      {/* </div> */}
    </div>
    </div>
    </div>
  );
};

export default Navbar;