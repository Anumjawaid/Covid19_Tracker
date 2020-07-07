import React from 'react'
import {Card,CardContent,Grid,Typography} from '@material-ui/core';
import styles from './Cards.module.css'

// Ex6 function
const Cards = (props) => {
    console.log(props,"Cards")
    return(
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item component={Card}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant='h5'>Real data</Typography>
                       <Typography color="textSecondary" >Real date</Typography>
                       <Typography variant='body2'> Covid_19</Typography>

                   </CardContent>
                   </Grid>
                   {/*  */}
                   <Grid item component={Card}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                       <Typography variant='h5'>Real data</Typography>
                       <Typography color="textSecondary" >Real date</Typography>
                       <Typography variant='body2'> Covid_19</Typography>

                   </CardContent>
                   </Grid>
                   {/*  */}
                   <Grid item component={Card}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                       <Typography variant='h5'>Real data</Typography>
                       <Typography color="textSecondary" >Real date</Typography>
                       <Typography variant='body2'> Covid_19</Typography>

                   </CardContent>
                   </Grid>
           </Grid>

       </div>
    )

}
export default Cards;