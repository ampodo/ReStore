
import { Button, Menu, Fade, MenuItem } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { signOut } from "../../features/account/accountSlice";


export default function SignedInMenu() {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.account);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button 
                  sx={{color:'black', typography: 'body2', fontWeight: 'bold'}}
                  onClick={handleClick}
            >
                  {user?.email}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
               <MenuItem onClick={handleClose}>Profile</MenuItem>    
               <MenuItem onClick={handleClose}>My orders</MenuItem> 
               <MenuItem onClick={() => dispatch(signOut())}>Log out</MenuItem>  
            </Menu>
        </>
    );
}



