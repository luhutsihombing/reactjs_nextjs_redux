import React, {Component} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import {addItem} from '../../../../../store/cart/action';
import {addItemToCompare} from '../../../../../store/compare/action';
import {addItemToWishlist} from '../../../../../store/wishlist/action';
import Rating from '../../../Rating';

class InformationAffiliate extends Component<
  {
    product: {
      id: string;
      sale: boolean;
      salePrice: number;
      price: number;
      quantity: number;
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
  },
  {
    quantity: number;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleAddItemToCart = e => {
    e.preventDefault();
    const {product} = this.props;
    product.quantity = this.state.quantity;
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

  handleIncreaseItemQty = e => {
    const {quantity} = this.state;
    e.preventDefault();
    this.setState({quantity: quantity + 1});
  };

  handleDecreaseItemQty = e => {
    const {quantity} = this.state;
    e.preventDefault();
    if (this.state.quantity > 1) {
      this.setState({quantity: quantity - 1});
    }
  };

  render() {
    const {product, currency} = this.props;

    return (
      <div className="ps-product__info">
        <h1>{product.title}</h1>
        <div className="ps-product__meta">
          <p>
            Brand:
            <Link href="/shop">
              <a className="ml-2 text-capitalize">{product.vendor}</a>
            </Link>
          </p>
          <div className="ps-product__rating">
            <Rating />
            <span>(1 review)</span>
          </div>
        </div>
        {product.sale === true ? (
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
        <div className="ps-product__desc">
          <p>
            Sold By:
            <Link href="/shop">
              <a>
                <strong> {product.vendor}</strong>
              </a>
            </Link>
          </p>
          <ul className="ps-list--dot">
            <li> Unrestrained and portable active stereo speaker</li>
            <li> Free from the confines of wires and chords</li>
            <li> 20 hours of portable capabilities</li>
            <li> Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
            <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
          </ul>
        </div>
        <div className="ps-product__shopping">
          <a
            className="ps-btn"
            rel="noopener noreferrer"
            href="https://www.amazon.com/Premium-Military-Sunglasses-Polarized-protection/dp/B01GVRZ1BS/"
            target="_blank">
            Purchase on Amazon
          </a>
          <div className="ps-product__actions">
            <a href="#" onClick={this.handleAddItemToWishlist.bind(this)}>
              <i className="icon-heart" />
            </a>
            <a href="#" onClick={this.handleAddItemToCompare.bind(this)}>
              <i className="icon-chart-bars" />
            </a>
          </div>
        </div>
        <div className="ps-product__specification">
          <Link href="/page/blank">
            <a className="report">Report Abuse</a>
          </Link>
          <p>
            <strong>SKU:</strong> SF1133569600-1
          </p>
          <p className="categories">
            <strong> Categories:</strong>
            <Link href="/shop">
              <a>Consumer Electronics</a>
            </Link>
            <Link href="/shop">
              <a>Refrigerator</a>
            </Link>
            <Link href="/shop">
              <a>Babies & Moms</a>
            </Link>
          </p>
          <p className="tags">
            <strong> Tags</strong>
            <Link href="/shop">
              <a>sofa</a>
            </Link>
            <Link href="/shop">
              <a>technologies</a>
            </Link>
            <Link href="/shop">
              <a>wireless</a>
            </Link>
          </p>
        </div>
        <div className="ps-product__sharing">
          <a className="facebook" href="#">
            <i className="fa fa-facebook" />
          </a>
          <a className="twitter" href="#">
            <i className="fa fa-twitter" />
          </a>
          <a className="google" href="#">
            <i className="fa fa-google-plus" />
          </a>
          <a className="linkedin" href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a className="instagram" href="#">
            <i className="fa fa-instagram" />
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.setting;
};
export default connect(mapStateToProps)(InformationAffiliate);
