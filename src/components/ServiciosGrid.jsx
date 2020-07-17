import React from 'react';
import { Grid } from '@material-ui/core';
import CardUbicacion from './CardUbicacion'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
}
)

function  ServiciosGrid ()  {
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.gridContainer} justify='center'>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardUbicacion></CardUbicacion>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardUbicacion></CardUbicacion>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardUbicacion></CardUbicacion>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardUbicacion></CardUbicacion>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardUbicacion></CardUbicacion>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardUbicacion></CardUbicacion>
            </Grid>
             <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardUbicacion></CardUbicacion>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CardUbicacion></CardUbicacion>
            </Grid>
        </Grid>
    )
}

export default ServiciosGrid