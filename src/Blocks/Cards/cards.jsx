import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup'
import cx from 'classnames'

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
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <Countup start={0} end={confirmed.value} duration={2.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Lorem ipssum dolor sit, amet consectetur adipisicing elit. Laborum magni repellendus assumenda adipisci! Magnam explicabo aliquid ad quibusdam? Doloremque aspernatur autem officia veniam at distinctio placeat neque laboriosam consectetur! Magnam?</Typography>

                    </CardContent>
                </Grid>
                {/*  */}
                <Grid item component={Card}xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'> <Countup start={0} end={deaths.value} duration={2.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Covid_19</Typography>

                    </CardContent>
                </Grid>
                {/*  */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recoverd)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5'> <Countup start={0} end={recovered.value} duration={2.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Covid_19</Typography>

                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )

}
export default Cards;