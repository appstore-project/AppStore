import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import Modal from '@material-ui/core/Modal';
//import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import RTL from './RTL';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { Redirect } from 'react-router-dom';
//export default withRouter(MyComponent);

const theme = createMuiTheme({
    direction: 'rtl',
    typography: {
        useNextVariants: true,
        fontFamily: '"Tahoma", "Helvetica", "Arial", "sans-serif"',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    }
});

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.classes = props.classes;
        this.state = { errorText: '', loggedIn: false };
        this.loginDone = props.loginDone;
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ errorText: '' });

        let u = this.username.value;
        let p = this.password.value;

        if (u === 'admin' && p === 'admin') {
            localStorage.setItem('user', u /*JSON.stringify({ userName: 'reza' })*/);

            //console.log('redirecting');
            //this.props.history.push('/redirect');
            //this.setState({ loggedIn: true });
            this.loginDone();
        }
        else {
            this.setState({ errorText: 'شناسه یا رمز عبور اشتباه است' });
        }
    }

    // this.state.loggedIn ? <Redirect to='/app' />
    // :
    render() {
        return (
            <RTL>
                <MuiThemeProvider theme={theme}>
                    <main className={this.classes.main}>
                        <CssBaseline />
                        <Paper className={this.classes.paper}>
                            <Avatar className={this.classes.avatar}>
                                <LockIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                ورود به سیستم
                            </Typography>
                            <form className={this.classes.form} onSubmit={(event) => this.handleSubmit(event)}>

                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">شناسه</InputLabel>
                                    <Input
                                        ref={(x) => this.usernameCtrl = x}
                                        inputRef={(x) => this.username = x}
                                        defaultValue="admin"
                                        id="email" name="email" autoComplete="email" autoFocus />
                                </FormControl>

                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">رمز عبور</InputLabel>
                                    <Input
                                        ref={(x) => this.passwordCtrl = x}
                                        inputRef={(x) => this.password = x}
                                        defaultValue="admin"
                                        name="password" type="password" id="password" autoComplete="current-password" />
                                </FormControl>

                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="مرا بخاطر داشته باش!"
                                />
                                <Button
                                    //onClick={() => alert('aaaaa')}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={this.classes.submit}>
                                    ورود به سیستم
                                </Button>
                                <Typography style={{ color: 'red', direction: 'rtl', textAlign: 'right', fontSize: 13 }}
                                    component="h1" variant="h5">
                                    {this.state.errorText}
                                </Typography>
                            </form>
                        </Paper>
                    </main>
                </MuiThemeProvider>
            </RTL>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);


