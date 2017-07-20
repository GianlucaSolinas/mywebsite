import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import Subject from './Subject';

export default class Content extends Component{
	constructor(props){
		super(props);

		this.state = {
			currentSubject: this.props.currentSubject
		}

		this.changeSubject = this.changeSubject.bind(this);
	}

	changeSubject(subject){
		this.setState({
			currentSubject: subject
		});
	}

	render(){
		return (
			<div>
			<List link horizontal size='big' relaxed>
				<List.Item as='a' active={this.state.currentSubject === 'summary'} onClick={() => this.changeSubject('summary')}> Summary </List.Item>
				<List.Item as='a' active={this.state.currentSubject === 'skills'} onClick={() => this.changeSubject('skills')}> Skills </List.Item>
				<List.Item as='a' active={this.state.currentSubject === 'work'} onClick={() => this.changeSubject('work')}> Work experience </List.Item>
				<List.Item as='a' active={this.state.currentSubject === 'edu'} onClick={() => this.changeSubject('edu')}> Education </List.Item>
			</List>
			<Subject>
				{this.state.currentSubject}
			</Subject>
			</div>
		)
	}
}

Content.defaultProps = {
	currentSubject: 'summary'
}