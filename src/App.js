import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './normalize.css';
import './App.css';
import './theme.css';
import Routes from './router';
import Footer from './components/common/Footer/Footer';
import Theme from './material';


class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={ Theme }>
				<CssBaseline/>
				<Routes />
				<Footer/>
		 	</MuiThemeProvider>
		);
	}
}

export default App;
