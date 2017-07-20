import React, { Component } from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import './App.css';

import Footer from './Footer';
import Content from './Content';

function Myself(){
  return(
      <div className='myself'>
        <Image avatar size='tiny' src="https://www.gravatar.com/avatar/0f656dcf93a80d0afdcf63bd9f6624bc" />
        <Header size='large' textAlign='center'>
          <Header.Subheader>
            Hello, I'm 
          </Header.Subheader>
          Gianluca Solinas
        </Header>
      </div>
    )
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className='header'>
          <Myself />
        </div>
        <Content />

        <Footer />
      </div>
    );
  }
}

export default App;
