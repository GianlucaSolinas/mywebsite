import React, { Component } from 'react';

import Skills from './Skills';
import Work from './Work';


export default class Subject extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let subj;
		switch (this.props.children) {
			case 'skills':
				subj = <Skills />;
				break;
			case 'education':
				subj = <p>la strada</p>;
				break;
			case 'work':
				subj = <Work />;
				break;
			default:
				subj = <p>Fast-learner web application developer, open to learn new web development tools. I’m looking for a young company that uses modern technologies (I like the startup world). I’m a Javascript lover. </p>;
				break;
		}

		return (
			<div className='subject'>
				{subj}
			</div>
		)
	}
}