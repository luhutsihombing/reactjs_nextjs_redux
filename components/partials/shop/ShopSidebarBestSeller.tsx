import React, {Component} from 'react';
import Slider from 'react-slick';

import Product from '../../elements/products/Product';
import {products} from '../../../public/static/data/product.json';

class ShopSidebarBestSeller extends Component {
  slider: Slider;

  constructor(props) {
    super(props);
  }

  handleCarouselPrev = e => {
    e.preventDefault();
    this.slider.slickPrev();
  };

  handleCarouselNext = e => {
    e.preventDefault();
    this.slider.slickNext();
  };

  render() {
    const carouselSetting = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    const sampleProducts = products;
    return (
      <div className="ps-block--shop-features">
        <div className="ps-block__header">
          <h3>Best Sale Items</h3>
          <div className="ps-block__navigation">
            <a className="ps-carousel__prev" href="#bestsale" onClick={this.handleCarouselPrev}>
              <i className="icon-chevron-left" />
            </a>
            <a className="ps-carousel__next" href="#bestsale" onClick={this.handleCarouselNext}>
              <i className="icon-chevron-right" />
            </a>
          </div>
        </div>
        <div className="ps-block__content">
          <Slider
            {...carouselSetting}
            ref={slider => {
              this.slider = slider;
            }}>
            {sampleProducts &&
              sampleProducts.length > 0 &&
              (sampleProducts as any).map((product, index) => {
                return index > 6 && index < 15 ? (
                  <Product product={product} key={product.id} />
                ) : (
                  ''
                );
              })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default ShopSidebarBestSeller;
