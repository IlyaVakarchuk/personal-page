import React, { Component } from 'react';
import { Link } from 'react-router'

const SiteSections = class SiteSections extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		var classValue = '';
		if (this.props.showList) {
			classValue ='site-sections ' + this.props.navigationAction;
		} else {
			classValue ='site-sections ' + this.props.navigationAction;		
		}
		return (
			 <ul className={classValue}> 
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
	constructor() {
		super();

		this.state = {
			sectionList : false,
			navigationAction : ''
		}

		this.onShowList = this.onShowList.bind(this);
		this.onCloseList = this.onCloseList.bind(this);
	}

	onShowList () {
		this.setState({sectionList : true, navigationAction : 'show' });
	}

	onCloseList () {
		this.setState({sectionList : false, navigationAction : 'hide' });
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.reload) {
			this.setState({sectionList : false, navigationAction : 'hide' });
		}
	}

	render() {
		return (
			<div id='navigation'>
				<ul>
					<li id="logo">vakarchuk</li>	
					<SiteSections navigationAction={ this.state.navigationAction } showList={this.state.sectionList}/>
					<div id='navigation-menu'>
						{ this.state.sectionList ? <i className='fa fa-times' aria-hidden='true' onClick={ this.onCloseList }></i> : 
						 <i className='fa fa-bars' aria-hidden='true' onClick={ this.onShowList }></i> }
					</div>		
				</ul>	
			</div>
		)
	}
}

export default Navigation;