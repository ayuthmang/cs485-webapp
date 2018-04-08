import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import StarRatingComponent from 'react-star-rating-component'

const Cardbox = (props) => {

  return (
    <div>
      <Card>
        <CardImg className="img-fluid img-thumbnail" top width="100%" src={props.img} alt="Card image cap" style={{ width: '100%', height: '360px' }} />
        <CardBody>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardSubtitle>{props.cardSubtitle}</CardSubtitle>
          <CardText>{props.cardText}</CardText>

          <div>
            <div style={{ fontSize: 24 }}>
              <StarRatingComponent
                name=""
                value={props.starValue}
                editing={false}
              // onStarClick={props.onStarClick}
              />
            </div>
            {/* <Button color="primary">Button</Button> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardbox;
