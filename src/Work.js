import React from 'react';
import { Container, Divider, List, Header, Icon } from 'semantic-ui-react';

export default function Work(){
	return (
		<div>
			<Container text>
				<Header>
					Frontend developer, <a href='http://www.ad2014.it' target='_blank'>AD2014</a>
					<Header.Subheader>
						<Icon name='marker'/>Remote
					</Header.Subheader>
					<Header.Subheader>
						<Icon name='calendar' />10/2016 - 02/2017
					</Header.Subheader>	
				</Header>
				<p>
					Developed and improve UI using modern web frameworks as AngularJS and Bootstrap. We interfaced to backend(NodeJS) using APIs. MongoDB database.
				</p>
				<p> 
					Let.Life
					<a href='http://let.life/' target='_blank'><Icon name='external' link /></a>
				</p>
			</Container>
			<Divider />
			<Container text>
				<Header>
					Junior fullstack developer, <a href='http://www.weboxstudio.com/' target='_blank'>Webox Studio</a>
					<Header.Subheader>
						<Icon name='marker'/>Ancona, Italy
					</Header.Subheader>
					<Header.Subheader>
						<Icon name='calendar' />01/2016 - 07/2016
					</Header.Subheader>	
				</Header>
				<p>
					Created several web applications, using MeteorJS to build them from stratch. AngularJS mixed with Angular Material for UI components. 
				</p>
				<List relaxed size='small'>
					<List.Item> 
						ArToo Campus - web and development course
						<a href='http://www.artoocampus.it/' target='_blank'><Icon name='external' link /></a>
					</List.Item>
					<List.Item> 
						B2Merger - B2B for trading companies
						<a href='http://www.b2merger.com/' target='_blank'><Icon name='external' link /></a>
					</List.Item>
					<List.Item> 
						Engaging Project - dashboard and tools of European Project
						<a href='http://app.engaging-project.eu/login/  ' target='_blank'><Icon name='external' link /></a>
					</List.Item>
				</List>

			</Container>
		</div>
	)
}
