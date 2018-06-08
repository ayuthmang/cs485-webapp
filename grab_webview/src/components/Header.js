import _ from 'lodash';
import logo from '../images/logo.png';
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '0em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
};

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em'
};

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10
};

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease'
};

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px'
};

export default class StickyLayout extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    menuFixed: false,
    overlayFixed: false
  };

  handleOverlayRef = c => {
    const { overlayRect } = this.state;

    if (!overlayRect)
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width')
      });
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state;

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Switch>
              <Container text>
                <Menu.Item as={Link} to="/">
                  <Image size="mini" src={logo} />
                </Menu.Item>
                <Menu.Item header as={Link} to="/">
                  GrabKaow
                </Menu.Item>

                <Menu.Menu position="right">
                  {/* <Dropdown text="Dropdown" pointing className="link item">
                    <Dropdown.Menu>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Header Item</Dropdown.Header>
                      <Dropdown.Item>
                        <i className="dropdown icon" />
                        <span className="text">Submenu</span>
                        <Dropdown.Menu>
                          <Dropdown.Item>List Item</Dropdown.Item>
                          <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <Menu.Item as={Link} to="/myorders" component>
                    My Orders
                  </Menu.Item>
                  <Menu.Item as={Link} to="/about" component>
                    About us
                  </Menu.Item>
                  <Menu.Item as={Link} to="/login" component>
                    Login
                  </Menu.Item>
                </Menu.Menu>
              </Container>
            </Switch>
          </Menu>
        </Visibility>

        {/* <Container text>
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />
          <div
            ref={this.handleOverlayRef}
            style={overlayFixed ? fixedOverlayStyle : overlayStyle}
          />
        </Container> */}
      </div>
    );
  }
}
