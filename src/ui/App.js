import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import MainPage from './MainPage';
import Navigation from './Navigation';
import Experience from './Experience';
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
					<Route path="experience" component={ Experience }/>  
					<Route path="skills" component={ Skills }/>        	
        </Route>
      </Router>
		)
	}
}