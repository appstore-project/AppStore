import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Typography, Link } from '@material-ui/core';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const styles = {
  card: {
    maxWidth: 345,
    //minWidth:  '15%',
    margin: 10,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function AppCard(props) {
  const { classes, app } = props;

  return (
    <Card className={classes.card} onClick={() => props.history.push('/appinfo/' + app.appCode)}
      style={{ minWidth: props.wide ? '30%' : '15%', maxWidth: props.wide ? '30%' : '15%' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          className={classes.media}
          height='140'
          image={require('../apps/' + app.appCode + '/icon.png')}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography style={{ fontFamily: 'Iran Sans' }} variant='h6'>{app.name}</Typography>
          {app.price == 0 ?
            <Typography style={{ fontFamily: 'Iran Sans' }} variant='subtitle2' color='textSecondary'>رایگان</Typography>
            : <Typography style={{ fontFamily: 'Iran Sans' }} variant='subtitle2' color='textSecondary'>{app.price} تومان</Typography>
          }
          <div style={{ direction: 'ltr', textAlign: 'right' }}>
            <Rater total={5} rating={app.rate} interactive={false} />
          </div>

        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size='small' color='primary'>
          مشاهده
        </Button>
      </CardActions> */}
    </Card>
  );
}

AppCard.propTypes = {
  classes: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppCard);
