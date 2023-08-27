import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <img  class="img" src="../images/logo2.png" alt=''></img>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Link to="/info" class="about">info</Link>
          <Link to="/" class="about">Home</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}