import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Icon, Image, Flag } from 'semantic-ui-react';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div>
            <Image avatar size='tiny' src="https://www.gravatar.com/avatar/0f656dcf93a80d0afdcf63bd9f6624bc" />
            <Header as='h3'>Hello, I'm <Header size='large'>Gianluca Solinas</Header></Header>
        </div>
          <div>
            <a href='https://github.com/GianlucaSolinas' target='_blank'><Icon color='black' size='big' link name='github' /></a>
            <a href='https://www.linkedin.com/in/gianluca-solinas-078a80101' target='_blank'><Icon color='black' size='big' link name='linkedin' /></a>
            <a href='https://telegram.me/GianlucaSolinas' target='_blank'><Icon color='black' size='big' link name='telegram' /></a>
            <a href='https://facebook.com/gianluca.solinas.39' target='_blank'><Icon color='black' size='big' link name='facebook square' /></a>

            <a style={{color: '#1b1c1d'}} href='mailto:gianlucasolinas92@gmail.com' target='_blank'><Icon color='black' size='big' link name='mail outline' />gianlucasolinas92@gmail.com</a>

            <div>
              <Icon color='black' size='big' link name='phone' /> 
              <a style={{color: '#1b1c1d'}} href='tel:+393332081989' target='_blank'><Flag name='it' /> +39 333 2081989 </a>
              <a style={{color: '#1b1c1d'}} href='tel:+447746220294' target='_blank'><Flag name='gb' /> +44 7746220294</a>
            </div>
            
       
          </div>
      </div>
    );
  }
}

export default App;
