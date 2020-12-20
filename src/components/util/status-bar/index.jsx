import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import color from '../../../config/color.json'

const useStyles = makeStyles({
  bar: props => ({
    backgroundColor: color[props.backgroundColor],
    color: 'white',
    margin: '0 2px',
    width: '100%',
  })
});

export const StatusBar = (props) => {
  const { type, param } = props;
  const classes = useStyles({ backgroundColor: type });

  return (
    <>
      <LinearProgress variant="determinate" size={100} value={param} className={classes.chip} />
    </>
  );
}
