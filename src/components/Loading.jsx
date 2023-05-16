import { Card, CardContent, Grid, Skeleton } from '@mui/material'
import React from 'react'

var arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8]

const Loading = () => {
  return (
    <div>
      <Skeleton height={50} />
        <Grid  style={{  textAlign:'center', justifyContent:'center',  }} container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 15 }}  >
          {
            arr.map((e) => {
              return (
                <Grid item xs={2} sm={4} md={4} >
                    <Card sx={{ maxWidth: 345 }} style={{margin:10, border:' 2px solid #FFA01F ', borderRadius:'10px'}} >
                            <CardContent >
                                <Skeleton animation={false} height={20} />
                                <hr />
                                <Skeleton animation='waves' height={150} />
                            </CardContent>
                    </Card>
                </Grid>
              )
            })
          }
        </Grid>
    </div>
  )
}

export default Loading