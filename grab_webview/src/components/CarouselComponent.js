import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel autoPlay interval={1000} infiniteLoop showThumbs={false}>
        <div>
          <img src="https://www.picz.in.th/images/2018/04/07/YYXI49.jpg" />
          <p className="legend">Legend</p>
        </div>
        <div>
          <img src="https://www.picz.in.th/images/2018/04/07/YYXVxQ.jpg" />
          <p className="legend">Legend</p>
        </div>
        <div>
          <img src="https://www.picz.in.th/images/2018/04/07/YYXhMg.jpg" />
          <p className="legend">Legend</p>
        </div>
      </Carousel>
    );
  }
}

export default CarouselComponent;
