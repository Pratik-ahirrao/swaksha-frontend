import React, { useState } from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './navbar.scss';
import { Button, Popover, List, ListItem, ListSubheader, ListItemButton, ListItemText} from "@mui/material";
import { useTranslation } from "react-i18next";
import NotificationListItem from './notificationListItem';

const DropdownMenu = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="item">
      <NotificationsNoneOutlinedIcon className="icon" onClick={handleClick} />
      {menuItems.length > 0 && <div className="counter">{menuItems.length}</div>}
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <NotificationListItem
            title={item.title}
            body={item.body} />
          </MenuItem>
        ))}
      {/* </Menu> */}</Popover>
    </div>
  );
};

export default DropdownMenu;
