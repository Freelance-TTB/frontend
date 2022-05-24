import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Menu, 
  MenuItem,
  Fade
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static" sx={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TATABUKU
          </Typography>
          <Box
            sx={{
              border: 1,
              m: 1,
              p: 1,
              bgcolor: 'white',
              borderRadius: 10
            }}
          > 
            <Link href="#" underline="hover" sx={{m: 2}}>
              Customer
            </Link> 
            <Link href="#" underline="hover"  sx={{m: 2}}>
              Retur
            </Link> 
            <Link href="#" underline="hover"  sx={{m: 2}}>
              Product
            </Link> 
            <Link href="#" underline="hover"  sx={{m: 2}}>
              Reporting
            </Link> 

            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{border: 1, borderRadius: 5, mx: 1}}
            >
              {(() => {
                if (open) {
                  return ( 
                    <KeyboardArrowUpIcon />
                  )
                } else {
                  return (
                    <KeyboardArrowDownIcon/>
                  )
                }
              })()}
              Administrator
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
