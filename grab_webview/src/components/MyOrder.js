import React, { Component } from 'react';
import { Button, Segment, Form, Message, Sidebar } from 'semantic-ui-react';

class Orderfood extends Component {
  componentDidMount() {
    // this.state.userOrder = [];
    const profile = JSON.parse(localStorage.getItem('profile'));
    if (profile) {
      fetch(`http://localhost:4000/api/order/${profile.username}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            userOrder: responseJson.data
          });
          console.log(responseJson);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      userOrder: [
        {
          name: 'Toey',
          description:
            'Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu',
          number: 1
        },
        {
          name: 'Bi',
          description:
            'Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu',
          number: 2
        },
        {
          name: 'Bay',
          description:
            'Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu',
          number: 3
        },
        {
          name: 'Mint',
          description:
            'Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu',
          number: 4
        },
        {
          name: 'GGEZ',
          description:
            'Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu',
          number: 5
        },

        {
          name: 'KAK',
          description:
            'Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu',
          number: 6
        }
      ]
    };
  }

  have_received(i) {
    const newState = this.state.userOrder.slice();
    if (newState.indexOf(i) > -1) {
      newState.splice(newState.indexOf(i), 1);
      this.setState({ userOrder: newState });
    }
  }

  render() {
    const inlineStyle = {
      modal: {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20%',
        paddingRight: '20%',
        paddingTop: '5%'
      },
      button: {
        float: 'right',
        alignItems: 'center',
        justifyContent: 'center'
      }
    };
    const foodzone = [
      { key: 'g', text: 'Green Canteen', value: 'Green Canteen' },
      { key: 'i', text: 'Interzone', value: 'Interzone' },
      { key: 't', text: 'Torrung', value: 'Torrung' }
    ];
    const Bistro = [
      { key: 'res1', text: 'Restuaraunt1', value: 'Restuaraunt1' },
      { key: 'res2', text: 'Restuaraunt2', value: 'Restuaraunt2' },
      { key: 'res3', text: 'Restuaraunt3', value: 'Restuaraunt3' }
    ];
    const SimpleUser = [
      { key: 'user1', text: 'sample user from DB', value: 'DB user' }
    ];
    const order = [1, 2, 3, 4, 5];

    return (
      <div style={inlineStyle.modal}>
        <Segment secondary color="orange">
          <h1> My Order </h1>
          {/* Repeat */}

          <div>
            {this.state.userOrder.map(item => {
              return (
                <Message color="yellow">
                  <Message.Header>
                    Order Id : {item._id} <br />
                    User Owner : {item.user_owner} <br />
                    User Grabber : {item.user_grabber} <br />
                    Title : {item.title} <br />
                    Description : {item.description} <br />
                    Address : {item.address} <br />
                    Price : {item.price} <br />
                    Tips : {item.tip} <br />
                  </Message.Header>
                  <Message.Content>
                    <br />
                  </Message.Content>
                  <Button
                    color="green"
                    onClick={this.have_received.bind(this, item)}
                  >
                    Received
                  </Button>
                </Message>
              );
            })}
          </div>
        </Segment>
        <br />
        <br />
      </div>
    );
  }
}

export default Orderfood;
