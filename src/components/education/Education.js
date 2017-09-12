import React, { Component } from 'react';

import { Container, Divider, Header, Icon } from 'semantic-ui-react';

export default function Education(){
	return (
		<div>
  <Container text textAlign='left'>
				<Header>
					Web & mobile development, <a href='http://www.artoocampus.it' target='_blank' rel="noopener noreferrer">ArToo Campus</a>
					<Header.Subheader>
						<Icon name='marker'/>Ancona, Italy
					</Header.Subheader>
					<Header.Subheader>
						<Icon name='calendar' />09/2015 - 12/2015
					</Header.Subheader>
				</Header>
				<p>
					Disruptive course on web and mobile development, teached by web professionals. </p>
					<p> <b>Topics:</b> HTML/CSS, Javascript and JQuery, PHP, SQL, Angular JS, Node.js, express, MongoDB, Agile Development, UX Design, Android and iOS development.
				</p>
			</Container>
			<Divider />
			<Container text textAlign='left'>
				<Header>
					Computer science diploma (high school), IIS A. Volta
					<Header.Subheader>
						<Icon name='marker'/>Lodi, Italy
					</Header.Subheader>
					<Header.Subheader>
						<Icon name='calendar' />2006 - 2011
					</Header.Subheader>
				</Header>
				<p>
					Not much to say...My best grades were in Programming.
				</p>
		</Container>
		</div>
	)
}
