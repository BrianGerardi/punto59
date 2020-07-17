import React from 'react';
import { Grid } from '@material-ui/core';
import CardServicio from './cardServicio';
import { makeStyles } from '@material-ui/core/styles';
import textoGrid from './contenidoServicios';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
}
);

function ServiciosGrid() {
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.gridContainer} justify='center'>
            {textoGrid.map((dato, index) =>
                <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <CardServicio title={dato.title} description={dato.description} subheader={dato.subheader} final={dato.final}></CardServicio>
                </Grid>
            )}
        </Grid>
    );
}

export default ServiciosGrid;