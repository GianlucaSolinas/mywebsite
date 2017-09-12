import React, { Component } from 'react';
import { List, Container, Icon } from 'semantic-ui-react';

export default function Summary(){
	return (
		<div>
			<Container text textAlign='center'>
				<List horizontal size='large'>
					<List.Item>
						<Icon name='birthday' /> 15/10/1992
					</List.Item>
					<List.Item>
						<Icon name='talk' /> Italian, English
					</List.Item>
					<List.Item>
						<Icon name='marker' /> Edinburgh, UK
					</List.Item>					
				</List>
				<List vertical relaxed size='huge'>
					<List.Item>
						<Icon name='heart' /> Javascript Lover
					</List.Item>
					<List.Item>
						<Icon name='lightning' /> Fast-learner
					</List.Item>
					<List.Item>
						<Icon name='rocket' /> Startups enthusiast
					</List.Item>					
					<List.Item>
						<Icon name='terminal' /> Eager to learn new technologies
					</List.Item>
				</List>
			</Container>
		</div>
	)
}