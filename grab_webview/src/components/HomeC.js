import React, { Component } from "react";
import { Popup, Button, Header, Image, Modal } from "semantic-ui-react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "./CarouselComponent";
import Orderfood from "./Orderfood";
import FoodGridContainer from "./FoodGridContainer";
import Food2GridContainer from "./Food2GridContainer";

class HomeC extends Component {
  render() {
    return (
      <div>
        <CarouselComponent />
        <FoodGridContainer />
        <Food2GridContainer />
        <Orderfood />
      </div>
    );
  }
}

export default HomeC;
