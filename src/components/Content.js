import React, {Component} from 'react'
import {List, Divider, Icon} from 'semantic-ui-react'

import Subject from './Subject'

const subjects = [
  {
    'name': 'summary',
    'icon': 'home'
  }, {
    'name': 'skills',
    'icon': 'code'
  }, {
    'name': 'work',
    'icon': 'briefcase'
  }, {
    'name': 'education',
    'icon': 'student'
  }
]

export default class Content extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentSubject: this.props.currentSubject
    }

    this.changeSubject = this.changeSubject.bind(this)
    this.getSummary = this.getSummary.bind(this)
  }

  getSummary () {
    return subjects.map(subj => {
      return (
        <List.Item key={subj.name} as='i' active={this.state.currentSubject === subj.name} onClick={() => this.changeSubject(subj.name)}>
          <Icon name={subj.icon} link size='large' />
        </List.Item>
      )
    })
  }

  changeSubject (subject) {
    this.setState({currentSubject: subject})
  }

  render () {
    return (
      <div>
        <div style={{
          'textAlign': 'center'
        }}>
          <List link horizontal size='large' relaxed>
            {this.getSummary()}
          </List>
          <Divider fitted horizontal>
            {this.state.currentSubject}
          </Divider>
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
