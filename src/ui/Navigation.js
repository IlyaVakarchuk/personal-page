import React, { Component } from 'react';
import { Link } from 'react-router'

const Navigation = class Navigation extends Component {
	render() {
		return (
			<div id='navigation'>
				<ul>
					<li id="logo">vakarchuk</li>
					<li className="navigation-section"><Link to="/home">home</Link><div></div></li>
					<li className="navigation-section"><Link to="/about">about</Link><div></div></li>
					<li className="navigation-section"><Link to="/skills">skills</Link><div></div></li>
					<li className="navigation-section"><Link to="/projects">projects</Link><div></div></li>
					<li className="navigation-section"><Link to="/contact">contact</Link><div></div></li>
				</ul>	
			</div>
		)
	}
}

export default Navigation;