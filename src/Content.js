import React, { Component } from 'react';
import { List, Divider, Icon } from 'semantic-ui-react';

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
				<div style={{'textAlign': 'center'}}>
					<List link horizontal size='large' relaxed>
						<List.Item as='i' active={this.state.currentSubject === 'summary'} onClick={() => this.changeSubject('summary')}> <Icon name='home' link size='large' /> </List.Item>
						<List.Item as='i' active={this.state.currentSubject === 'skills'} onClick={() => this.changeSubject('skills')}> <Icon name='code' link size='large' /> </List.Item>
						<List.Item as='i' active={this.state.currentSubject === 'work'} onClick={() => this.changeSubject('work')}> <Icon name='briefcase' link size='large' /> </List.Item>
						<List.Item as='i' active={this.state.currentSubject === 'education'} onClick={() => this.changeSubject('education')}> <Icon name='student' link size='large' /> </List.Item>
					</List>
					<Divider fitted horizontal> {this.state.currentSubject} </Divider>
				</div>
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