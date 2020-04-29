import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {addItem} from '../../../../../store/cart/action';
import Rating from '../../../Rating';

class InformationQuickView extends Component<
  {
    product: {
      quantity: number;
      title: string;
      vendor: string;
      price: number;
      sale: boolean;
      salePrice: number;
    };
    dispatch?(val): void;
  },
  {quantity: number}
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
    const {product} = this.props;
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
        {product.sale ? (
          <h4 className="ps-product__price sale">
            ${product.price}
            <del>${product.salePrice}</del>
          </h4>
        ) : (
          <h4 className="ps-product__price">${product.price}</h4>
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
          <figure>
            <figcaption>Quantity</figcaption>
            <div className="form-group--number">
              <button type="button" className="up" onClick={this.handleIncreaseItemQty.bind(this)}>
                <i className="fa fa-plus" />
              </button>
              <button
                type="button"
                className="down"
                onClick={this.handleDecreaseItemQty.bind(this)}>
                <i className="fa fa-minus" />
              </button>
              <input
                className="form-control"
                type="text"
                placeholder={this.state.quantity.toString()}
                disabled
              />
            </div>
          </figure>
          <a
            className="ps-btn ps-btn--black"
            href="#"
            onClick={this.handleAddItemToCart.bind(this)}>
            Add to cart
          </a>
          <a className="ps-btn" href="#">
            Buy Now
          </a>
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
            <strong> Tags:</strong>
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
  return state.cart;
};
export default connect(mapStateToProps)(InformationQuickView);
