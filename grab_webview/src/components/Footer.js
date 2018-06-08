// import _ from 'lodash'
import React, { Component } from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
  Image,
  Button
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
          style={{ margin: '3em 0em 0em', padding: '2em 0em' }}
          vertical
        >
          <Container textAlign="center">
            <Grid columns={1} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as="h4" content="GrabKaow" />
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
            <br />
            <br />
            <Button circular color="facebook" icon="facebook" />{' '}
            <Button circular color="twitter" icon="twitter" />{' '}
            <Button circular color="linkedin" icon="linkedin" />{' '}
            <Button circular color="google plus" icon="google plus" />
          </Container>
        </Segment>
        <Grid style={{ background: '#0BAC5C', height: '50px' }}>
          {/* <Image
            style={{ width: '100%' }}
            src="https://www.img.in.th/images/e9310e99718d99361bc5dc212f99285f.jpg"
          /> */}
        </Grid>
      </div>
    );
  }
}
