import React, {Component} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import {addItem} from '../../../store/cart/action';
import {addItemToCompare} from '../../../store/compare/action';
import {addItemToWishlist} from '../../../store/wishlist/action';

class ProductWide extends Component<{
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
  dispatch?(val: any): void;
}> {
  constructor(props) {
    super(props);
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

  // handleShowQuickView = e => {
  //   e.preventDefault();
  //   this.setState({isQuickView: true});
  // };
  //
  // handleHideQuickView = e => {
  //   e.preventDefault();
  //   this.setState({isQuickView: false});
  // };

  render() {
    const {product, currency} = this.props;
    let productRating: React.ReactElement[] = null;
    if (product.badge) {
      productRating = product.badge.map(badge => {
        if (badge.type === 'sale') {
          return (
            <div className="ps-product__badge" key={`${badge.type} ${badge.value}`}>
              {badge.value}
            </div>
          );
        } else if (badge.type === 'outStock') {
          return (
            <div className="ps-product__badge.out-stock" key={`${badge.type} ${badge.value}`}>
              {badge.value}
            </div>
          );
        } else {
          return (
            <div className="ps-product__badge.hot" key={`${badge.type} ${badge.value}`}>
              {badge.value}
            </div>
          );
        }
      });
    }
    return (
      <div className="ps-product ps-product--wide">
        <div className="ps-product__thumbnail">
          <Link href="/product/[pid]" as={`/product/${product.id}`}>
            <a>
              <img src={product.thumbnail} alt="martfury" />
            </a>
          </Link>
        </div>
        <div className="ps-product__container">
          <div className="ps-product__content">
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
              <a className="ps-product__title">{product.title}</a>
            </Link>
            <p className="ps-product__vendor">
              Sold by:
              <Link href="/shop">
                <a>{product.vendor}</a>
              </Link>
            </p>
            <ul className="ps-product__desc">
              <li>Unrestrained and portable active stereo speaker</li>
              <li> Free from the confines of wires and chords</li>
              <li> 20 hours of portable capabilities</li>
              <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
              <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
            </ul>
          </div>
          <div className="ps-product__shopping">
            {product.sale === true ? (
              <p className="ps-product__price sale">
                {currency ? currency.symbol : '$'}
                {product.price}
                <del className="ml-1">
                  {currency ? currency.symbol : '$'}
                  {product.salePrice}{' '}
                </del>
              </p>
            ) : (
              <p className="ps-product__price">
                {currency ? currency.symbol : '$'}
                {product.price}
              </p>
            )}
            <a className="ps-btn" href="#" onClick={this.handleAddItemToCart.bind(this)}>
              Add to cart
            </a>
            <ul className="ps-product__actions">
              <li>
                <a href="#" onClick={this.handleAddItemToWishlist.bind(this)}>
                  <i className="icon-heart" /> Wishlist
                </a>
              </li>
              <li>
                <a href="#" onClick={this.handleAddItemToCompare.bind(this)}>
                  <i className="icon-chart-bars" /> Compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.setting;
};
export default connect(mapStateToProps)(ProductWide);
