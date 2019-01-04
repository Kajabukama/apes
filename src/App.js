import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import './theme.css';
import Routes from './router';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Routes />
				<Footer/>
			</React.Fragment>
		);
	}
}

export default App;
