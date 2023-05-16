import HomeIcon from '@mui/icons-material/Home';
import {   Button, Divider, Drawer, List, ListItem, ListItemButton, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';

const SideNavBar = (props) => {
  return (
    <div>
        <Drawer
            anchor='left'
            open={ props.open }
            onClose={ props.onclick }
            PaperProps={{
                sx:{
                    backgroundColor:"#1F1D2C"
                }
            }}
        >
            <List style={{ minWidth:'15vw', width:'20vw', margin:0,padding:0 }} >
                <ListItem >
                    <Tooltip title="Close Menu" placement='right'>
                        <Button style={{ padding:10, color:'white' }} variant='text' onClick={ props.onclick } >
                            <CloseIcon  />
                        </Button>
                    </Tooltip>
                </ListItem>
                <Link style={{textDecoration:'none', color:'white'}} to={'/'} >
                    <ListItem>
                            <ListItemButton onClick={ props.onclick }  style={{color:'white', fontSize:20 , fontWeight:'bolder', width:'100%'}} > 
                                <HomeIcon style={{marginRight:10}} /> Home                    
                            </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                <Link style={{textDecoration:'none', color:'white'}} to={'/form'} >
                    <ListItem>
                            <ListItemButton onClick={ props.onclick } style={{color:'white', fontSize:20 , fontWeight:'bolder', width:'100%'}} > 
                                <CreateIcon style={{marginRight:10}} /> Form                    
                            </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    </div>
  )
}

export default SideNavBar