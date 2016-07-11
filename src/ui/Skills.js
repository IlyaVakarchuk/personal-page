import React, { Component } from 'react';

const Skills = class Skills extends Component {
	constructor() {
		super();
		this.tech = {'javascript' : '67%', 'html/css' : '85%'};
	}

	render() {
		let tech = this.tech;
		return (
			<div id='skills-page'>
				<div className='languages'>
					<div className='container'>
						<div className='title'>Skils</div>
						<ul className='skills-list'>
							{Object.keys(tech).map(function(value, index) {
	              return <li className={'langitem ' + value} key={index}><span className='tech-title'>{value}</span><div style={{ width : tech[value]}} className='progress-bar'><span>{tech[value]}</span><div className='color-fill'></div></div></li>;
	            })}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Skills;