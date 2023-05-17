import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ListOfDoctors(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'violet' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                {props.doctorName} &nbsp;
                {props.doctorLastName}
              </Typography>
              <br />
              {props.doctorSpecialization}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
