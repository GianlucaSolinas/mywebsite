import React from 'react';
import { Grid, Flag, Segment, Icon, Popup } from 'semantic-ui-react';

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
				<Popup basic position='top' hoverable wide trigger={<Icon color='black' size='big' link name='phone' />}>
				    <Grid centered columns='equal'>
				      <Grid.Column>
				        <a href='tel:+393332081989'>
				        	<Flag name='it' />
				        </a>
				      </Grid.Column>
				      <Grid.Column>
				        <a href='tel:+447746220294'>
				        	<Flag name='gb' />
				        </a>
				      </Grid.Column>
				    </Grid>
				</Popup>
				<a href='https://drive.google.com/open?id=0B86BIgqIWPzOZ25helBkMzV1Szg' target='_blank' rel="noopener noreferrer">
				  	<Popup
				  		trigger= {<Icon color='black' size='big' link name='cloud download' />}
				  		content='Download my CV'
				  		position='top'
				  		on='hover'
				  		basic
				  		inverted
				  	/>
				</a>
			</div>
				
          </Segment>
  		)

    }
