import React from 'react'
import { Progress, Segment, Label, Container } from 'semantic-ui-react'
import { skills } from './skills.json'

export default function Skills () {
	return (
		<div>
			<Container className='skills'>
				<Segment.Group horizontal>
					{getSkills()}
				</Segment.Group>
			</Container>
		</div>
	)
}

let getSkills = function () {
	return skills.map((skill, index) => {
		return (
			<Segment key={index} raised className='progress-container'>
				<Label ribbon color={skill.color}>{skill.name}</Label>
				{getTopics(skill)}
			</Segment>
		)
	})
}

let getTopics = function (skill) {
	return skill.topics.map(topic => {
		return (
			<div className='padding' key={topic.name}>
				<Progress percent={topic.percent} size='tiny' label={topic.name} color={skill.color} />
			</div>
		)
	})
}
