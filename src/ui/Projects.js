import React, { Component } from 'react';

const Projects = class Projects extends Component {
  render() {
    return (
      <div id='projects-page'>
        <div className='intro'><div>my projects</div></div>
        <div className='container'>
          <img src='img/in-process.png' />
          <span> Page in process </span>
        </div>
      </div>
    )
  }
}

export default Projects;