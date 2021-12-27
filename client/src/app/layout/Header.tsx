import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./styles.css"


const midLinks = [

   {title: 'catalog', path: '/catalog'},
   {title: 'about', path: '/about'},
   {title: 'contact', path: '/contact'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]



export default function Header() {
    return (
         <AppBar position='static' style={{backgroundColor: "white"}} sx={{mb: 8}}>
             <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                <Typography variant='h6' component={NavLink}
                to='/'
                sx={{textDecoration: 'none'}}>
                <div className="header_logo">
                <img className="logo" src="/icons/logo.png" alt=""/>
                </div>
                </Typography>
                <List sx={{display: 'flex', ml: 12}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                           component={NavLink}
                           to={path}
                           key={path}
                           sx={{color: 'black', typography: 'h6', fontWeight: 'bold',
                           '&:hover': {
                               color: 'grey.500'
                           },
                           '&.active': {
                               color: 'grey.400'
                           }
                        }}
                        >
                           {title.toUpperCase()}
                       </ListItem>
                    ))}
                </List>


               <Box display='flex' alignItems='center'>
               <IconButton size='large' sx={{color:'black'}}>
                    <Badge badgeContent={1} color='primary'>
                         <ShoppingCart />
                    </Badge>
               </IconButton>
                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem
                           component={NavLink}
                           to={path}
                           key={path}
                           sx={{color: 'black', typography: 'h6', fontWeight: 'bold',
                           '&:hover': {
                            color: 'grey.500'
                          },
                        '&.active': {
                            color: 'grey.400'
                            }  
                        }}
                        >
                           {title.toUpperCase()}
                       </ListItem>
                    ))}
                </List>
             </Box>

             </Toolbar>      
         </AppBar>
    )

}
