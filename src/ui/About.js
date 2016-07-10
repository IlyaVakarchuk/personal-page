import React, { Component, PropTypes } from 'react';

const About = class About extends Component {
	render() {
		return (
			<div id='about-page'>
				<div className='time-line'></div>
				<div className='education-experience'>
					<div className='experience-item'>
						<div className='title'>2011 - 2015</div>
						<div className='stage'>Bachelor of Inpormation Technology</div>
						<div className='place'>SibSUTIS</div>
					</div>
				</div>
				<div className='work-experience'>
					<div className='experience-item'>
						<div className='title'>2014 - 2014</div>
						<div className='stage'>QA - Engineer</div>
						<div className='place'>PinPay Express</div>
					</div>
				</div>
				<div className='work-experience'>
					<div className='experience-item'>
						<div className='title'>2015 - 2015</div>
						<div className='stage'>Web Developer</div>
						<div className='place'>AcademMedia</div>
					</div>
				</div>
				<div className='work-experience'>
					<div className='experience-item'>
						<div className='title'>2016</div>
						<div className='stage'>Web Developer</div>
						<div className='place'>NoveoGroup</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;