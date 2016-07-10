import React, { Component } from 'react';
import DarkLayer from './DarkLayer';

const MainPage = class MainPage extends Component {
	render() {
		return (
			<div id='home-page'>
				<DarkLayer />
				<div className='description'>
					<div className='lvl-01'>Full Stack Web Developer</div>
					<div className='lvl-02'>JavaScript (client-side / server-side)/ HTML / CSS </div>
				</div>
				<div className='title'>
					Ilya Vakarchuk
				</div>	
			</div>
		)
	}
}

export default MainPage;