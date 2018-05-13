import React, { Component } from 'react';
import {
  Button,
  Segment,
  Form,
  Message,
  Accordion,
  Label,
  Icon
} from 'semantic-ui-react';
import Login from './pages/Login';

class Orderfood extends Component {
  componentWillMount() {
    this.setState({ fetchedData: null });
    const fetchedData = {
      result: true,
      status_code: 200,
      status_message: 'succeed',
      data: [
        {
          user_owner: 'ayuth1',
          user_grabber: 'boombi1',
          description: 'รายละเอียดของการซื้อ1',
          menu: 'กระเพราไข่ดาว',
          addrees: 'sample address 1',
          status: 'pending', // pending, approved, reject
          price: 100,
          tip: 10,
          created_time: '2018-05-11 16:53:37.711',
          updated_time: '2018-05-11 16:53:37.711'
        },
        {
          user_owner: 'ayuth2',
          user_grabber: 'boombi2',
          description: 'รายละเอียดของการซื้อ2',
          menu: 'ข้าวผัดกถ้ง',
          addrees: 'sample address 2',
          status: 'approved', // pending, approved, reject
          price: 100,
          tip: 10,
          created_time: '2018-05-11 16:53:37.711',
          updated_time: '2018-05-11 16:53:37.711'
        }
      ]
    };
    this.setState({ fetchedData });
  }

  render() {
    const inlineStyle = {
      modal: {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20%',
        paddingRight: '20%'
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

    const panels = [];

    return (
      <div style={inlineStyle.modal}>
        <Segment secondary color="olive">
          <h1> Order Food Here </h1>

          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Username"
                placeholder="Your username..."
              />
              <Form.Select
                fluid
                label="Food Zone"
                options={foodzone}
                placeholder="Select Food Zone"
              />
              <Form.Select
                fluid
                label="Bistro Name"
                options={Bistro}
                placeholder="Select Bistro"
              />
            </Form.Group>

            <Form.Input fluid label="Menu" placeholder="Menu..." />
            <Form.TextArea label="Description" placeholder="Description..." />
            <Form.TextArea
              label="Address"
              placeholder="Enter your addrees to receive.."
            />

            <Button positive floated="right">
              Oder Now
            </Button>
          </Form>
          <br />
          <br />
        </Segment>

        <Segment secondary color="orange">
          <h1> Show Order From Database </h1>
          {/* Repeat */}
          <div>
            {this.state.fetchedData
              ? this.state.fetchedData.data.map(item => {
                  panels.push({
                    title: 'Show Detail',
                    content: {
                      content: (
                        <div>
                          <p>User Address : {item.address}</p>
                          <p>Description : {item.description}</p>
                          <p>Price : {item.price}</p>
                          <p>Tips : {item.tip}</p>
                          <p>Order time : {item.created_time}</p>
                        </div>
                      ),
                      key: item.user_grabber
                    }
                  });
                  return (
                    <Message color="yellow">
                      <i class="close icon" />
                      <Message.Header>
                        User order : {item.user_owner}
                        <br />
                        Grabber : {item.user_grabber}
                        <br />
                        Menu : {item.menu}
                      </Message.Header>
                      <Accordion panels={panels} />
                    </Message>
                  );
                })
              : 'You have no orders.'}
          </div>
        </Segment>
        <br />
        <br />
      </div>
    );
  }
}

export default Orderfood;
