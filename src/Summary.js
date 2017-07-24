import React, { Component } from 'react';
import { List, Container, Icon } from 'semantic-ui-react';

export default function Summary(){
	return (
		<div>
			<Container text textAlign='center'>
				<div>
					<Icon name='marker' />Currently living in Edinburgh, UK
				</div>
				<List horizontal size='huge'>
					<List.Item>
						<Icon name='heart' /> Javascript Lover
					</List.Item>
					<List.Item>
						<Icon name='cogs' /> Fast-learner
					</List.Item>
					<List.Item>
						<Icon name='terminal' /> Eager to learn new technologies
					</List.Item>
				</List>
			</Container>
		</div>
	)
}