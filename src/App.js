import React, { Component } from 'react';

import './normalize.css';
import './App.css';
import './theme.css';
import Routes from './router';
import Footer from './components/common/Footer/Footer';
import Navbar from './components/common/Navbar/Navbar';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar/>
				<Routes />
				<Footer/>
			</React.Fragment>
		);
	}
}

export default App;
