

import React, {useState}  from "react"
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
 const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
return (

   <React.Fragment>
      
      <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
          <List>
                {
                    rightLinks.map(({title, path}) => (
                                   
                        <ListItemButton onClick={()=> setOpenDrawer(false)} key={path}>
                        <ListItemIcon>
                        <ListItemText>{title.toUpperCase()}</ListItemText>
                         </ListItemIcon>      
                         </ListItemButton>
                         
                    ))

                }
          </List>
      </Drawer>
          <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
                 <MenuIcon sx={{color: 'black'}}/>
          </IconButton>
   </React.Fragment>


)}


export default DrawerComp;
