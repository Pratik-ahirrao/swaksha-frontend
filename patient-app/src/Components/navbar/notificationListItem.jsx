import React from 'react';
import { ListItem, ListItemText } from '@mui/material';



function NotificationListItem({ title, body }) {

  return (
    <ListItem alignItems="flex-start">
      <ListItemText primary={title} secondary={body} />
    </ListItem>
  );
}

export default NotificationListItem;