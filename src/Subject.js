import React, { Component } from 'react';

import Skills from './Skills';

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
			case 'edu':
				subj = <p>la strada</p>;
				break;
			case 'work':
				subj = <p>nullafacente</p>;
				break;
			default:
				subj = <p>sobbravo</p>;
				break;
		}

		return (
			<div>
				{subj}
			</div>
		)
	}
}