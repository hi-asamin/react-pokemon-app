import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import Chip from '@material-ui/core/Chip';

import color from '../../../config/color.json'

const useStyles = makeStyles({
  chip: props => ({
    backgroundColor: color[props.backgroundColor],
    color: 'white',
    margin: '0 2px',
    width: '70px',
  })
});

export const TypeChip = (props) => {
  const type = props.type;
  const { t } = useTranslation();
  const classes = useStyles({ backgroundColor: type });
  const transrateKey = `type.${type}`;
  return (
    <>
      <Chip variant="outlined" size="medium" label={t(transrateKey)} className={classes.chip} />
    </>
  )
}