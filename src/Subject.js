import React, { Component } from 'react';

import Skills from './Skills';
import Work from './Work';
import Education from './Education';
import Summary from './Summary';

export default class Subject extends Component{

	render(){
		let subj;
		switch (this.props.children) {
			case 'skills':
				subj = <Skills />;
				break;
			case 'education':
				subj = <Education />;
				break;
			case 'work':
				subj = <Work />;
				break;
			default:
				subj = <Summary />;
				break;
		}

		return (
			<div className='subject'>
				{subj}
			</div>
		)
	}
}