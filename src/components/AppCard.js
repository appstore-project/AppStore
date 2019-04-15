import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  const { classes } = props;
  console.log(props);

  return (
    <Card className={classes.card} style={{ minWidth: props.wide ? '30%' : '15%' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          className={classes.media}
          height='140'
          image={require('../apps/' + props.appCode + '/icon.png')}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            خروس جنگی
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          مشاهده
        </Button>
      </CardActions>
    </Card>
  );
}

AppCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppCard);
