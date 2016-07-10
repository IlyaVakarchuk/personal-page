import React, { Component } from 'react';

const Navigation = class Navigation extends Component {
	render() {
		return (
			<div id='navigation'>
				<ul>
					<li id="logo">vakarchuk</li>
					<li className="navigation-section">home<div></div></li>
					<li className="navigation-section">about<div></div></li>
					<li className="navigation-section">experience<div></div></li>
					<li className="navigation-section">projects<div></div></li>
					<li className="navigation-section">contact<div></div></li>
				</ul>	
			</div>
		)
	}
}

export default Navigation;