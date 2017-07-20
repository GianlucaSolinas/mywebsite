import React from 'react';
import { Progress, Icon } from 'semantic-ui-react';

export default function Skills(){
	return (
		<div>
			<div>
				<Progress percent={90} size='tiny' label='Javascript' />
				<Progress percent={90} size='tiny' label='HTML5/CSS3' />
				<Progress percent={75} size='tiny' label='AngularJS (1.x)' color='red' />
				<Progress percent={50} size='tiny' label='React' color='blue' />
			</div>
		</div>
	)
}
