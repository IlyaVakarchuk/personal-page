import React, { Component, PropTypes } from 'react';

const About = class About extends Component {
	constructor() {
		super();

		this.experience = [{
			years : '2011 - 2015',
			stage : 'Bachelor of Inpormation Technology',
			place : 'SibSUTIS'
		}, {
			years : '2014 - 2014',
			stage : 'QA - Enginee',
			place : 'PinPay Express'
		}, {
			years : '2015 - 2015',
			stage : 'Front-end Develop',
			place : 'AcademMedia'
		}, {
			years : '2016',
			stage : 'Web Developer',
			place : 'NoveoGroup'
		}]
	}

	render() {
		return (
			<div id='about-page'>
				<div className='container'>
					<div className='time-line'></div>
					{this.experience.map(function(value, index) {
						return <div key={index} className='experience'>
							<div className='experience-item'>
								<div className='title'>{value.years}</div>
								<div className='stage'>{value.stage}</div>
								<div className='place'>{value.place}</div>
							</div>
						</div>
					})}
				</div>
			</div>
		)
	}
}

export default About;