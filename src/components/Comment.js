import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function Comment(props) {
    const { classes, comment } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h6" component="h3">
                    {comment.user}                
                </Typography>
                <Typography component="p">
                    {comment.comment}                
                </Typography>
            </Paper>
        </div>
    );
}

Comment.propTypes = {
    classes: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);






