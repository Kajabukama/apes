import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const Theme = createMuiTheme({
   typography:{
      useNextVariants: true,
      fontFamily: 'Graphik-Regular',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 500,
      fontWeightMedium: 700,
   },
	palette: {
		primary: blueGrey,
		secondary: blueGrey,
	},
	status: {
		danger: 'orange',
   },
   
});

export default Theme;