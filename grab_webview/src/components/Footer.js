// import _ from 'lodash'
import React, { Component } from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>

        <Segment
          inverted
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
          vertical
        >
          <Container textAlign="center">
            <Grid columns={1} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as="h4" content="Footer Header" />
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <List horizontal inverted divided link>
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
