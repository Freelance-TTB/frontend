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
import logoTatabuku from '../assets/TATABUKU.png'

const navOption = [
  "Customer",
  "Retur",
  "Product",
  "Reporting"
]

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
      <AppBar 
        position="static" 
        sx={{ 
          borderBottomLeftRadius: 30, 
          borderBottomRightRadius: 30, 
          bgcolor: '#205375'
        }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" sx={{color: 'white'}}>
              <Box
                component="img"
                sx={{
                  // height: '20%',
                  maxHeight: { xs: 75, md: 75 },
                  maxWidth: { xs: 350, md: 250 },
                  m: 1
                }}
                alt="The house from the offer."
                src={logoTatabuku}
              />
            </Link>
          </Typography>

          <Box
            sx={{
              bgcolor: '#f4a64e',
              borderRadius: 10
            }}
          > 
            {
              navOption.map((name) => {
                return (
                  <Link href="#" underline="none" 
                    sx={{
                      m: 2, 
                      color: 'white',
                      transition: "background 0.5s, color 0.5s",
                      '&:hover': {
                        color: "#205375",
                      },
                    }}
                  >
                    {name}
                  </Link> 
                )
              }) 
            }

            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                border: 1, 
                borderRadius: 5, 
                ml: 1, 
                color: 'white',
                transition: "background 0.5s, color 0.5s",
                '&:hover': {
                  color: "#205375"
                },
              }}
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
