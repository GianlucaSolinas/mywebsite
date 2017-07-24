import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import './Footer';

export default function Footer() {

  	return(
          <Segment className='footer'>
	          <div className='icon-container'>
	            <a href='https://github.com/GianlucaSolinas' target='_blank' rel="noopener noreferrer">
	            	<Icon color='black' size='big' link name='github' />
	            </a>
	            <a href='https://www.linkedin.com/in/gianluca-solinas-078a80101' target='_blank' rel="noopener noreferrer">
	            	<Icon color='black' size='big' link name='linkedin' />
	            </a>
	            <a href='https://telegram.me/GianlucaSolinas' target='_blank' rel="noopener noreferrer">
	            	<Icon color='black' size='big' link name='telegram' />
	            </a>
	            <a href='https://facebook.com/gianluca.solinas.39' target='_blank' rel="noopener noreferrer">
	            	<Icon color='black' size='big' link name='facebook square' />
	            </a>
	            <a href='mailto:gianlucasolinas92@gmail.com'>
	            	<Icon color='black' size='big' link name='mail outline' />
	            </a>
	            <a href='tel:+447746220294'>
		            <Icon color='black' size='big' link name='phone' />
	            </a>
	          </div>

				
          </Segment>
  		)

    }
