import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';


import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import "../css/AppBanner.css"


export default function AppBanner() {

    const items = [
        {
          key: '1',
          label: (
            <Link to = "/home"> 
              About Me
            </Link>
          ),
        },
        {
          key: '2',
          label: (
          <Link to = "/projects"> 
              My Projects
          </Link>
          ),
          icon: <SmileOutlined />,
          disabled: false,
        },
        {
          key: '3',
          label: (
            <Link to = "/experience"> 
              Experience
            </Link>
          ),
          disabled: false,
        },
        {
          key: '4',
          label: (
            <a href={`${process.env.PUBLIC_URL}/Brian Shao Resume.pdf`}download>Resume Download</a>
          ),
        },
      ];


    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        //store.closeCurrentList();
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleMenuClose();
 
    }

    const menuId = 'primary-search-account-menu';
    const loggedOutMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}><Link to='/login/'>Login</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link to='/register/'>Create New Account</Link></MenuItem>
        </Menu>
    );
    const loggedInMenu = 
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>        

    let editToolbar = "";
    let menu = loggedOutMenu;
    //if (auth.loggedIn) {
        //menu = loggedInMenu;
    //}
    
    function getAccountMenu(/**loggedIn**/) {
        //let userInitials = auth.getUserInitials();
        //console.log("userInitials: " + userInitials);
        //if (loggedIn) 
            //return <div>{"BS"}</div>;
        //else
            return <AccountCircle />;
    }

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{ height: '10%' }} >
                <Toolbar>
                    <Typography                        
                        variant="h4"
                        noWrap
                        component="div"                      
                    >
                        <Link edge="start" style={{ textDecoration: 'none', color: 'Red', fontFamily: 'Satisfy'}} to='/'>BS</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                    <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space >
      { getAccountMenu(/**auth.loggedIn**/ )}
        <DownOutlined className="ant-btn-primary"/>
      </Space>
    </a>
  </Dropdown>

                    </Box>
                </Toolbar>
            </AppBar>
            {
                menu
            }
        </Box>
    );
}