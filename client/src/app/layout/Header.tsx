import { AppBar, Toolbar, Typography } from "@mui/material";
import "./styles.css"



export default function Header() {
    return (
         <AppBar position='static' style={{backgroundColor: "white"}} sx={{mb: 8}}>
             <Toolbar>  
                <Typography variant='h6'>
                <div className="header_logo">
                <img className="logo" src="/icons/logo.png" alt=""/>
                </div>
                </Typography>
             </Toolbar>      
         </AppBar>
    )

}
