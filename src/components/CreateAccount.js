import React, { Component } from "react";
import { Popup, Button, Header, Image, Modal } from "semantic-ui-react";
import SigninForm from "./forms/SigninForm";

class CreateAccount extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    const inlineStyle = {
      modal: {
        marginTop: "0px !important",
        marginLeft: "auto",
        marginRight: "auto"
      }
    };

    return (
      <React.Fragment>
        <Button onClick={this.show("blurring")}>Sing Up</Button>
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          style={inlineStyle.modal}
        >
          <Modal.Header>Create New Account</Modal.Header>

          <Modal.Content>
            {/* <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' /> */}
            <Modal.Description>
              <SigninForm />
            </Modal.Description>
          </Modal.Content>

          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Cancel
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Ceate Account"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CreateAccount;
