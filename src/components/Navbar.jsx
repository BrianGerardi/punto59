
import React from "react"
import { AppBar, Typography, Toolbar, makeStyles, IconButton, Button, } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
}))
const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu1" ClassName=
                        {classes.menuButton}></IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Punto 59
                </Typography>
                    <Button variant="text" color="secondary">
                        Menu 1
                </Button>
                    <Button variant="text" color="secondary">
                        Menu 2
                </Button>
                    <Button variant="text" color="secondary">
                        Menu 3
                </Button>
                    <Button variant="text" color="secondary">
                        Menu 4
                </Button>
                    <Button variant="text" color="secondary">
                        Menu 5
                </Button>
                </Toolbar>
            </AppBar>
           <div className={classes.offset}></div> 
        </>
    )
}
export default Navbar