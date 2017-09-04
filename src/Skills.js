import React from 'react';
import { Progress, Segment, Label, Container, Divider } from 'semantic-ui-react';

export default function Skills(){
	return (
		<div>
			<Container className='skills'>
			<Segment.Group horizontal>
				<Segment raised className='progress-container'>
					<Label ribbon color='red'>Languages</Label>
					<div className='padding'>
						<Progress percent={95} size='tiny' label='Javascript (ES6)' color='red' />
					</div>
					<div className='padding'>
						<Progress percent={95} size='tiny' label='HTML5/CSS3' color='red' />
					</div>
					<Divider />
					<Label ribbon color='teal'>Back end</Label>
					<div className='padding'>
						<Progress percent={75} size='tiny' label='Meteor.js' color='teal' />
					</div>
					<div className='padding'>
						<Progress percent={60} size='tiny' label='Node.js' color='teal' />
					</div>
				</Segment>
				<Segment raised className='progress-container'>
					<Label ribbon color='blue'>Front end</Label>
					<div className='padding'>
						<Progress percent={85} size='tiny' label='AngularJS (1.x)' color='blue' />
					</div>
					<div className='padding'>
						<Progress percent={85} size='tiny' label='Angular Material' color='blue' />
					</div>
					<div className='padding'>
						<Progress percent={65} size='tiny' label='React' color='blue' />
					</div>
					<div className='padding'>
						<Progress percent={80} size='tiny' label='Bootstrap' color='blue' />
					</div>
					<div className='padding'>
						<Progress percent={70} size='tiny' label='Semantic UI' color='blue' />
					</div>
				</Segment>
				<Segment raised className='progress-container'>
					<Label ribbon color='orange'>Other</Label>
					<div className='padding'>
						<Progress percent={90} size='tiny' label='Git (Github, BitBucket)' color='orange' />
					</div>
					<div className='padding'>
						<Progress percent={90} size='tiny' label='Agile development' color='orange' />
					</div>
					<div className='padding'>
						<Progress percent={70} size='tiny' label='Linux terminal' color='orange' />
					</div>
					<div className='padding'>
						<Progress percent={75} size='tiny' label='MongoDB' color='orange' />
					</div>
					<div className='padding'>
						<Progress percent={80} size='tiny' label='npm' color='orange' />
					</div>
					<div className='padding'>
						<Progress percent={60} size='tiny' label='Google Firebase' color='orange' />
					</div>
				</Segment>
			</Segment.Group>

			</Container>
		</div>
	)
}

