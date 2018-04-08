import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { CLIENT_RENEG_LIMIT } from 'tls';

const Cardbox = (props) => {
  return (
    <div>
      <Card>
        <CardImg className="img-fluid img-thumbnail" top width="100%" src={props.img} alt="Card image cap" style={{ width: '100%', height: '360px' }}/>
        <CardBody>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardSubtitle>{props.cardSubtitle}</CardSubtitle>
          <CardText>{props.cardText}</CardText>
          {/* <Button color="primary">Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardbox;
