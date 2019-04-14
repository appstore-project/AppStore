import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// const styles = theme => ({
//     root: {
//         ...theme.mixins.gutters(),
//         paddingTop: theme.spacing.unit * 2,
//         paddingBottom: theme.spacing.unit * 2,
//     },
// });

export default class Row extends Component {

    styles = {
        paper: {
            direction: 'rtl',
            width: 200,
            height: 150,
            padding: 10,
            margin: 10,
            float: 'right'
        }
    };

    // constructor(props) {
    //     super(props);

    //     this.classes = props.classes;
    // }

    render() {

        return <div>
            <Paper elevation={1} style={this.styles.paper}>
                <Typography variant="h5" component="h3">
                    {this.props.name}
                </Typography>
                <Typography component="p">
                    {this.props.author}
                </Typography>
            </Paper>
        </div>
            ;
    }
}