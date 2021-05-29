import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#F5F5F5',
    color: 'black',
  },
  types: {
    margin: '0 0 0 auto',
  },
}));

export const CardTitle = (props) => {
  const classes = useStyles();
  const { pokemonNumber, types } = props;

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            {pokemonNumber}
          </Typography>
          <div className={classes.types}>
            {types.map((type) => {
              return type;
            })}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
