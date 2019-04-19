import { Ctrl as appsCtrl } from '../Controllers/AppsController';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AppCard from './AppCard';
import { Typography, Link, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: 20
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class AppRow extends Component {

  constructor(props) {
    super(props);

    this.state = { appslist: [] };
  }

  async componentDidMount() {

    let res = await appsCtrl.getAppsOfGroup();
    this.setState({ appslist: res });
  }

  render() {
    const { classes } = this.props;

    let i = 0;

    return (
      <div className={classes.root}>
        <div style={{ width: '100%' }}>
          <Typography align='right' variant='h6'>{this.props.title}</Typography>
          {/* <Link to='/apps/'>بیشتر</Link> */}
          <Button size='small' color='primary'>
            بیشتر
        </Button>
          {this.state.appslist == [] ? (<span>منتظر بمانید...</span>)
            : <div>
              <GridList className={classes.gridList} cols={2}>
                {
                  this.state.appslist.map(ap => <AppCard history={this.props.history}  key={i++} app={ap} wide={this.props.wide} />)
                }
                {
                  this.state.appslist.map(ap => <AppCard history={this.props.history}  key={i++} app={ap} wide={this.props.wide} />)
                }
              </GridList>
            </div>
          }
        </div>
      </div>
    );
  }
}

AppRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppRow);
