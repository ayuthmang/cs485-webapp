import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel autoPlay interval={1000} infiniteLoop showThumbs={false}>
        <div>
          <img src="https://www.picz.in.th/images/2018/04/07/YYXI49.jpg" />
        </div>
        <div>
          <img src="https://www.picz.in.th/images/2018/04/07/YYXVxQ.jpg" />
        </div>
        <div>
          <img src="https://www.picz.in.th/images/2018/06/09/4zT5kZ.jpg" />
        </div>
        <div>
          <img src="https://www.picz.in.th/images/2018/06/09/4z38jQ.jpg" />
        </div>
        <div>
          <img src="https://www.picz.in.th/images/2018/06/09/4z3SeV.jpg" />
        </div>
      </Carousel>
    );
  }
}

export default CarouselComponent;
