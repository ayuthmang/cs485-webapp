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
import Swal from 'sweetalert2';

class Orderfood extends Component {
  componentWillMount() {
    this.setState({ fetchedData: null });
    // TODO: fetching data from logged user
    this.setState({
      inputValues: { user_owner: 'ayuth', user_grabber: 'boombi' }
    });
    this.fetchDataAndSetState();
  }

  fetchDataAndSetState = () => {
    fetch('http://localhost:4000/api/orders', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ fetchedData: responseJson });
        // return responseJson.data;
      })
      .catch(error => {
        console.error(error);
      });
  };

  // For all input field
  handleInputChanged = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      inputValues: { ...this.state.inputValues, [name]: value }
    });
    console.log(this.state);
  };

  handleShowOrderDetailOnClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleButtonOrderClick = () => {
    fetch('http://localhost:4000/api/order', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(this.state.inputValues)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.status) {
          Swal('Done', 'บันทึกข้อมูลสำเร็จ', 'success');
          this.fetchDataAndSetState();
        } else {
          Swal(
            'Error',
            'บันทึกข้อมูลล้มเหลว: ' + result.status_message,
            'error'
          );
        }
      })
      .catch(err => console.log(err));
  };

  handleButtonRemoveOrderClick = orderId => {
    fetch('http://localhost:4000/api/order', {
      method: 'DELETE',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ _id: orderId })
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.status) {
          Swal('Done', 'ลบข้อมูลสำเร็จ', 'success');
        } else {
          Swal('Error', 'ลบข้อมูลล้มเหลว: ' + result.status_message, 'error');
        }
        this.fetchDataAndSetState();
      })
      .catch(err => console.log(err));
  };

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
    const { activeIndex } = this.state;
    return (
      <div style={inlineStyle.modal}>
        <Segment secondary color="olive">
          <h1> Order Food Here </h1>

          <Form>
            {/* <Form.Input
              fluid
              label="Username"
              placeholder="Enter your username here"
              name="username"
              onChange={this.handleInputChanged}
            /> */}
            <Form.Input
              fluid
              label="Title"
              placeholder="Enter your title here"
              name="title"
              onChange={this.handleInputChanged}
            />

            <Form.TextArea
              name="description"
              label="Description"
              placeholder="Enter your description..."
              onChange={this.handleInputChanged}
            />
            <Form.TextArea
              name="address"
              label="Address"
              placeholder="Enter your addrees to receive.."
              onChange={this.handleInputChanged}
            />

            <Form.Group widths="equal">
              <Form.Input
                labelPosition="right"
                type="text"
                placeholder="Enter price here."
                label="Price"
                name="price"
                onChange={this.handleInputChanged}
              >
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
              </Form.Input>

              <Form.Input
                labelPosition="right"
                type="text"
                placeholder="Enter tip here"
                label="Tip"
                name="tip"
                onChange={this.handleInputChanged}
              >
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
              </Form.Input>
            </Form.Group>

            <Button
              positive
              floated="right"
              onClick={this.handleButtonOrderClick}
            >
              Oder Now
            </Button>
          </Form>
          <br />
          <br />
        </Segment>

        <Segment secondary color="orange">
          <h1> Show Order From Database </h1>
          <div>
            {this.state.fetchedData
              ? this.state.fetchedData.data.map((item, count) => {
                  return (
                    <Message color="yellow">
                      <i
                        class="close icon"
                        onClick={this.handleButtonRemoveOrderClick.bind(
                          this,
                          item._id
                        )}
                      />
                      <Message.Header>
                        {console.log(item)}
                        User order : {item.user_owner}
                        <br />
                        Grabberssss : {item.user_grabber}
                        <br />
                        Menu : {item.menu}
                      </Message.Header>
                      <Accordion fluid>
                        <Accordion.Title
                          active={activeIndex === count}
                          index={count}
                          onClick={this.handleShowOrderDetailOnClick}
                        >
                          {' '}
                          <Icon name="dropdown" />Show Detail
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === count}>
                          <div>
                            <p>User Address : {item.address}</p>
                            <p>Title : {item.title}</p>
                            <p>Description : {item.description}</p>
                            <p>Price : {item.price}</p>
                            <p>Tips : {item.tip}</p>
                            <p>Order time : {item.created_time}</p>
                          </div>
                        </Accordion.Content>
                      </Accordion>
                    </Message>
                  );
                })
              : 'Nothing in your order(s).'}
          </div>
        </Segment>
        <br />
        <br />
      </div>
    );
  }
}

export default Orderfood;
