import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar style={{backgroundColor:'#FFA01F'}} >
            <Toolbar>
                <div>
                    <Typography >
                        <Link style={{textDecoration:'none'}} to={'/'} >
                        <Button  style={{color:'white', fontSize:20 , fontWeight:'bolder'}} >Home</Button>
                        </Link>
                    </Typography>
                </div>
                <Box sx={{ display: { xs: 'none', sm: 'block', flexGrow:1, marginLeft:'50%' } }} >
                    <Typography variant='h3' >
                        <Link to={'/form'} style={{textDecoration:'none'}} >
                        <Button style={{color:'white', fontSize:20, fontWeight:'bolder'}} >Blog Form</Button>
                        </Link>
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar