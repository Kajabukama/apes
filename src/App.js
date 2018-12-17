import React, { Component } from 'react';
import './App.css';
import Routes from './router';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Routes />
				<Footer/>
			</React.Fragment>
		);
	}
}

export default App;
