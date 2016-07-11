import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import MainPage from './MainPage';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';

const AppLayout = class AppLayout extends Component {
	render() {
		return (
			<div id="wrap">
				<Navigation />
				{ this.props.children }
			</div>
		)
	}
}

export default class App extends Component {
		
	onCheck(nextState, replace) {
		if (nextState.location.pathname == '/') {
			replace('/home');
		}
	}

	render() {
		return (
			<Router history={browserHistory}>
        <Route path="/" component={ AppLayout } onEnter={ this.onCheck } >
					<Route path="home" component={ MainPage }/>    
					<Route path="about" component={ About }/>  
					<Route path="skills" component={ Skills }/>        	
        </Route>
      </Router>
		)
	}
}