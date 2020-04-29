import React, {PureComponent} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import Rating from '../Rating';

class ProductResult extends PureComponent<
  {
    key?: string;
    product: {
      id: string;
      sale: boolean;
      salePrice: number;
      price: number;
      thumbnail: string;
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
    dispatch?(val: any): void;
  },
  {
    isQuickView: boolean;
  }
> {
  constructor(props) {
    super(props);
  }

  render() {
    const {product, currency} = this.props;

    return (
      <div className="ps-product ps-product--wide ps-product--search-result">
        <div className="ps-product__thumbnail">
          <Link href="/product/[pid]" as={`/product/${product.id}`}>
            <a>
              <img src={product.thumbnail} alt="martfury" />
            </a>
          </Link>
        </div>
        <div className="ps-product__content">
          <Link href="/product/[pid]" as={`/product/${product.id}`}>
            <a className="ps-product__title">{product.title}</a>
          </Link>
          <div className="ps-product__rating">
            <Rating />
            <span>{product.ratingCount}</span>
          </div>
          {product.sale ? (
            <p className="ps-product__price sale">
              {currency ? currency.symbol : '$'}
              {product.price}
              <del className="ml-1">
                {currency ? currency.symbol : '$'}
                {product.salePrice}
              </del>
            </p>
          ) : (
            <p className="ps-product__price">
              {currency ? currency.symbol : '$'}
              {product.price}
            </p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.setting;
};
export default connect(mapStateToProps)(ProductResult);
