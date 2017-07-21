import React from 'react';
import { Progress, Icon } from 'semantic-ui-react';

export default function Skills(){
	return (
		<div>
			<div className='progress-container'>
				<div>
					<Progress percent={95} size='tiny' label='Javascript (ES6)' color='orange' />
				</div>
				<div>
					<Progress percent={95} size='tiny' label='HTML5/CSS3' color='grey' />
				</div>
				<div>
					<Progress percent={80} size='tiny' label='AngularJS (1.x)' color='red' />
				</div>
				<div>
					<Progress percent={60} size='tiny' label='React' color='blue' />
				</div>
			</div>
		</div>
	)
}
