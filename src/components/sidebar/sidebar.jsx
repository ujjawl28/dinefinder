import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './sidebar.css';
import { useNavigate, Outlet } from 'react-router-dom';
import { MdOutlinePassword, MdFeedback } from 'react-icons/md';
import { AiOutlineHistory } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import Signupheader from '../Signupheader';

const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
      // sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Signupheader />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <div >
          <img className='userImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2w35-ywQxAxsVTPs5rHEF2m0b_CBnLHJNgA&usqp=CAU"
            alt="phofile_photo" />

          <h1 className='userPhoto'>{props.name}</h1>
        </div>
        <List>
          {/* <i class="fa-light fa-key-skeleton"></i> */}
          {[{ profile: 'Profile', font: <i class="fa-solid fa-user"></i>, route: "/profile" },
          { profile: 'Change Password', font: <MdOutlinePassword />, route: "/profile/password" }
            , { profile: 'Booking History', font: <AiOutlineHistory />, route: "/profile/booking" }
            , { profile: 'Logout', font: <BiLogOut />, route: "/login" }].map((text, index) => (
              <ListItem key={text.profile} disablePadding>
                <ListItemButton onClick={(e) => {
                  if (e.target.value == text.profile) {
                    navigate(text.route);
                  } else {
                    navigate(text.route);
                  }

                }}>
                  <ListItemIcon >
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    {/* <i class="fa-solid fa-user"></i> */}
                    {text.font}
                  </ListItemIcon>
                  <ListItemText primary={text.profile} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac. */}
          <Outlet></Outlet>
        </Typography>
        {/* <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}