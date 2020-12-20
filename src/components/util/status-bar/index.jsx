import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import color from '../../../config/color.json'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: props => ({
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  }),
  bar: props => ({
    borderRadius: 5,
    backgroundColor: color[props.backgroundColor],
  }),
}))(LinearProgress);

// const useStyles = makeStyles({
//   root: {
//     height: 10,
//     borderRadius: 5,
//   },
//   colorPrimary: props => ({
//     backgroundColor: color[props.backgroundColor],
//   }),
//   bar: {
//     borderRadius: 5,
//     backgroundColor: '#1a90ff',
//   },
// });

export const StatusBar = (props) => {
  const { type, param } = props;
  // const classes = useStyles({ backgroundColor: type });

  return (
    <>
      <BorderLinearProgress variant="determinate" value={param} />
    </>
  );
}
