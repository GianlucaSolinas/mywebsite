import React from 'react'
import { Container, Divider, List, Header, Icon } from 'semantic-ui-react'
import {work} from './work.json'

export default function Work () {
  return (
    <div>
      {getWork()}
    </div>
  )
}

let getWork = function () {
  return work.map((item, index) => {
    return (
      <div key={index}>
        <Container text textAlign='center'>
          <Header>
            {item.role},
            <a href={item.companyLink} target='_blank' rel='noopener noreferrer'>{item.company}</a>
            <Header.Subheader>
              <Icon name='marker' />{item.where}
            </Header.Subheader>
            <Header.Subheader>
              <Icon name='calendar' />{item.when}
            </Header.Subheader>
          </Header>
          <p>
            {item.description}
          </p>
          <List relaxed size='small'>
            {getPortfolio(item.portfolio)}
          </List>
        </Container>
        {index === work.length - 1
          ? <br />
          : <Divider /> }
      </div>
    )
  })
}

let getPortfolio = function (portfolio) {
  if (!portfolio) {
    return false
  }
  return portfolio.map((item, index) => {
    return (
      <List.Item key={index}>
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          <Icon name='external' link /> {item.text}
        </a>
      </List.Item>
    )
  })
}
