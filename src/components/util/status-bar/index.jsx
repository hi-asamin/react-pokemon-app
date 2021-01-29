import React from 'react';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import color from '../../../config/color.json'

const StyleWithThemeProps = (props) => {
  return withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: color[props.backgroundColor],
    },
  }),{withTheme: true})(LinearProgress);
};

export const StatusBar = (props) => {
  const { status, type, param } = props;
  const BorderLinearProgress = StyleWithThemeProps({ backgroundColor: type });
  const { t } = useTranslation();
  const transrateKey = `status.${status}`;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>{t(transrateKey)}</Grid>
        <Grid item xs={9}>
          <BorderLinearProgress variant="determinate" value={param / 1.9} />
        </Grid>
      </Grid>
    </>
  );
}
