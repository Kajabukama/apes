import red from '@material-ui/core/colors/purple';

const styles = theme => ({
   margin: {
      margin: theme.spacing.unit,
   },
   iconHover: {
      margin: theme.spacing.unit * 2,
      '&:hover': {
         color: red[800],
      },
   },
});

export default styles;