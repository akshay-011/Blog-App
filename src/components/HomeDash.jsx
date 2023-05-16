import {  Card, CardContent, Grid, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const URL = "https://jsonplaceholder.typicode.com/posts"

const HomeDash = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
            setData(response.data);
            setIsloading(false);
        })
        .catch((error) => {
            console.log("Error Occured : " + error);
        })
    },[])


    //Loading screen
    if(isLoading){
        return (
            <Loading />
        )
    }
  return (
    <div style={{ marginRight:'10%',margin:0, textAlign:'center' }} >
        <Typography variant='h2' style={{color: '#FFA01F', fontWeight:'bolder', textAlign:'center'}}  >Blogs</Typography>
        <br />
    <Grid  style={{  textAlign:'center', justifyContent:'center',  }} container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 15 }}  >
    {
        //Mapping starts
        data.map((blog) => {
            return (
                <Tooltip title={"Blog No: " + blog.id} placement='top' arrow key={blog.id} >
                <Grid item xs={2} sm={4} md={4} >
                    <Card sx={{ maxWidth: 345 }} style={{margin:10, border:' 2px solid #FFA01F ', borderRadius:'10px'}} >
                            <CardContent >
                                <Typography style={{fontSize:"17px",fontWeight:'bolder'}} >
                                    {blog.title}
                                </Typography> <hr />
                                <Typography variant="body2" color="text.secondary">  { blog.body } </Typography>
                            </CardContent>
                    </Card>
                </Grid>
                </Tooltip>
            )
        })
    }
   </Grid>
    </div>
  )
}

export default HomeDash