import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import color from '../../../config/color.json'

const useStyles = makeStyles({
  chip: props => ({
    backgroundColor: color[props.backgroundColor],
    margin: '0 2px',
    width: '60px',
  })
});

export const TypeChip = (props) => {
  const type = props.type;
  const classes = useStyles({ backgroundColor: type });
  return (
    <>
      <Chip variant="outlined" size="medium" label={type} className={classes.chip} />
    </>
  )
}