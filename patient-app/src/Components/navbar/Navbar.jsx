import React from 'react';
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import DropdownMenu from './dropDownMenu';
const Navbar = () => {
    // const { dispatch } = useContext(DarkModeContext);

   
    const menuItems = ['Notification 1', 'Notification 2', 'Notification 3',"Clear All"]; // Replace this with your actual menu items

  
    return (
      <div className="navbar">
          <div className="wrapper">
        
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          {/* 
          <div className="item">
            <NotificationsNoneOutlinedIcon  className="icon" onClick={handleClick} />
            <div className="counter">1</div>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
            >
            <MenuItem className='notifications' onClick={handleClose}>Notification 1</MenuItem>
            <MenuItem onClick={handleClose}>Notification 2</MenuItem>
            <MenuItem onClick={handleClose}>Notification 3</MenuItem>
            <MenuItem onClick={handleClose}>Clear all</MenuItem>

            </Menu>
          </div > */}
          <DropdownMenu menuItems={menuItems} />
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
        </div>
      </div>
      </div>
    );
  };
  
  export default Navbar;