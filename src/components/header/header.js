import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Badge,
    Snackbar,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Notifications from "@mui/icons-material/Notifications";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css"

function Header() {
    function getUserRole() {
        return localStorage.getItem("userRole") || "user";
    }
    const userRole = getUserRole();
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);


    const handleNotifications = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleMenu = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl1(null);
        setDropdownOpen(false);
    };

    const handleCloseNotifs = () => {
        setAnchorEl2(null);
        setDropdownOpen(false);
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const notifications = JSON.parse(localStorage.getItem("approvedEvents")) || [];
    const deniedEvents = JSON.parse(localStorage.getItem("deniedEvents")) || [];



    const allNotifications = [
        ...notifications.map((event) => ({ ...event, status: "approved" })),
        ...deniedEvents.map((event) => ({ ...event, status: "denied" })),
    ];

    const getNotificationMessage = (event, status) => {
        const action = status === "approved" ? "approved" : "rejected";
        return `Your requested event "${event.title}" has been ${action}.`
    };

    const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
                <CloseIcon fontSize="small" />
        </React.Fragment>
    );

    return (
        <AppBar className="header" position="static">
            <Toolbar className="d-flex justify-content-between">
                <Link className="logo" to="/home" style={{ textDecoration: "none"}}>
                    <Typography className="monster" variant="h6" component="div">
                        Event Management System
                    </Typography>
                </Link>

                {/* Notification icon with badge */}
                <div className="d-flex align-items-center">
                    <div className="notification-icon" aria-controls="notifications-appbar" onClick={toggleDropdown}>

                        {userRole === "admin" ? (
                            <></>
                        ) : (
                            <IconButton aria-haspopup="true" color="inherit" onClick={handleNotifications}>
                                <Badge badgeContent={notifications.length + deniedEvents.length} color="error">
                                    <Notifications />
                                </Badge>
                            </IconButton>

                        )}
                    </div>

                    <div className="profile-icon" onClick={toggleDropdown}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleMenu}
                        >
                            <AccountCircle />
                        </IconButton>

                    </div>
                </div>

                <Menu
                    id="menu-appbar"
                    anchorEl1={anchorEl1}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorEl1)}
                    onClose={handleCloseMenu}
                >
                    {userRole === "admin" ? (
                        <MenuItem onClick={handleCloseMenu}>
                            <Link to="/admin" style={{ textDecoration: "none" }}>
                                Dashboard
                            </Link>
                        </MenuItem>
                    ) : (
                        <MenuItem onClick={handleCloseMenu}>
                            <Link to="/user" style={{ textDecoration: "none" }}>
                                Dashboard
                            </Link>
                        </MenuItem>
                    )}
                    <MenuItem onClick={handleCloseMenu}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            Logout
                        </Link>
                    </MenuItem>
                </Menu>

                <Menu
                    id="notifications-appbar"
                    anchorEl2={anchorEl2}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorEl2)}
                    onClose={handleCloseNotifs}
                >
                    {allNotifications.map((event) => (
                        <div className="d-flex align-items-center justify-content-center">
                            <div key={event.id} onClick={handleCloseNotifs}>
                                {getNotificationMessage(event, event.status)}
                            </div>
                            <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={handleClose}
                                message="Note archived"
                                action={action}
                            />

                        </div>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
