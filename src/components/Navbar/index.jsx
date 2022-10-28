import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

function Navbar() {
  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{bgcolor:"transparent", boxShadow: 0}}>
        <Toolbar sx={{mt:3}}>
          <Avatar alt="Yes is me" src="https://img.icons8.com/ios/70/000000/circled-m.png" sx={{ml: 2, width: 50, height: 50, cursor:"pointer"}} onClick={refreshPage}>
            L
          </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, margin: "0px 10px", color:"black", fontWeight: 'bold'}}>
            Lucas Maciel
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: 0,color:"black", fontSize:"15px", fontWeight: 'light'}}>
            Júnior Web Developer
            </Typography>
          </Typography>
          <Typography variant="h6" component="div" sx={{ margin: "0 20px", color:"black", fontSize:"18px", fontWeight:'bold', cursor: "pointer"}}>
            About Me
            </Typography>
            <Typography variant="h6" component="div" sx={{ margin: "0 20px", color:"black", fontSize:"18px", fontWeight:'bold', cursor: "pointer"}}>
            Projects
            </Typography>
            <Typography variant="h6" component="div" sx={{ margin: "0 20px", color:"black", fontSize:"18px", fontWeight:'bold', border: "1px solid black ", padding: "5px 10px", cursor: "pointer"}}>
            Work Together
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
