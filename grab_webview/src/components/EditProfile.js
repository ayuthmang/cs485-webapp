import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Grid,
  Icon,
  Segment,
  Form
} from "semantic-ui-react";

class EditProfile extends Component {
  render() {
    const inlineStyle = {
      modal: {
        marginTop: "0px !important",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "5%",
        paddingButtom: "10px",
        marginButtom: "50px"
      },
      button: {
        float: "right",
        alignItems: "center",
        justifyContent: "center"
      }
    };
    const options = [
      { key: "m", text: "Male", value: "male" },
      { key: "f", text: "Female", value: "female" },
      { key: "o", text: "Other", value: "other" }
    ];

    return (
      <div style={inlineStyle.modal}>
        <Segment secondary color="olive">
          <h1> Update My Profile </h1>
          <Grid>
            <Grid.Column width={6}>
              <Image
                wrapped
                size="medium"
                bordered
                src="https://www.picz.in.th/images/2018/05/09/z0RXlW.jpg"
              />{" "}
              <br />
              <br />
              <Button color="orange" icon>
                {" "}
                <Icon name="image" /> update new picture
              </Button>{" "}
              <br />
              <br />
            </Grid.Column>

            <Grid.Column width={10}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input fluid label="First name" placeholder="Padchaya" />
                  <Form.Input
                    fluid
                    label="Last name"
                    placeholder="Srisingchai"
                  />
                  <Form.Select
                    fluid
                    label="Gender"
                    options={options}
                    placeholder="Gender"
                  />
                </Form.Group>

                <Form.Input fluid label="Username" placeholder="Toey09764" />
                <Form.Input
                  fluid
                  label="E-mail"
                  placeholder="Toey09764@gmail.com"
                />
                <Form.TextArea
                  label="Address"
                  placeholder="222 111 3/5 NewYork, USA"
                />

                <Form.Field>
                  <label htmlFor="password">Password </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="You own Password"
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="password">Re-Password </label>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    placeholder="Reenter Password"
                  />
                </Form.Field>
                <Button.Group style={inlineStyle.button}>
                  <Button color="grey">Cancel</Button>
                  <Button.Or />
                  <Button positive>Save</Button>
                </Button.Group>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default EditProfile;
