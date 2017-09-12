import React, { Component } from 'react';

import Skills from './skills/Skills';
import Work from './work/Work';
import Education from './education/Education';
import Summary from './summary/Summary';

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
