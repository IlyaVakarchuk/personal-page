import React, { Component } from 'react';
import { Link } from 'react-router'

const SiteSections = class SiteSections extends Component {
	render () {
		return (
			<ul className='site-sections'>
				<li className="navigation-section"><Link to="/home">home</Link><div></div></li>
				<li className="navigation-section"><Link to="/experience">experience</Link><div></div></li>
				<li className="navigation-section"><Link to="/skills">skills</Link><div></div></li>
				<li className="navigation-section"><Link to="/projects">projects</Link><div></div></li>
				<li className="navigation-section"><Link to="/contact">contact</Link><div></div></li>
			</ul>
		)
	}	
}

const Navigation = class Navigation extends Component {
	render() {
		return (
			<div id='navigation'>
				<ul>
					<li id="logo">vakarchuk</li>	
					<SiteSections />				
				</ul>	
			</div>
		)
	}
}

export default Navigation;