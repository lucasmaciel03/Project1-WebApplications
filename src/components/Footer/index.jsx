import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';

function Footer(){
    return (
        <Box sx={{ flexGrow: 1, bottom:0 }}>
        <AppBar position="static" sx={{ bottom: 0, bgcolor:"transparent", boxShadow: 0}}>
          <Toolbar>
          <Avatar alt="Yes is me" src="https://img.icons8.com/ios/50/000000/imessage.png" sx={{ml: 2, width: 50, height: 50, cursor:"pointer"}}>
            L
          </Avatar>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Footer;