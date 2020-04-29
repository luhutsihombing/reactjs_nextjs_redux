import React, {PureComponent} from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';

class ShopCarouselBanner extends PureComponent {
  render() {
    const carouselSetting = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div className="ps-shop-banner">
        <Slider {...carouselSetting} className="ps-carousel inside">
          <div className="item">
            <Link href="/shop">
              <img src="/static/img/slider/shop-default/1.jpg" alt="martfury" />
            </Link>
          </div>
          <div className="item">
            <Link href="/shop">
              <a>
                <img src="/static/img/slider/shop-default/2.jpg" alt="martfury" />
              </a>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ShopCarouselBanner;
