import React, { Component, PropTypes } from 'react';

const Experience = class Experience extends Component {
	constructor() {
		super();

		this.experience = [{
			years : '2011 - 2015',
			stage : 'Bachelor of Information Technology',
			place : 'SibSUTIS'
		}, {
			years : '2014 - 2014',
			stage : 'QA - Engineer',
			place : 'PinPay Express'
		}, {
			years : '2015 - 2015',
			stage : 'Front-end Developer',
			place : 'AcademMedia'
		}, {
			years : '2016',
			stage : 'Web Developer',
			place : 'NoveoGroup'
		}]

	}

	render() {
		return (
			<div id='experience-page'>
				<div className='intro'>
					<div className='lvl-01'>my experience</div>
					<div className='lvl-02'>my education and work experience</div>
				</div>
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

export default Experience;