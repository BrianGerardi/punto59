import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function CardServicio(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { title, description, subheader, final } = props;

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <AddLocationIcon color='primary' style={{ fontSize: 40 }}></AddLocationIcon>
                }
                title={title}
                subheader={subheader}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {final}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}