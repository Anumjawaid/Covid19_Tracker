import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup'
import cx from 'classnames'
import one from '../../UI/1.JPG'
import two from '../../UI/2.JPG'
import three from '../../UI/3.JPG'

// Ex6 function
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // console.log(data,"Cards")
    if (!confirmed) {
        return 'Loading.......' //if the data is not being load
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent className={styles.head}>
                    <img src={one} className={styles.icon}/>
                        <Typography className={styles.head1} gutterBottom>Infected</Typography>
                        <Typography className={styles.i} variant='h5'>
                            <Countup  start={0} end={confirmed.value} duration={2.5} separator=","></Countup></Typography>
                        <Typography  >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Covid_19</Typography>


                    </CardContent>
                </Grid>
                {/*  */}
                <Grid item component={Card}xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent className={styles.head}>
                    <img src={three} className={styles.icon}/>
                        <Typography className={styles.head1} gutterBottom>Deaths</Typography>
                        <Typography className={styles.d} variant='h5'> <Countup start={0} end={deaths.value} duration={2.5} separator=","></Countup></Typography>
                        <Typography  >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Covid_19</Typography>

                    </CardContent>
                </Grid>
                {/*  */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recoverd)} >
                    <CardContent className={styles.head}>
                    <img src={two} className={styles.icon}/>

                        <Typography className={styles.head1} gutterBottom>Recovered</Typography>
                        <Typography variant='h5' className={styles.r}> <Countup start={0} end={recovered.value} duration={2.5} separator=","></Countup></Typography>
                        <Typography  >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Covid_19</Typography>

                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )

}
export default Cards;