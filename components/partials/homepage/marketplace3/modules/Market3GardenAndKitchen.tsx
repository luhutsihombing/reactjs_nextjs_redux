import React, {PureComponent} from 'react';
import Link from 'next/link';
import {Tabs} from 'antd';
import Slider from 'react-slick';
import Product from '../../../../elements/products/Product';
import ProductHorizontal from '../../../../elements/products/ProductHorizontal';

const {TabPane} = Tabs;

class Market3ConsumerElectronics extends PureComponent<{data: any[]}> {
  constructor(props) {
    super(props);
  }

  render() {
    const carouselSetting = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const {data} = this.props;
    return (
      <div className="ps-block--product-box">
        <div className="ps-block__header">
          <h3>
            <i className="icon-shirt" /> Home, Garden & Kitchen
          </h3>
          <ul>
            <li>
              <Link href="/shop">
                <a>Furniture</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Home Decor</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Cookware</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Utensil & Gadget</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Garden Tools</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="ps-block__content">
          <div className="ps-block__left">
            <Slider {...carouselSetting}>
              <div className="item">
                <Link href="/shop">
                  <a>
                    <img src="/static/img/promotions/home-5/clothing-1.jpg" alt="martfury" />
                  </a>
                </Link>
              </div>
              <div className="item">
                <Link href="/shop">
                  <a>
                    <img src="/static/img/promotions/home-5/clothing-2.jpg" alt="martfury" />
                  </a>
                </Link>
              </div>
            </Slider>
            <div className="ps-block__products">
              <Tabs defaultActiveKey="1">
                <TabPane tab="New Arrivals" key="1">
                  <div className="row">
                    {data.map((product, index) => {
                      return index < 4 ? (
                        <div className="col-md-3 col-sm-4 col-6" key={product.id}>
                          <Product product={product} />
                        </div>
                      ) : (
                        ''
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane tab="Best Seller" key="2">
                  <div className="row">
                    {data.map((product, index) => {
                      return index > 1 && index < 6 ? (
                        <div className="col-md-3 col-sm-4 col-6" key={product.id}>
                          <Product product={product} />
                        </div>
                      ) : (
                        ''
                      );
                    })}
                  </div>
                </TabPane>
                <TabPane tab="Sale" key="3">
                  <div className="row">
                    {data.map((product, index) => {
                      return index > 0 && index < 5 ? (
                        <div className="col-md-3 col-sm-4 col-6" key={product.id}>
                          <Product product={product} />
                        </div>
                      ) : (
                        ''
                      );
                    })}
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="ps-block__right">
            <figure>
              <figcaption>Recommended For You</figcaption>
              {data.map((product, index) => {
                return index < 5 ? <ProductHorizontal product={product} key={product.id} /> : '';
              })}
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Market3ConsumerElectronics;
