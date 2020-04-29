import React, {PureComponent} from 'react';
import Slider from 'react-slick';

import Product from '../../elements/products/Product';

class CategoriesRecommendItems extends PureComponent<{products: any[]}> {
  constructor(props) {
    super(props);
  }

  render() {
    const carouselSetting = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
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
    const {products} = this.props;
    return (
      <div className="ps-product-list ps-product-list--2">
        <div className="ps-section__header">
          <h3>Recommended Items</h3>
        </div>
        <div className="ps-section__content">
          <Slider {...carouselSetting}>
            {products &&
              products.length > 0 &&
              (products as any).map((product, index) => {
                return index > 10 && index < 24 ? (
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

export default CategoriesRecommendItems;
