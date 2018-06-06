import React, { Component } from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Segment} from 'semantic-ui-react'

class MyProfile extends Component {
    render(){
        const inlineStyle = {
            modal : {
              marginTop: '0px !important',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: '20%',
              paddingRight: '20%',
              paddingTop: '5%'
            }
          };
    
    return(
        <div style={inlineStyle.modal}>
        <Segment secondary color ='olive'>

            <h1> My Profile </h1>
            <Grid>
                <Grid.Column width={6}> 
                    <Image wrapped size='medium' src='https://www.picz.in.th/images/2018/05/09/z0RXlW.jpg' /> <br/><br/>
                    <Button color = 'grey' icon > <Icon name='write' /> Edit Profile</Button> <br/><br/>
                    <Button icon color='orange'> <Icon name='list layout' /> History Orders</Button>
                </Grid.Column>

            <Grid.Column width={10}> 
                    <h2>Padchaya Srisingchai</h2>
                    <p>Username : Toey09764 </p>
                    <p>Email : toey09764@gmail.com </p>
                    <p>Address : 271 / 8 12120 New York , USA </p>
            </Grid.Column>
            </Grid>
           
        </Segment>
         </div>
      )
} 
}

export default MyProfile;