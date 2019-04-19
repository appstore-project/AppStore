import { Ctrl as appsCtrl } from '../Controllers/AppsController';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import AppImages from './AppImages';
import Comment from './Comment';
import AddComment from './AddComment';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class AppInfo extends Component {

  constructor(props) {
    super(props);

    this.state = { app: null };
  }

  async componentDidMount() {

    let res = await appsCtrl.getAppInfo(this.props.appCode);

    if (res)
      if (res.length > 0)
        this.setState({ app: res[0] });
  }

  render() {
    const { classes } = this.props;
    const { app } = this.state;

    return (
      this.state.app == null ? (<span>منتظر بمانید...</span>)
        :
        (<div className={classes.root}>
          <Grid container spacing={24}>

            <Grid container >
              <Grid item xs={4}>
                <Grid container >
                  <Grid item xs={6}>
                    <img src={require('../apps/' + app.appCode + '/icon.png')} style={{ height: 150 }} />
                  </Grid>
                  <Grid item xs={6} >
                    <Typography variant='h5' component='p'>{app.name}</Typography>
                    <Typography component='p' variant='subtitle2' color='textSecondary'>{app.developer}</Typography>
                    {app.price == 0 ?
                      <Typography component='p' variant='subtitle2' color='textSecondary'>رایگان</Typography>
                      : <Typography component='p' variant='subtitle2' color='textSecondary'>{app.price} تومان</Typography>
                    }
                    <div style={{ direction: 'ltr', textAlign: 'right' }}>
                      <Rater total={5} rating={app.rate} interactive={false} onRate={() => alert('rate done')} />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr><td>دسته</td><td>{app.category}</td></tr>
                    <tr><td>نصب‌های فعال </td><td>{app.inatallCount}+</td></tr>
                    <tr><td>حجم </td><td>{app.size_mb} مگابایت</td></tr>
                    <tr><td>نسخه</td><td>{app.version}</td></tr>
                    <tr><td>شامد</td><td>{app.shamed}</td></tr>
                  </tbody>
                </table>
              </Grid>
              <Grid item xs={4} >
                <Button variant="contained" color="primary" style={{ width: 200, float: 'left' }}>
                  {
                    app.price == 0 ? 'رایگان' : app.price + ' تومان'
                  }
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12} >
              <AppImages appCode={app.appCode} className={classes.gridList} cols={2} />
            </Grid>

            <Grid container >
              <Grid item xs={6} style={{ padding: 15 }}>
                <Typography variant='h5'>توضیحات:</Typography>
              </Grid>

              <Grid container item xs={6}>
                <Grid item xs={12} style={{ padding: 15 }}>
                  <Typography variant='h6'>نظرشما:</Typography>
                  <AddComment></AddComment>
                </Grid>
                <Grid item xs={12} style={{ padding: 15 }}>
                  <Typography variant='h5'>نظرات:</Typography>
                  {
                    app.comments ?
                      app.comments.map((comment, ind) =>
                        <Comment key={ind} comment={comment} />
                        //console.log('appinfo:',comment)
                      )
                      :
                      null
                  }
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </div>)
    );
  }
}

AppInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppInfo);
