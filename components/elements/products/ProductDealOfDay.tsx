import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {Modal} from 'antd';
import {addItem} from '../../../store/cart/action';
import {addItemToCompare} from '../../../store/compare/action';
import {addItemToWishlist} from '../../../store/wishlist/action';
import ProductDetailQuickView from '../detail/ProductDetailQuickView';
import Rating from '../Rating';

class ProductDealOfDay extends Component<
  {
    key: string;
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
    this.state = {
      isQuickView: false
    };
  }

  handleAddItemToCart = e => {
    e.preventDefault();
    const {product} = this.props;
    this.props.dispatch(addItem(product));
  };

  handleAddItemToCompare = e => {
    e.preventDefault();
    const {product} = this.props;
    this.props.dispatch(addItemToCompare(product));
  };

  handleAddItemToWishlist = e => {
    e.preventDefault();
    const {product} = this.props;
    this.props.dispatch(addItemToWishlist(product));
  };

  handleShowQuickView = e => {
    e.preventDefault();
    this.setState({isQuickView: true});
  };

  handleHideQuickView = e => {
    e.preventDefault();
    this.setState({isQuickView: false});
  };

  render() {
    const {product, currency} = this.props;
    let productBadge: React.ReactElement[] = null;
    if (product?.badge?.length) {
      productBadge = product.badge.map(badge => {
        if (badge.type === 'sale') {
          return (
            <div className="ps-product__badge" key={`${badge.type} ${badge.value}`}>
              {badge.value}
            </div>
          );
        } else if (badge.type === 'outStock') {
          return (
            <div className="ps-product__badge out-stock" key={`${badge.type} ${badge.value}`}>
              {badge.value}
            </div>
          );
        } else {
          return (
            <div className="ps-product__badge hot" key={`${badge.type} ${badge.value}`}>
              {badge.value}
            </div>
          );
        }
      });
    }
    return (
      <div className="ps-product ps-product--inner">
        <div className="ps-product__thumbnail">
          <Link href="/product/[pid]" as={`/product/${product.id}`}>
            <a>
              <img src={product.thumbnail} alt="martfury" />
            </a>
          </Link>
          {product?.badge ? productBadge : ''}
          <ul className="ps-product__actions">
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Read More"
                onClick={this.handleAddItemToCart.bind(this)}>
                <i className="icon-bag2" />
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Quick View"
                onClick={this.handleShowQuickView.bind(this)}>
                <i className="icon-eye" />
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to wishlist"
                onClick={this.handleAddItemToWishlist.bind(this)}>
                <i className="icon-heart" />
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Compare"
                onClick={this.handleAddItemToCompare.bind(this)}>
                <i className="icon-chart-bars" />
              </a>
            </li>
          </ul>
        </div>
        <div className="ps-product__container">
          <Link href="/shop">
            <a className="ps-product__vendor">Young Shop</a>
          </Link>
          <div className="ps-product__content">
            {product.sale ? (
              <p className="ps-product__price sale">
                {currency ? currency.symbol : '$'}
                {product.price}
                <del className="ml-2">
                  {currency ? currency.symbol : '$'}
                  {product.salePrice}
                </del>
                <small>18% off</small>
              </p>
            ) : (
              <p className="ps-product__price">
                {currency ? currency.symbol : '$'}
                {product.price}
              </p>
            )}
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
              <a className="ps-product__title">{product.title}</a>
            </Link>

            <div className="ps-product__rating">
              <Rating />
              <span>{product.ratingCount}</span>
            </div>
            <div className="ps-product__progress-bar ps-progress" data-value="97">
              <div className="ps-progress__value">
                <span style={{width: `${50}%`}} />
              </div>
              <p>Sold:22</p>
            </div>
          </div>
        </div>
        <Modal
          title={product.title}
          centered
          footer={null}
          width={1024}
          onCancel={this.handleHideQuickView}
          visible={this.state.isQuickView}>
          <ProductDetailQuickView product={product} />
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.setting;
};
export default connect(mapStateToProps)(ProductDealOfDay);
