import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.picz.in.th/images/2018/04/07/YYuao9.jpg',
    altText: 'ข้าวราดแกงกะหรี่',
    caption: 'Location: ร้านอาหารญี่ปุ่น Green Canteen'
  },
  {
    src: 'https://www.picz.in.th/images/2018/04/07/YYXhMg.jpg',
    altText: '',
    caption: ''
  },
  {
    src: "https://www.picz.in.th/images/2018/04/07/YYDGfW.jpg",
    altText: 'ข้าวขาหมู',
    caption: 'Location: ร้าน ป.3 ขาหมู โรงอาหารโต้รุ่ง'
  },
  {
    src: 'https://www.picz.in.th/images/2018/04/07/YYXVxQ.jpg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://www.picz.in.th/images/2018/04/07/YYXI49.jpg',
    altText: '',
    caption: ''
  }
];

export default class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

      onExiting() {
        this.animating = true;
      }
      onExited() {
        this.animating = false;
      }
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

    render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {

        return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
            </CarouselItem>
          );
        });

        return (
          <Carousel className="mt-4 mb-4"
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        );
      }
}
