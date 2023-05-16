import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'

const BlogForm = () => {
  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center' }} >
        <Card sx={{ width: 450 }} style={{margin:10, border:' 2px solid #FFA01F ', borderRadius:'10px'}} >
            <Typography variant='h3' style={{color: '#FFA01F', fontWeight:'bolder', fontStyle:'italic'}}  >New Blog</Typography>
            <br />
            <hr />
            <CardContent >
                <Typography   variant="body2" color="text.secondary"> 
                    <TextField size='small' label="Author" />
                </Typography>
                <br />
                <Typography style={{fontSize:"17px",fontWeight:'bolder'}} >
                    <TextField size='small'  label="Blog Name" />
                </Typography> <br />
                <Typography variant="body2" color="text.secondary"> 
                    <TextField size='big' multiline maxRows={3} minRows={3} label="Description" />
                </Typography>
                <br /><br />
                <Button variant='contained' style={{backgroundColor: '#FFA01F'}} ><b>Add Blog</b></Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default BlogForm