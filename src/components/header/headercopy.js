import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

function HeaderCopy() {
    const [anchorElNot, setAnchorElNot] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNotificationsMenu = (event) => {
        setAnchorElNot(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNotificationsMenu = () => {
        setAnchorElNot(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    const approvedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];
    const deniedEvents = JSON.parse(localStorage.getItem("deniedEvents")) || [];

    const allNotifications = [
        ...approvedEvents.map((event) => ({ ...event, status: "approved" })),
        ...deniedEvents.map((event) => ({ ...event, status: "denied" })),
    ];

    const getNotificationMessage = (event, status) => {
        const action = (event.status === "approved" ? "approved" : "rejected");
        return `Your requested event "${event.title}" has been ${action}.`
    };

    const notifications = allNotifications.map(getNotificationMessage);

    //getting user role for navigation
    function getUserRole() {
        return localStorage.getItem("userRole") || "user";
    }
    const userRole = getUserRole();

    console.log("userRole:", userRole);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar className='d-flex justify-content-between' disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="\home"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Event Management System
                    </Typography>

                    <div className='d-flex align-items-center justify-content-between'>
                        {userRole === "user" ?
                            (<Box>
                                <div className='d-flex align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path fill="white" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" />
                                    </svg>
                                    <span>User</span>
                                </div>
                            </Box>) :
                            (<Box>
                                <div className='d-flex align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <path fill="white" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3Zm0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08Z" />
                                    </svg>
                                    <span>Admin</span>
                                </div>
                            </Box>)}

                        <Box className='px-3' sx={{ flexGrow: 0 }}>

                            {userRole === "user" && (<Tooltip title="Open Notifications">
                                <IconButton onClick={handleOpenNotificationsMenu} aria-label={notificationsLabel(100)}>
                                    <Badge badgeContent={notifications.length} color="error">
                                        <NotificationsIcon alt="notifications" />
                                    </Badge>
                                </IconButton>
                            </Tooltip>)}
                            <Menu
                                sx={{ mt: '45px', overflow: 'wrap'}}
                                
                                id="menu-appbar"
                                anchorEl={anchorElNot}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNot)}
                                onClose={handleCloseNotificationsMenu}
                            >
                                {userRole === "user" && (notifications.map((notification, index) => (
                                    <div key={index}>
                                        <div  onClick={handleCloseNotificationsMenu}>
                                            <Typography sx={{width:'350px', padding: '5px 10px 5px 15px'}} textAlign="left" style={{ flex: '1' }}>
                                                {notification}
                                            </Typography>
                                        </div>
                                        <Divider /> {/* Add a divider if you want to separate the messages visually */}
                                    </div>
                                )))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                {userRole === "admin" ? (
                                    <MenuItem>
                                        <Link to="/admin" style={{ textDecoration: "none" }}>
                                            Dashboard
                                        </Link>
                                    </MenuItem>
                                ) : (
                                    <MenuItem>
                                        <Link to="/user" style={{ textDecoration: "none" }}>
                                            Dashboard
                                        </Link>
                                    </MenuItem>
                                )}
                                <MenuItem>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                        Logout
                                    </Link>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default HeaderCopy;