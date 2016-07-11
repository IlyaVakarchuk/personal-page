import React, { Component } from 'react';

const Skills = class Skills extends Component {
	constructor() {
		super();
		this.tech = {'javascript' : '67%', 'html/css' : '85%', 'mongodb' : '71%', 'svg' : '33%'};
		this.patterns = {'flux' : '81%', 'mvc' : '86%', 'responsive' : '89%', 'module patterns' : '87%'};
	}

	render() {
		let tech = this.tech;
		let patterns = this.patterns;
		return (
			<div id='skills-page'>
				<div className='intro'><div>my skills</div></div>
				<div className='container'>
					<div id='table'>
						<div className='technology'>
							<div className='table'>
								<div className='title'>technology</div>
								<ul className='skills-list'>
									{Object.keys(tech).map(function(value, index) {
			              return <li key={index}><span className='tech-title'>{value}</span><div style={{ width : tech[value]}} className='progress-bar'><span>{tech[value]}</span><div className='color-fill'></div></div></li>;
			            })}
								</ul>
							</div>
						</div>

						<div className='patterns'>
							<div className='table'>
								<div className='title'>patterns</div>
								<ul className='skills-list'>
									{Object.keys(patterns).map(function(value, index) {
			              return <li key={index}><span className='tech-title'>{value}</span><div style={{ width : patterns[value]}} className='progress-bar'><span>{patterns[value]}</span><div className='color-fill'></div></div></li>;
			            })}
								</ul>
							</div>
						</div>
					</div>

					<div id='list'>
					<object type="image/svg+xml" data="img/skills-cloud.svg" class="logo">
					  <img src="img/skills-cloud.svg" />
					</object>
					</div>
				</div>
			</div>
		)
	}
}

export default Skills;