import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Progress} from 'antd';
import Link from 'next/link';
import CountDown from '../CountDown';
import Rating from '../Rating';
import ThumbnailDealHot from '../detail/modules/thumbnail/ThumbnailDealHot';

class ProductDealHot extends PureComponent<{
  key?: string;
  product: {
    id: string;
    sale: boolean;
    salePrice: number;
    price: number;
    thumbnail: string;
    vendor: string;
    title: string;
    ratingCount: number;
    badge: {
      type: string;
      value: string;
    }[];
  };
  currency?: {
    symbol: string;
  };
}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {product, currency} = this.props;
    return (
      <div className="ps-product--detail ps-product--hot-deal">
        <div className="ps-product__header">
          <ThumbnailDealHot product={product as any} />
          <div className="ps-product__info">
            <h5>Investor</h5>
            <h3 className="ps-product__name">
              <Link href="/product/[pid]" as={`/product/${product.id}`}>
                {product.title}
              </Link>
            </h3>

            <div className="ps-product__meta">
              {product.sale ? (
                <h4 className="ps-product__price sale">
                  <del className="mr-2">
                    {currency ? currency.symbol : '$'}
                    {product.salePrice}
                  </del>
                  {currency ? currency.symbol : '$'}
                  {product.price}
                </h4>
              ) : (
                <h4 className="ps-product__price">
                  {currency ? currency.symbol : '$'}
                  {product.price}
                </h4>
              )}
              <div className="ps-product__rating">
                <Rating />
                <span>(1 review)</span>
              </div>
              <div className="ps-product__specification">
                <p>
                  Status:
                  <strong className="in-stock">In Stock</strong>
                </p>
              </div>
            </div>
            <div className="ps-product__expires">
              <p>Expires In</p>
              <CountDown timeTillDate="12 31 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
            </div>
            <div className="ps-product__processs-bar">
              <Progress percent={60} showInfo={false} />
              <p>
                <strong>4/79</strong> Sold
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.setting;
};

export default connect(mapStateToProps)(ProductDealHot);
