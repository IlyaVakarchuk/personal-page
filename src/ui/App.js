import React, { Component, PropTypes } from 'react';
import MainPage from './MainPage';
import Navigation from './Navigation';

export default class App extends Component {
	render() {
		return (
			<div id="wrap">
				<Navigation />
				<MainPage />
			</div>
		)
	}
}