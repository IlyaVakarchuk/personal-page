import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import MainPage from './MainPage';
import Navigation from './Navigation';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import { Scrollbars } from 'react-custom-scrollbars';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

const AppLayout = class AppLayout extends Component {
	render() {
		return (
			<div id="wrap">
				<Navigation reload={true}/>
				<ReactCSSTransitionGroup 
						transitionName='change-section' 
						component='div' 
						transitionEnterTimeout={1500} 
						transitionLeaveTimeout={300}>
          { 
         		React.cloneElement(this.props.children, {
      				key: this.props.location.pathname
    				})
         	}
        </ReactCSSTransitionGroup>
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
			<Router history={ browserHistory }>
        <Route path="/" component={ AppLayout } onEnter={ this.onCheck } >
					<Route path="home" component={ MainPage }/>    
					<Route path="experience" component={ Experience }/>  
					<Route path="skills" component={ Skills }/>
					<Route path="projects" component={ Projects }/>     
					<Route path="contact" component={ Contact }/>     	
        </Route>
      </Router>
		)
	}
}